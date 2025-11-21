import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase, CreateMessageData } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Save to Supabase
        const messageData: CreateMessageData = {
            type: 'contact',
            name,
            email,
            phone: phone || null,
            subject: subject || 'Contact Form Submission',
            message,
            metadata: {
                userAgent: request.headers.get('user-agent'),
                ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
            },
        };

        const { data: savedMessage, error: dbError } = await supabase
            .from('messages')
            .insert([messageData])
            .select()
            .single();

        if (dbError) {
            console.error('Database error:', dbError);
            return NextResponse.json(
                { error: 'Failed to save message' },
                { status: 500 }
            );
        }

        // Send email via Resend
        try {
            await resend.emails.send({
                from: 'AVERO Contact Form <onboarding@resend.dev>', // Use your verified domain
                to: 'sjshivanshjain@gmail.com',
                replyTo: email,
                subject: `New Contact: ${subject || 'No Subject'}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <div style="background: linear-gradient(135deg, #FF1A1A 0%, #C40000 100%); padding: 30px; text-align: center;">
                            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
                        </div>
                        <div style="padding: 30px; background: #f5f5f5;">
                            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                                <h2 style="color: #FF1A1A; margin-top: 0;">Contact Details</h2>
                                <p><strong>Name:</strong> ${name}</p>
                                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                                ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
                                <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
                            </div>
                            <div style="background: white; padding: 20px; border-radius: 8px;">
                                <h2 style="color: #FF1A1A; margin-top: 0;">Message</h2>
                                <p style="white-space: pre-wrap;">${message}</p>
                            </div>
                            <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #FF1A1A; border-radius: 4px;">
                                <p style="margin: 0; font-size: 14px;">
                                    <strong>Message ID:</strong> ${savedMessage.id}<br>
                                    <strong>Received:</strong> ${new Date().toLocaleString()}
                                </p>
                            </div>
                        </div>
                        <div style="padding: 20px; text-align: center; color: #666; font-size: 12px;">
                            <p>This email was sent from the AVERO website contact form.</p>
                        </div>
                    </div>
                `,
            });
        } catch (emailError) {
            console.error('Email error:', emailError);
            // Don't fail the request if email fails, message is already saved
        }

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully',
            id: savedMessage.id,
        });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
