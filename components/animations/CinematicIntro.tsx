"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface CinematicIntroProps {
    onComplete?: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStage(1), 500),
            setTimeout(() => setStage(2), 1500),
            setTimeout(() => setStage(3), 2500),
            setTimeout(() => {
                setStage(4);
                onComplete?.();
            }, 4000),
        ];

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    if (stage >= 4) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Red beam */}
                {stage >= 0 && (
                    <motion.div
                        className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-primary to-transparent"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: '100%', opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    />
                )}

                {/* Logo materialization */}
                {stage >= 1 && (
                    <motion.div
                        className="relative z-10"
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'backOut' }}
                    >
                        <motion.div
                            className="relative w-64 h-64"
                            animate={{
                                filter: [
                                    'drop-shadow(0 0 0px rgba(255,26,26,0.8))',
                                    'drop-shadow(0 0 40px rgba(255,26,26,0.8))',
                                    'drop-shadow(0 0 20px rgba(255,26,26,0.8))',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Image
                                src="/averologo.png"
                                alt="AVERO"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}

                {/* Plasma burst */}
                {stage >= 2 && (
                    <>
                        <motion.div
                            className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 3, opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5 }}
                        />
                        {/* Cyber sparks */}
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-primary rounded-full"
                                initial={{
                                    x: '50vw',
                                    y: '50vh',
                                    scale: 0,
                                }}
                                animate={{
                                    x: `${50 + Math.cos((i / 20) * Math.PI * 2) * 40}vw`,
                                    y: `${50 + Math.sin((i / 20) * Math.PI * 2) * 40}vh`,
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.05,
                                }}
                            />
                        ))}
                    </>
                )}

                {/* Metallic text reveal */}
                {stage >= 3 && (
                    <motion.div
                        className="absolute bottom-32 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-6xl font-bold text-center"
                            style={{
                                background: 'linear-gradient(135deg, #D4D4D4 0%, #FF1A1A 50%, #D4D4D4 100%)',
                                backgroundSize: '200% 100%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            AVERO
                        </motion.h1>
                        <p className="text-center text-primary mt-2">Building the Future of AGI</p>
                    </motion.div>
                )}

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />
            </motion.div>
        </AnimatePresence>
    );
}
