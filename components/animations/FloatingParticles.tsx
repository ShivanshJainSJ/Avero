"use client";

import { motion } from 'framer-motion';

export default function FloatingParticles() {
    const particles = Array.from({ length: 30 });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: 0.15,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
