"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Cpu, Database, Zap, Shield, Brain, Network } from 'lucide-react';

const agents = [
    { id: 1, name: 'Orchestrator', icon: Brain, x: 50, y: 20, color: '#FF1A1A' },
    { id: 2, name: 'Data Agent', icon: Database, x: 20, y: 50, color: '#C40000' },
    { id: 3, name: 'Compute Agent', icon: Cpu, x: 80, y: 50, color: '#FF1A1A' },
    { id: 4, name: 'Security Agent', icon: Shield, x: 35, y: 80, color: '#C40000' },
    { id: 5, name: 'Network Agent', icon: Network, x: 65, y: 80, color: '#FF1A1A' },
    { id: 6, name: 'Executor', icon: Zap, x: 50, y: 95, color: '#C40000' },
];

const connections = [
    [1, 2], [1, 3], [1, 4], [1, 5],
    [2, 6], [3, 6], [4, 6], [5, 6],
    [2, 3], [4, 5],
];

export default function VEXOAgentSimulation() {
    const [activeConnections, setActiveConnections] = useState<number[]>([]);
    const [taskFlow, setTaskFlow] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTaskFlow((prev) => (prev + 1) % connections.length);
            setActiveConnections([taskFlow]);
        }, 1000);

        return () => clearInterval(interval);
    }, [taskFlow]);

    return (
        <div className="relative w-full h-[600px] glass-card rounded-2xl border border-primary/30 p-8">
            {/* Title */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">VEXO Agent Orchestration</h3>
                <p className="text-muted-foreground">Real-time multi-agent collaboration</p>
            </div>

            {/* SVG for connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {connections.map(([from, to], i) => {
                    const fromAgent = agents.find((a) => a.id === from);
                    const toAgent = agents.find((a) => a.id === to);
                    if (!fromAgent || !toAgent) return null;

                    const isActive = activeConnections.includes(i);

                    return (
                        <motion.line
                            key={i}
                            x1={`${fromAgent.x}%`}
                            y1={`${fromAgent.y}%`}
                            x2={`${toAgent.x}%`}
                            y2={`${toAgent.y}%`}
                            stroke={isActive ? fromAgent.color : 'rgba(255,26,26,0.2)'}
                            strokeWidth={isActive ? 3 : 1}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: 1,
                                opacity: isActive ? 1 : 0.3,
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    );
                })}
            </svg>

            {/* Agents */}
            {agents.map((agent, i) => {
                const Icon = agent.icon;
                const isActive = activeConnections.some((connIdx) => {
                    const [from, to] = connections[connIdx];
                    return from === agent.id || to === agent.id;
                });

                return (
                    <motion.div
                        key={agent.id}
                        className="absolute"
                        style={{
                            left: `${agent.x}%`,
                            top: `${agent.y}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <motion.div
                            className="relative flex flex-col items-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            {/* Agent node */}
                            <motion.div
                                className="w-16 h-16 rounded-full bg-surface border-2 flex items-center justify-center"
                                style={{
                                    borderColor: agent.color,
                                }}
                                animate={
                                    isActive
                                        ? {
                                            boxShadow: [
                                                `0 0 0px ${agent.color}40`,
                                                `0 0 30px ${agent.color}80`,
                                                `0 0 0px ${agent.color}40`,
                                            ],
                                            scale: [1, 1.1, 1],
                                        }
                                        : {}
                                }
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Icon size={28} style={{ color: agent.color }} />
                            </motion.div>

                            {/* Agent name */}
                            <span className="mt-2 text-xs font-semibold text-center whitespace-nowrap">
                                {agent.name}
                            </span>

                            {/* Pulse indicator */}
                            {isActive && (
                                <motion.div
                                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                                    style={{ backgroundColor: agent.color }}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [1, 0.5, 1],
                                    }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                />
                            )}
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Task flow indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 glass-card rounded-lg border border-primary/30">
                <motion.div
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-sm">Task Processing...</span>
            </div>
        </div>
    );
}
