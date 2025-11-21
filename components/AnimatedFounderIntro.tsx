"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import AgentNetwork from '@/components/animations/AgentNetwork';
import FloatingParticles from '@/components/animations/FloatingParticles';

export default function AnimatedFounderIntro() {
    const [displayName, setDisplayName] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullName = 'Shivansh Jain';

    useEffect(() => {
        if (currentIndex < fullName.length) {
            const timeout = setTimeout(() => {
                setDisplayName(prev => prev + fullName[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 80);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <div className="relative w-full py-20 overflow-hidden">
            <FloatingParticles />

            <div className="absolute inset-0 opacity-20 z-0">
                <AgentNetwork />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative"
                    >
                        <motion.div
                            className="absolute -inset-6 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20 blur-3xl"
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        <motion.div
                            className="relative w-full aspect-square max-w-lg rounded-2xl overflow-hidden border-2 border-primary shadow-red-glow"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(255,26,26,0.5)',
                                    '0 0 40px rgba(255,26,26,0.8)',
                                    '0 0 20px rgba(255,26,26,0.5)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Image
                                src="/founderimage.jpg"
                                alt="Shivansh Jain"
                                fill
                                className="object-cover"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative mb-6">
                            <motion.h2
                                className="text-5xl md:text-7xl font-bold text-gradient relative inline-block"
                                style={{
                                    textShadow: '0 0 20px rgba(255,26,26,0.5)',
                                }}
                            >
                                {displayName}
                                {currentIndex < fullName.length && (
                                    <motion.span
                                        className="inline-block w-1 h-12 bg-primary ml-2"
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                    />
                                )}
                            </motion.h2>

                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-full"
                                initial={{ x: '-100%' }}
                                animate={{ x: '200%' }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                }}
                                style={{ mixBlendMode: 'overlay' }}
                            />

                            <motion.div
                                className="absolute -inset-2 bg-primary/10 blur-xl"
                                animate={{
                                    opacity: [0, 0.5, 0],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>

                        <motion.p
                            className="text-2xl text-primary font-semibold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            Founder & Lead AI Engineer at AVERO
                        </motion.p>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                        >
                            <p className="text-lg text-muted-foreground">
                                Creator of VEXO, the world's first offline-first multi-agent AGI operating system.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Specializing in AI Engineering, Multi-Agent Systems, LLMs, and AGI-driven product development.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mt-8 flex gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.5 }}
                        >
                            {['AI', 'LLMs', 'Multi-Agent', 'System Design', 'Next.js'].map((tag, i) => (
                                <motion.span
                                    key={i}
                                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 2.7 + i * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
