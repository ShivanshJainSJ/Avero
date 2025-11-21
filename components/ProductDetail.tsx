"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import AgentNetwork from '@/components/animations/AgentNetwork';
import SECCAnimation from '@/components/animations/SECCAnimation';
import DreamMoodAnimation from '@/components/animations/DreamMoodAnimation';

interface ProductDetailProps {
    title: string;
    description: string;
    features: string[];
    specs: { name: string; value: string }[];
    image: string;
}

export default function ProductDetail({ title, description, features, specs, image }: ProductDetailProps) {
    const showVEXOAnimation = title.toLowerCase().includes('vexo');
    const showSECCAnimation = title.toLowerCase().includes('secc');
    const showDreamAnimation = title.toLowerCase().includes('sleep') || title.toLowerCase().includes('dream');

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <Link href="/products" className="text-primary hover:text-primary-dark transition-colors inline-flex items-center mb-8">
                        ← Back to Products
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">{title}</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">{description}</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-96 rounded-2xl overflow-hidden glass-card border border-white/10 shadow-red-glow"
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                        <div className="space-y-4">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-start"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 shadow-[0_0_10px_#FF1A1A]" />
                                    <p className="text-muted-foreground">{feature}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {showVEXOAnimation && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-16 glass-card p-8 rounded-2xl border border-white/10"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">Agent Orchestration Network</h2>
                        <AgentNetwork />
                    </motion.div>
                )}

                {showSECCAnimation && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-16 glass-card p-8 rounded-2xl border border-white/10"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">Care Monitoring System</h2>
                        <SECCAnimation />
                    </motion.div>
                )}

                {showDreamAnimation && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-16 glass-card p-8 rounded-2xl border border-white/10"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">Dream Mood Analysis</h2>
                        <DreamMoodAnimation />
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="glass-card p-8 rounded-2xl border border-white/10"
                >
                    <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {specs.map((spec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + i * 0.05 }}
                                className="border-l-2 border-primary/30 pl-4"
                            >
                                <div className="text-sm text-muted-foreground mb-1">{spec.name}</div>
                                <div className="font-semibold">{spec.value}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-12 text-center"
                >
                    <Link href="/contact">
                        <Button size="lg" className="shadow-red-glow hover:shadow-neon">
                            Request a Demo
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
