import { NextRequest, NextResponse } from 'next/server';
import { supabase, CreateMessageData } from '@/lib/supabase';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, question, answer } = body;

        // Validation
        if (!name || !email || !question || !answer) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Save to Supabase
        const messageData: CreateMessageData = {
            type: 'ai_chat',
            name,
            email: email || 'anonymous@avero.ai',
            subject: 'AI Chat Interaction',
            message: `Q: ${question}\n\nA: ${answer}`,
            metadata: {
                question,
                answer,
                userAgent: request.headers.get('user-agent'),
                timestamp: new Date().toISOString(),
            },
        };

        const { data, error: dbError } = await supabase
            .from('messages')
            .insert([messageData])
            .select()
            .single();

        if (dbError) {
            console.error('Database error:', dbError);
            return NextResponse.json(
                { error: 'Failed to log chat' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            id: data.id,
        });
    } catch (error) {
        console.error('AI chat log error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
