"use client";

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function CyberGrid() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth - 0.5);
            mouseY.set(e.clientY / window.innerHeight - 0.5);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10 z-0">
            <motion.div
                className="absolute inset-0"
                style={{
                    x: springX,
                    y: springY,
                    backgroundImage: `
                        linear-gradient(rgba(255,26,26,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,26,26,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    style={{
                        left: `${(i * 12.5) + 6.25}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                    }}
                />
            ))}
        </div>
    );
}
