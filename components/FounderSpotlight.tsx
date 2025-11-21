"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import PlasmaBackground from '@/components/animations/PlasmaBackground';
import FloatingParticles from '@/components/animations/FloatingParticles';

export default function FounderSpotlight() {
    const achievements = [
        'Creator of VEXO (Multi-Agent AGI OS)',
        'AI/ML Engineer',
        'System Design + LLM Workflow Architect',
        'Product & Innovation Lead',
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            <PlasmaBackground />
            <FloatingParticles />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Founder Spotlight</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Meet the mind behind AVERO.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-30 blur-2xl"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        />

                        <motion.div
                            className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-primary shadow-red-glow"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/founderimage.jpg"
                                alt="Shivansh Jain"
                                fill
                                className="object-cover"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                            Shivansh Jain
                        </h3>
                        <p className="text-xl text-primary mb-6 font-semibold">
                            Founder & Lead AI Engineer
                        </p>

                        <div className="space-y-4 mb-8">
                            {achievements.map((achievement, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-primary mt-2 mr-4"
                                        animate={{
                                            boxShadow: [
                                                '0 0 5px #FF1A1A',
                                                '0 0 15px #FF1A1A',
                                                '0 0 5px #FF1A1A',
                                            ],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <p className="text-lg text-muted-foreground">{achievement}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="glass-card p-6 rounded-xl border border-primary/30"
                            whileHover={{ borderColor: 'rgba(255,26,26,0.6)' }}
                        >
                            <p className="text-lg italic text-foreground">
                                "Building intelligent systems for the next era."
                            </p>
                            <p className="text-sm text-primary mt-2">— Shivansh Jain</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
