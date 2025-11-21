import { NextRequest, NextResponse } from 'next/server';
import { supabase, MessageType, MessageStatus } from '@/lib/supabase';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type') as MessageType | null;
        const status = searchParams.get('status') as MessageStatus | null;
        const search = searchParams.get('search');
        const limit = parseInt(searchParams.get('limit') || '50');
        const offset = parseInt(searchParams.get('offset') || '0');

        let query = supabase
            .from('messages')
            .select('*', { count: 'exact' })
            .order('created_at', { ascending: false })
            .range(offset, offset + limit - 1);

        // Apply filters
        if (type) {
            query = query.eq('type', type);
        }
        if (status) {
            query = query.eq('status', status);
        }
        if (search) {
            query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,message.ilike.%${search}%`);
        }

        const { data, error, count } = await query;

        if (error) {
            console.error('Database error:', error);
            return NextResponse.json(
                { error: 'Failed to fetch messages' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            messages: data,
            total: count,
            limit,
            offset,
        });
    } catch (error) {
        console.error('Messages fetch error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
