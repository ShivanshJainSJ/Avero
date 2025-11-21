"use client";

import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, Target, Zap } from 'lucide-react';
import { useState } from 'react';

const achievements = [
    {
        icon: Trophy,
        title: 'NPTEL Elite',
        description: 'Top 5% in AI/ML Certification',
        score: '95%',
        year: '2023',
        color: '#FFD700',
    },
    {
        icon: Award,
        title: 'Hackathon Winner',
        description: 'National AI Innovation Challenge',
        score: '1st Place',
        year: '2023',
        color: '#FF1A1A',
    },
    {
        icon: Star,
        title: 'Research Publication',
        description: 'Multi-Agent Systems Paper',
        score: 'Published',
        year: '2024',
        color: '#C40000',
    },
    {
        icon: Medal,
        title: 'Open Source',
        description: 'Contributor to Major AI Projects',
        score: '500+ PRs',
        year: '2022-24',
        color: '#7A0000',
    },
    {
        icon: Target,
        title: 'Product Launch',
        description: 'VEXO AGI Operating System',
        score: 'Live',
        year: '2024',
        color: '#FF1A1A',
    },
    {
        icon: Zap,
        title: 'Startup Founder',
        description: 'Founded AVERO',
        score: 'Active',
        year: '2023',
        color: '#C40000',
    },
];

export default function FounderAchievements() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="w-full">
            <h2 className="text-4xl font-bold text-center mb-12">
                Wall of <span className="text-gradient">Achievements</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, i) => {
                    const Icon = achievement.icon;
                    const isHovered = hoveredIndex === i;

                    return (
                        <motion.div
                            key={i}
                            className="relative"
                            initial={{ opacity: 0, rotateY: -90 }}
                            whileInView={{ opacity: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            onHoverStart={() => setHoveredIndex(i)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            style={{ perspective: '1000px' }}
                        >
                            <motion.div
                                className="glass-card rounded-2xl p-6 border-2 border-white/10 relative overflow-hidden"
                                animate={
                                    isHovered
                                        ? {
                                            rotateY: [0, 5, -5, 0],
                                            borderColor: achievement.color,
                                            boxShadow: `0 0 30px ${achievement.color}60`,
                                        }
                                        : {}
                                }
                                transition={{ duration: 0.5 }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Holographic glow */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0"
                                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Icon */}
                                <motion.div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 relative z-10"
                                    style={{
                                        backgroundColor: `${achievement.color}20`,
                                        border: `2px solid ${achievement.color}40`,
                                    }}
                                    animate={
                                        isHovered
                                            ? {
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 360],
                                            }
                                            : {}
                                    }
                                    transition={{ duration: 0.6 }}
                                >
                                    <Icon size={32} style={{ color: achievement.color }} />
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {achievement.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-2xl font-bold"
                                            style={{ color: achievement.color }}
                                        >
                                            {achievement.score}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            {achievement.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Shine effect */}
                                {isHovered && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        initial={{ x: '-100%' }}
                                        animate={{ x: '200%' }}
                                        transition={{ duration: 0.8 }}
                                    />
                                )}

                                {/* Corner accent */}
                                <motion.div
                                    className="absolute top-0 right-0 w-20 h-20 opacity-20"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${achievement.color}, transparent)`,
                                    }}
                                    animate={
                                        isHovered
                                            ? {
                                                scale: [1, 1.5, 1],
                                                opacity: [0.2, 0.4, 0.2],
                                            }
                                            : {}
                                    }
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
