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

export const metadata: Metadata = {
    title: 'AVERO | Intelligent Systems for the Next Era',
    description: 'AVERO designs secure, scalable AI systems. From offline-first AGI operating systems to enterprise energy controllers.',
    openGraph: {
        title: 'AVERO | Intelligent Systems',
        description: 'Building the future of AI infrastructure.',
        images: ['/images/hero-illustration.svg'],
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
