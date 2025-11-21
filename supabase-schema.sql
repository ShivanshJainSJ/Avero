-- Query Management System Schema for Supabase
-- Run this in your Supabase SQL Editor

-- Create enum types
CREATE TYPE message_type AS ENUM ('contact', 'ai_chat');
CREATE TYPE message_status AS ENUM ('new', 'read', 'replied');

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    type message_type NOT NULL DEFAULT 'contact',
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status message_status NOT NULL DEFAULT 'new',
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_messages_type ON messages(type);
CREATE INDEX idx_messages_status ON messages(status);
CREATE INDEX idx_messages_created_at ON messages(created_at DESC);
CREATE INDEX idx_messages_email ON messages(email);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_messages_updated_at
    BEFORE UPDATE ON messages
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create policy for service role (bypass RLS)
-- Note: Service role key bypasses RLS by default, but we'll create policies for anon access if needed

-- Policy for public to insert messages (contact form submissions)
CREATE POLICY "Allow public insert" ON messages
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Policy for authenticated users to read all messages (admin dashboard)
CREATE POLICY "Allow authenticated read" ON messages
    FOR SELECT
    TO authenticated
    USING (true);

-- Policy for authenticated users to update messages (admin dashboard)
CREATE POLICY "Allow authenticated update" ON messages
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON messages TO anon, authenticated;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Create a view for message statistics (optional)
CREATE OR REPLACE VIEW message_stats AS
SELECT 
    type,
    status,
    COUNT(*) as count,
    DATE(created_at) as date
FROM messages
GROUP BY type, status, DATE(created_at)
ORDER BY date DESC;

GRANT SELECT ON message_stats TO authenticated;
