import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import PageTransition from '@/components/animations/PageTransition';
import MatrixRain from '@/components/animations/MatrixRain';
import FloatingParticles from '@/components/animations/FloatingParticles';
import CyberGrid from '@/components/animations/CyberGrid';
import FounderAIPersona from '@/components/FounderAIPersona';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
    title: "Avero – AI-Powered Startup Solutions",
    description:
        "Avero is an AI-powered platform delivering intelligent automations, agent systems, and business solutions for modern startups.",
    keywords: [
        "Avero",
        "AI startup",
        "AI automation",
        "AI agents",
        "business automation",
        "startup tools",
        "Avero AI"
    ],
    metadataBase: new URL("https://averoai.tech"),
    openGraph: {
        title: "Avero – AI Powered Startup Tools",
        description:
            "Avero delivers intelligent AI systems and automations for businesses and founders.",
        url: "https://averoai.tech",
        siteName: "Avero",
        images: [
            {
                url: "/og-image.png", // place your image in /public
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Avero – AI for Startups",
        description:
            "Smart AI tools, automations and agents for modern founders.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://averoai.tech",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <MatrixRain />
                    <FloatingParticles />
                    <CyberGrid />
                    <div className="flex flex-col min-h-screen overflow-x-hidden relative z-10">
                        <Navbar />
                        <PageTransition>
                            <main className="flex-grow pt-16">
                                {children}
                            </main>
                        </PageTransition>
                        <Footer />
                    </div>
                    <FounderAIPersona />
                </ThemeProvider>
            </body>
        </html>
    );
}
