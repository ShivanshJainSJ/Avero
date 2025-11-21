"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import PlasmaBackground from '@/components/animations/PlasmaBackground';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-surface/50 to-background">
            <PlasmaBackground />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>

            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-primary drop-shadow-red-glow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    The Future of <span className="text-gradient">Intelligent Systems</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Building offline-first AGI systems that prioritize privacy, security, and unparalleled performance.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link href="/products">
                        <Button size="lg" className="h-14 px-10 text-lg shadow-red-glow hover:shadow-neon">
                            Explore Products
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="h-14 px-10 text-lg">
                            Contact Us
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
