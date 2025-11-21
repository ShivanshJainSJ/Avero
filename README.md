# AVERO Website

Official website for AVERO - Building intelligent systems for the next era.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, PostCSS
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

3.  **Build for production**:
    ```bash
    npm run build
    npm start
    ```

## Environment Variables

Create a `.env.local` file:

```env
# Optional: For contact form (SendGrid/Mailgun)
SMTP_API_KEY=your_api_key
SMTP_FROM_EMAIL=noreply@avero.ai
```

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components.
- `data/`: Static content (Products, Team, Roadmap).
- `lib/`: Utilities and types.
- `public/`: Static assets.

## Deployment

Recommended deployment via [Vercel](https://vercel.com).

1.  Push to GitHub.
2.  Import project in Vercel.
3.  Add environment variables.
4.  Deploy.
