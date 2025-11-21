"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AgentNetwork() {
    const [activeNodes, setActiveNodes] = useState<number[]>([]);

    const nodes = [
        { x: 20, y: 30 },
        { x: 50, y: 20 },
        { x: 80, y: 35 },
        { x: 35, y: 60 },
        { x: 65, y: 70 },
        { x: 50, y: 50 },
    ];

    const connections = [
        [0, 1], [1, 2], [0, 3], [3, 4], [4, 2], [1, 5], [5, 4], [3, 5],
    ];

    useEffect(() => {
        nodes.forEach((_, i) => {
            setTimeout(() => {
                setActiveNodes(prev => [...prev, i]);
            }, i * 300);
        });
    }, []);

    return (
        <div className="relative w-full h-64">
            <svg className="absolute inset-0 w-full h-full">
                {connections.map(([start, end], i) => {
                    const startNode = nodes[start];
                    const endNode = nodes[end];
                    const isActive = activeNodes.includes(start) && activeNodes.includes(end);

                    return (
                        <motion.line
                            key={i}
                            x1={`${startNode.x}%`}
                            y1={`${startNode.y}%`}
                            x2={`${endNode.x}%`}
                            y2={`${endNode.y}%`}
                            stroke="rgba(255,26,26,0.4)"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={isActive ? { pathLength: 1, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: Math.max(start, end) * 0.3 }}
                        />
                    );
                })}
            </svg>
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-primary rounded-full"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={activeNodes.includes(i) ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.3 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-primary rounded-full"
                        animate={{
                            scale: [1, 2, 1],
                            opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3 + 0.5,
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
}
