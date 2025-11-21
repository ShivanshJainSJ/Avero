"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Target, Award, Briefcase } from 'lucide-react';

const timelineEvents = [
    {
        year: '2018',
        title: 'AI Journey Begins',
        description: 'Started exploring machine learning and neural networks',
        icon: Code2,
    },
    {
        year: '2020',
        title: 'First AI Projects',
        description: 'Built computer vision and NLP applications',
        icon: Lightbulb,
    },
    {
        year: '2022',
        title: 'Multi-Agent Systems',
        description: 'Deep dive into autonomous agent orchestration',
        icon: Briefcase,
    },
    {
        year: '2023',
        title: 'Founded AVERO',
        description: 'Launched AVERO to democratize AGI technology',
        icon: Rocket,
    },
    {
        year: '2024',
        title: 'VEXO Launch',
        description: 'Released VEXO - Offline-First Multi-Agent AGI OS',
        icon: Target,
    },
    {
        year: '2025',
        title: 'Global Expansion',
        description: 'Scaling AVERO products worldwide',
        icon: Award,
    },
];

export default function FounderAITimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div ref={containerRef} className="relative py-20">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    The <span className="text-gradient">Journey</span>
                </motion.h2>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10" />
                    <motion.div
                        className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary to-secondary"
                        style={{ height: lineHeight }}
                    />

                    {/* Timeline events */}
                    <div className="space-y-12">
                        {timelineEvents.map((event, i) => {
                            const Icon = event.icon;
                            return (
                                <motion.div
                                    key={i}
                                    className="relative pl-24"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {/* Node */}
                                    <motion.div
                                        className="absolute left-4 top-0 w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center"
                                        whileHover={{ scale: 1.2 }}
                                        animate={{
                                            boxShadow: [
                                                '0 0 0px rgba(255,26,26,0.4)',
                                                '0 0 20px rgba(255,26,26,0.8)',
                                                '0 0 0px rgba(255,26,26,0.4)',
                                            ],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Icon size={16} className="text-primary" />
                                    </motion.div>

                                    {/* Content card */}
                                    <motion.div
                                        className="glass-card p-6 rounded-xl border border-primary/30 hover:border-primary/60 transition-colors group"
                                        whileHover={{ scale: 1.02, x: 10 }}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <span className="text-2xl font-bold text-primary">{event.year}</span>
                                            <motion.div
                                                className="w-2 h-2 rounded-full bg-primary"
                                                animate={{
                                                    scale: [1, 1.5, 1],
                                                    opacity: [0.5, 1, 0.5],
                                                }}
                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-muted-foreground">{event.description}</p>

                                        {/* Connecting line animation */}
                                        <motion.div
                                            className="absolute left-12 top-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 + 0.3 }}
                                        />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
