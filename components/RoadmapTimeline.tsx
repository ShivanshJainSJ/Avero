"use client";

import { motion } from 'framer-motion';

interface RoadmapItem {
    quarter: string;
    year: string;
    title: string;
    description: string;
    status: 'completed' | 'in-progress' | 'upcoming';
}

export default function RoadmapTimeline({ items }: { items: RoadmapItem[] }) {
    return (
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:border-l-0">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>

            <div className="space-y-12">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                    >
                        {/* Content */}
                        <div className="flex-1 w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                            <div className={`glass-card p-6 rounded-xl border ${item.status === 'completed' ? 'border-primary/50 shadow-red-glow' :
                                    item.status === 'in-progress' ? 'border-white/20' : 'border-white/5 opacity-70'
                                }`}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-sm font-bold px-2 py-1 rounded ${item.status === 'completed' ? 'bg-primary/20 text-primary' :
                                            item.status === 'in-progress' ? 'bg-white/10 text-white' : 'bg-white/5 text-muted-foreground'
                                        }`}>
                                        {item.quarter} {item.year}
                                    </span>
                                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                                        {item.status.replace('-', ' ')}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                        </div>

                        {/* Dot */}
                        <div className="absolute left-[-5px] md:left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary z-10 -translate-y-1/2 md:-translate-x-1/2 shadow-[0_0_10px_#FF1A1A]">
                            {item.status === 'completed' && (
                                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                            )}
                        </div>

                        {/* Empty space for the other side */}
                        <div className="hidden md:block flex-1"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
