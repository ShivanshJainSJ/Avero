"use client";

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Server, Shield, Globe, Cpu } from 'lucide-react';

const solutions = [
    {
        title: "Enterprise AI Infrastructure",
        description: "Deploy scalable, secure AI clusters on-premise or in the cloud. Our infrastructure solutions are designed for high-throughput neural processing.",
        icon: Server,
        features: ["Custom Hardware Support", "Automated Scaling", "Load Balancing"]
    },
    {
        title: "Offline-First Intelligence",
        description: "Bring the power of AGI to edge devices without relying on constant internet connectivity. Perfect for remote or secure environments.",
        icon: Cpu,
        features: ["Local Inference", "Data Synchronization", "Edge Training"]
    },
    {
        title: "Global Security Grid",
        description: "Protect your assets with our decentralized security grid, powered by autonomous agent swarms that detect and neutralize threats in real-time.",
        icon: Shield,
        features: ["Threat Detection", "Automated Response", "Zero-Trust Architecture"]
    },
    {
        title: "Smart City Integration",
        description: "Optimize urban living with our interconnected city management systems, from traffic control to energy distribution.",
        icon: Globe,
        features: ["Traffic Optimization", "Energy Grid Management", "Public Safety"]
    }
];

export default function SolutionsPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-red-glow">Transforming <span className="text-gradient">Industries</span></h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tailored solutions for the world&apos;s most demanding sectors.
                    </p>
                </div>

                <div className="space-y-24">
                    {solutions.map((solution, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex-1"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                                    <solution.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {solution.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {solution.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-foreground/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shadow-[0_0_5px_#FF1A1A]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="group">
                                    Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex-1 w-full"
                            >
                                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass-card border-primary/20 shadow-red-glow group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {/* Abstract visualization placeholder */}
                                        <div className="w-full h-full opacity-30 bg-[url('/images/grid.svg')] bg-center"></div>
                                        <solution.icon className="w-32 h-32 text-primary/20 absolute" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
