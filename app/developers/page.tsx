"use client";

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import DeveloperToolsAnimation from '@/components/animations/DeveloperToolsAnimation';
import { Code2, Database, Zap, GitBranch, Boxes, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const tools = [
    {
        icon: Boxes,
        title: 'Multi-Agent Framework',
        description: 'Build autonomous agents that collaborate seamlessly',
        features: ['Agent Orchestration', 'Task Distribution', 'State Management'],
    },
    {
        icon: Database,
        title: 'RAG System',
        description: 'Retrieval-Augmented Generation for intelligent responses',
        features: ['Vector Search', 'Context Injection', 'Knowledge Graphs'],
    },
    {
        icon: Workflow,
        title: 'LLM Workflow',
        description: 'Design complex AI workflows with visual tools',
        features: ['Prompt Engineering', 'Chain Management', 'Model Selection'],
    },
    {
        icon: Zap,
        title: 'Deployment Pipeline',
        description: 'Deploy AI systems with one command',
        features: ['Auto-scaling', 'Load Balancing', 'Monitoring'],
    },
];

const codeExample = `// Initialize VEXO Agent
import { VEXOAgent } from '@avero/vexo';

const agent = new VEXOAgent({
  name: 'DataProcessor',
  capabilities: ['analysis', 'visualization'],
  offline: true
});

// Define agent behavior
agent.onTask(async (task) => {
  const result = await agent.process(task);
  return result;
});

// Start agent
await agent.start();`;

export default function DeveloperToolsPage() {
    return (
        <div className="pt-16 min-h-screen">
            {/* Hero */}
            <SectionWrapper className="text-center">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Build With <span className="text-gradient">AVERO</span>
                </motion.h1>
                <motion.p
                    className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Powerful developer tools for building next-generation AI systems
                </motion.p>

                <DeveloperToolsAnimation />
            </SectionWrapper>

            {/* Tools Grid */}
            <SectionWrapper className="bg-surface/50">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Developer <span className="text-gradient">Tools</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tools.map((tool, i) => {
                        const Icon = tool.icon;
                        return (
                            <motion.div
                                key={i}
                                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.div
                                    className="w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Icon size={32} className="text-primary" />
                                </motion.div>

                                <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>
                                <p className="text-muted-foreground mb-6">{tool.description}</p>

                                <ul className="space-y-2">
                                    {tool.features.map((feature, j) => (
                                        <motion.li
                                            key={j}
                                            className="flex items-center gap-2 text-sm"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 + j * 0.05 }}
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </SectionWrapper>

            {/* Code Example */}
            <SectionWrapper>
                <h2 className="text-4xl font-bold text-center mb-12">
                    Quick <span className="text-gradient">Start</span>
                </h2>

                <motion.div
                    className="glass-card rounded-2xl border border-primary/30 overflow-hidden max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="p-4 border-b border-white/10 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-4 text-sm text-muted-foreground">agent.ts</span>
                    </div>
                    <pre className="p-6 overflow-x-auto">
                        <code className="text-sm text-foreground font-mono">{codeExample}</code>
                    </pre>
                </motion.div>

                <div className="flex justify-center gap-4 mt-12">
                    <Link href="/products/vexo">
                        <Button size="lg" className="shadow-red-glow">
                            <Code2 size={20} className="mr-2" />
                            View Documentation
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="outline">
                            Get API Access
                        </Button>
                    </Link>
                </div>
            </SectionWrapper>
        </div>
    );
}
