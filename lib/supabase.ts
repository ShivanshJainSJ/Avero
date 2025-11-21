import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client (uses service role key)
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
        auth: { persistSession: false }
    }
);

// Client-side Supabase client (uses anon key)
export const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Types
export type MessageType = 'contact' | 'ai_chat';
export type MessageStatus = 'new' | 'read' | 'replied';

export interface Message {
    id: string;
    type: MessageType;
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    status: MessageStatus;
    metadata?: Record<string, any>;
    created_at: string;
    updated_at: string;
}

export interface CreateMessageData {
    type: MessageType;
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    metadata?: Record<string, any>;
}
