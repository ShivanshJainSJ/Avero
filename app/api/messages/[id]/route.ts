import { NextRequest, NextResponse } from 'next/server';
import { supabase, MessageStatus } from '@/lib/supabase';

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const body = await request.json();
        const { status } = body;

        // Validation
        if (!status || !['new', 'read', 'replied'].includes(status)) {
            return NextResponse.json(
                { error: 'Invalid status' },
                { status: 400 }
            );
        }

        // Update message
        const { data, error } = await supabase
            .from('messages')
            .update({ status: status as MessageStatus })
            .eq('id', id)
            .select()
            .single();

        if (error) {
            console.error('Database error:', error);
            return NextResponse.json(
                { error: 'Failed to update message' },
                { status: 500 }
            );
        }

        if (!data) {
            return NextResponse.json(
                { error: 'Message not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: data,
        });
    } catch (error) {
        console.error('Message update error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Database error:', error);
            return NextResponse.json(
                { error: 'Failed to fetch message' },
                { status: 500 }
            );
        }

        if (!data) {
            return NextResponse.json(
                { error: 'Message not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Message fetch error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
