"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    z: number;
    size: number;
}

export default function OrbitingParticles3D() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const particleCount = 50;
        const newParticles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 2;
            const radius = 150 + Math.random() * 50;
            const elevation = (Math.random() - 0.5) * 100;

            newParticles.push({
                id: i,
                x: Math.cos(angle) * radius,
                y: elevation,
                z: Math.sin(angle) * radius,
                size: 2 + Math.random() * 4,
            });
        }

        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-primary"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        boxShadow: `0 0 ${particle.size * 2}px rgba(255,26,26,0.6)`,
                    }}
                    animate={{
                        x: [
                            particle.x,
                            particle.x * Math.cos(Math.PI / 2) - particle.z * Math.sin(Math.PI / 2),
                            -particle.x,
                            particle.x * Math.cos(-Math.PI / 2) - particle.z * Math.sin(-Math.PI / 2),
                            particle.x,
                        ],
                        y: [
                            particle.y,
                            particle.y + 20,
                            particle.y,
                            particle.y - 20,
                            particle.y,
                        ],
                        scale: [1, 1.2, 1, 0.8, 1],
                        opacity: [0.3, 0.8, 0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 5,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: particle.id * 0.1,
                    }}
                />
            ))}

            {/* Central glow */}
            <motion.div
                className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}
