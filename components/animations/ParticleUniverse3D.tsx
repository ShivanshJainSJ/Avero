"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    z: number;
    size: number;
    speedX: number;
    speedY: number;
    speedZ: number;
}

export default function ParticleUniverse3D() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const particleCount = 100;
        const newParticles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                z: (Math.random() - 0.5) * 200,
                size: 1 + Math.random() * 3,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                speedZ: (Math.random() - 0.5) * 0.5,
            });
        }

        setParticles(newParticles);

        const rotationInterval = setInterval(() => {
            setRotation((prev) => (prev + 0.5) % 360);
        }, 50);

        return () => clearInterval(rotationInterval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    perspective: '1000px',
                }}
            >
                <div
                    style={{
                        transform: `rotateY(${rotation}deg)`,
                        transformStyle: 'preserve-3d',
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                    }}
                >
                    {particles.map((particle) => {
                        const scale = 1 + particle.z / 200;
                        const opacity = Math.max(0.1, Math.min(0.8, (particle.z + 100) / 200));

                        return (
                            <motion.div
                                key={particle.id}
                                className="absolute rounded-full bg-primary"
                                style={{
                                    width: particle.size * scale,
                                    height: particle.size * scale,
                                    left: `calc(50% + ${particle.x}px)`,
                                    top: `calc(50% + ${particle.y}px)`,
                                    opacity,
                                    boxShadow: `0 0 ${particle.size * 4}px rgba(255,26,26,${opacity})`,
                                    transform: `translateZ(${particle.z}px)`,
                                }}
                                animate={{
                                    x: [0, particle.speedX * 100, 0],
                                    y: [0, particle.speedY * 100, 0],
                                }}
                                transition={{
                                    duration: 10 + Math.random() * 5,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Central glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}
