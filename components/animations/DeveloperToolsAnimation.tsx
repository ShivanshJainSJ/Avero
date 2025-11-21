"use client";

import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Zap, GitBranch, Terminal } from 'lucide-react';

const tools = [
    { icon: Code2, name: 'Next.js', color: '#FF1A1A' },
    { icon: Database, name: 'PostgreSQL', color: '#C40000' },
    { icon: Cpu, name: 'TensorFlow', color: '#FF1A1A' },
    { icon: Zap, name: 'FastAPI', color: '#C40000' },
    { icon: GitBranch, name: 'Git', color: '#FF1A1A' },
    { icon: Terminal, name: 'Docker', color: '#C40000' },
];

export default function DeveloperToolsAnimation() {
    return (
        <div className="relative w-full h-64 flex items-center justify-center">
            {/* Central glow */}
            <motion.div
                className="absolute w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Orbiting tool icons */}
            {tools.map((tool, i) => {
                const Icon = tool.icon;
                const angle = (i / tools.length) * 2 * Math.PI;
                const radius = 100;

                return (
                    <motion.div
                        key={i}
                        className="absolute"
                        animate={{
                            x: [
                                Math.cos(angle) * radius,
                                Math.cos(angle + Math.PI * 2) * radius,
                            ],
                            y: [
                                Math.sin(angle) * radius,
                                Math.sin(angle + Math.PI * 2) * radius,
                            ],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: i * 0.2,
                        }}
                    >
                        <motion.div
                            className="w-12 h-12 rounded-lg bg-surface/80 border border-primary/30 flex items-center justify-center backdrop-blur-sm"
                            whileHover={{ scale: 1.2, borderColor: tool.color }}
                            style={{ boxShadow: `0 0 20px ${tool.color}40` }}
                        >
                            <Icon size={24} style={{ color: tool.color }} />
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {tools.map((_, i) => {
                    const angle1 = (i / tools.length) * 2 * Math.PI;
                    const angle2 = ((i + 1) / tools.length) * 2 * Math.PI;
                    const radius = 100;
                    const centerX = '50%';
                    const centerY = '50%';

                    return (
                        <motion.line
                            key={i}
                            x1={`calc(${centerX} + ${Math.cos(angle1) * radius}px)`}
                            y1={`calc(${centerY} + ${Math.sin(angle1) * radius}px)`}
                            x2={`calc(${centerX} + ${Math.cos(angle2) * radius}px)`}
                            y2={`calc(${centerY} + ${Math.sin(angle2) * radius}px)`}
                            stroke="rgba(255,26,26,0.2)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.5 }}
                            transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}
