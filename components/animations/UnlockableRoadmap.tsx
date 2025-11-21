"use client";

import { motion } from 'framer-motion';
import { Lock, Unlock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface RoadmapItem {
    title: string;
    description: string;
    status: 'locked' | 'unlocked' | 'completed';
    quarter: string;
}

const roadmapData: RoadmapItem[] = [
    {
        title: 'VEXO Core Launch',
        description: 'Multi-agent orchestration engine with offline-first architecture',
        status: 'completed',
        quarter: 'Q1 2024',
    },
    {
        title: 'Enterprise Integration',
        description: 'API gateway and enterprise deployment tools',
        status: 'unlocked',
        quarter: 'Q2 2024',
    },
    {
        title: 'Mobile VEXO',
        description: 'iOS and Android AGI companion apps',
        status: 'unlocked',
        quarter: 'Q3 2024',
    },
    {
        title: 'Healthcare Suite',
        description: 'SECC expansion with hospital integration',
        status: 'locked',
        quarter: 'Q4 2024',
    },
    {
        title: 'Global AGI Network',
        description: 'Decentralized agent collaboration protocol',
        status: 'locked',
        quarter: 'Q1 2025',
    },
];

export default function UnlockableRoadmap() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="space-y-6">
            {roadmapData.map((item, i) => (
                <motion.div
                    key={i}
                    className={`glass-card p-6 rounded-xl border relative overflow-hidden ${item.status === 'locked'
                            ? 'border-white/10 opacity-60'
                            : 'border-primary/30'
                        }`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: item.status === 'locked' ? 0.6 : 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onHoverStart={() => setHoveredIndex(i)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    whileHover={item.status !== 'locked' ? { scale: 1.02 } : {}}
                >
                    {/* Background glow for unlocked items */}
                    {item.status !== 'locked' && hoveredIndex === i && (
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    )}

                    <div className="flex items-start gap-4 relative z-10">
                        {/* Status icon */}
                        <div className="mt-1">
                            {item.status === 'completed' && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                >
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </motion.div>
                            )}
                            {item.status === 'unlocked' && (
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    <Unlock className="w-6 h-6 text-primary" />
                                </motion.div>
                            )}
                            {item.status === 'locked' && (
                                <Lock className="w-6 h-6 text-muted-foreground" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                                <span className="text-sm text-primary font-semibold">{item.quarter}</span>
                            </div>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </div>

                    {/* Progress bar for unlocked items */}
                    {item.status === 'unlocked' && (
                        <motion.div
                            className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary to-secondary"
                                initial={{ width: '0%' }}
                                animate={{ width: '60%' }}
                                transition={{ duration: 1.5, delay: i * 0.1 + 0.3 }}
                            />
                        </motion.div>
                    )}

                    {/* Completion checkmark animation */}
                    {item.status === 'completed' && (
                        <motion.div
                            className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 200, delay: i * 0.1 }}
                        >
                            <CheckCircle2 className="w-8 h-8 text-primary" />
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
