"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function VEXO3DMockup() {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
        stiffness: 100,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
        stiffness: 100,
        damping: 30,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={ref}
            className="relative w-full h-[600px] flex items-center justify-center perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative w-full max-w-2xl"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Main device mockup */}
                <motion.div
                    className="relative glass-card rounded-3xl p-8 border-2 border-primary/30 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    style={{
                        boxShadow: '0 25px 50px rgba(255,26,26,0.3)',
                    }}
                >
                    {/* Screen glow */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* VEXO UI Mockup */}
                    <div className="relative z-10 space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-3 h-3 rounded-full bg-primary"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="font-bold text-lg">VEXO AGI OS</span>
                            </div>
                            <div className="flex gap-2">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30"
                                        whileHover={{ scale: 1.1, borderColor: 'rgba(255,26,26,0.6)' }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Agent cards */}
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <motion.div
                                    key={i}
                                    className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-4 flex flex-col items-center justify-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: 'rgba(255,26,26,0.6)',
                                    }}
                                >
                                    <motion.div
                                        className="w-12 h-12 rounded-full bg-primary/30 mb-2"
                                        animate={{
                                            boxShadow: [
                                                '0 0 0px rgba(255,26,26,0.4)',
                                                '0 0 20px rgba(255,26,26,0.8)',
                                                '0 0 0px rgba(255,26,26,0.4)',
                                            ],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                    />
                                    <span className="text-xs text-muted-foreground">Agent {i}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Status bar */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-primary"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="text-sm text-muted-foreground">6 Agents Active</span>
                            </div>
                            <span className="text-sm text-primary">Offline Mode</span>
                        </div>
                    </div>

                    {/* Reflection effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        style={{
                            transform: 'translateZ(10px)',
                        }}
                    />
                </motion.div>

                {/* Shadow */}
                <motion.div
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/20 blur-3xl rounded-full"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.div>
        </div>
    );
}
