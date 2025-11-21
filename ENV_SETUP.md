# Environment Variables Setup

## Required Environment Variables

Add these to your `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Resend Email Configuration
RESEND_API_KEY=your_resend_api_key
```

## How to Get These Values

### Supabase
1. Go to https://supabase.com
2. Create a new project (free tier)
3. Go to Project Settings > API
4. Copy:
   - `URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

### Resend
1. Go to https://resend.com
2. Sign up for free account
3. Go to API Keys
4. Create new API key
5. Copy → `RESEND_API_KEY`

## Database Setup

1. Go to your Supabase project
2. Click on "SQL Editor"
3. Run the SQL from `supabase-schema.sql`
4. Verify the `messages` table was created

## Resend Domain Setup (Optional)

For production, verify your domain in Resend:
1. Go to Resend Dashboard > Domains
2. Add your domain
3. Add DNS records
4. Update the `from` field in `/app/api/contact/route.ts`

For development, use `onboarding@resend.dev` (default).
