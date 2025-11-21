"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
    children: React.ReactNode;
    offset?: number;
    className?: string;
}

export function ParallaxSection({ children, offset = 50, className = '' }: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <motion.div ref={ref} style={{ y, opacity }} className={className}>
            {children}
        </motion.div>
    );
}

export default function Parallax3DHomepage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -600]);

    return (
        <div ref={containerRef} className="relative min-h-[300vh]">
            {/* Layer 1 - Background */}
            <motion.div
                className="fixed inset-0 z-0"
                style={{ y: layer1Y }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />
            </motion.div>

            {/* Layer 2 - Mid-ground */}
            <motion.div
                className="fixed inset-0 z-10 flex items-center justify-center"
                style={{ y: layer2Y }}
            >
                <motion.div
                    className="w-96 h-96 rounded-full bg-primary/10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
            </motion.div>

            {/* Layer 3 - Foreground content */}
            <motion.div
                className="relative z-20"
                style={{ y: layer3Y }}
            >
                <div className="min-h-screen flex items-center justify-center">
                    <ParallaxSection offset={100}>
                        <div className="glass-card rounded-3xl p-12 border border-primary/30 max-w-4xl mx-auto">
                            <motion.h1
                                className="text-6xl font-bold text-center mb-6"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Welcome to <span className="text-gradient">AVERO</span>
                            </motion.h1>
                            <motion.p
                                className="text-xl text-center text-muted-foreground"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Building the Future of Intelligent Systems
                            </motion.p>
                        </div>
                    </ParallaxSection>
                </div>

                <div className="min-h-screen flex items-center justify-center">
                    <ParallaxSection offset={150}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="glass-card rounded-2xl p-8 border border-primary/30"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                >
                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                        <span className="text-2xl font-bold text-primary">{i}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Feature {i}</h3>
                                    <p className="text-muted-foreground">
                                        Experience the power of 3D parallax scrolling
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </ParallaxSection>
                </div>
            </motion.div>

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="fixed w-2 h-2 bg-primary/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
}
