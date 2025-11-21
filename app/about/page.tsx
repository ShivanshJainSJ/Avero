"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedFounderIntro from '@/components/AnimatedFounderIntro';
import PlasmaBackground from '@/components/animations/PlasmaBackground';
import { CheckCircle2, Code2, Lightbulb, Rocket, Target, Mail, Linkedin, Github } from 'lucide-react';

export default function AboutPage() {
    const skills = [
        { name: 'AI Engineering', level: 95 },
        { name: 'Multi-Agent Systems', level: 90 },
        { name: 'LLMs & RAG', level: 92 },
        { name: 'System Design', level: 88 },
        { name: 'Next.js & React', level: 90 },
        { name: 'Python & ML', level: 93 },
    ];

    const timeline = [
        { year: '2020', event: 'Started AI/ML Journey', icon: Code2 },
        { year: '2022', event: 'Built First AI Products', icon: Lightbulb },
        { year: '2023', event: 'Founded AVERO', icon: Rocket },
        { year: '2024', event: 'Launched VEXO AGI OS', icon: Target },
    ];

    return (
        <div className="pt-16 min-h-screen">
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-surface/50 to-background">
                <PlasmaBackground />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary shadow-red-glow">
                            <Image
                                src="/founderimage.jpg"
                                alt="Shivansh Jain"
                                fill
                                className="object-cover"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                            Hi, I'm Shivansh Jain.
                        </h1>
                        <p className="text-2xl text-primary font-semibold mb-4">
                            Founder, AI Engineer & the creator of AVERO.
                        </p>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Building the future of intelligent systems, one agent at a time.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper className="bg-gradient-to-br from-background via-primary/5 to-background">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                        My <span className="text-gradient">Story</span>
                    </h2>

                    <div className="space-y-6 text-lg text-muted-foreground">
                        <p>
                            My journey into AI began with a fascination for how machines could learn and adapt.
                            What started as curiosity evolved into a mission to build systems that don't just process
                            data, but truly understand and act intelligently.
                        </p>
                        <p>
                            I founded AVERO with a vision: to create AI systems that are secure, private, and
                            incredibly powerful. VEXO, our flagship multi-agent AGI operating system, represents
                            years of research and development in offline-first architecture and autonomous agent orchestration.
                        </p>
                        <p>
                            My philosophy is simple: AI should empower, not replace. Every system I build is designed
                            to augment human capability while respecting privacy and maintaining full user control.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {timeline.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    className="glass-card p-6 rounded-xl border border-primary/30 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.05, borderColor: 'rgba(255,26,26,0.6)' }}
                                >
                                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                    <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                                    <div className="text-sm text-muted-foreground">{item.event}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </SectionWrapper>

            <SectionWrapper>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Skills & <span className="text-gradient">Capabilities</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            className="glass-card p-6 rounded-xl border border-white/10"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex justify-between mb-3">
                                <span className="font-semibold text-foreground">{skill.name}</span>
                                <span className="text-primary font-bold">{skill.level}%</span>
                            </div>
                            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary to-secondary"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-gradient-to-br from-primary/5 to-background">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                        The <span className="text-gradient">Vision</span>
                    </h2>

                    <div className="space-y-8">
                        <div className="glass-card p-8 rounded-2xl border border-primary/30">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <CheckCircle2 className="w-6 h-6 text-primary mr-3" />
                                Why AVERO Exists
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                AVERO exists to democratize access to powerful AI while maintaining privacy and security.
                                We believe the future of AI is offline-first, user-controlled, and built on principles of
                                transparency and trust.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border border-primary/30">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <CheckCircle2 className="w-6 h-6 text-primary mr-3" />
                                What VEXO Represents
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                VEXO is more than an operating system—it's a paradigm shift. It represents a future where
                                AGI runs locally, agents collaborate autonomously, and users maintain complete control over
                                their intelligent systems.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border border-primary/30">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <CheckCircle2 className="w-6 h-6 text-primary mr-3" />
                                The Long-Term AGI Roadmap
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                Our roadmap is ambitious: evolve VEXO into a fully autonomous AGI platform, expand our
                                product suite to cover healthcare, agriculture, and energy, and establish AVERO as the
                                global leader in secure, offline-first AI infrastructure.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </SectionWrapper>

            <SectionWrapper>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Let's <span className="text-gradient">Build Together</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Interested in collaborating or learning more about AVERO's vision?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="shadow-red-glow hover:shadow-neon">
                                Work With Me
                            </Button>
                        </Link>
                        <Link href="/products/vexo">
                            <Button variant="outline" size="lg">
                                Explore VEXO
                            </Button>
                        </Link>
                    </div>
                    <motion.div
                        className="flex gap-4 justify-center mt-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.a
                            href="mailto:sjshivanshjain@gmail.com"
                            className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            <Mail size={20} className="text-primary" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/shivansh-jain-sj/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            <Linkedin size={20} className="text-primary" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/ShivanshJainSJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            <Github size={20} className="text-primary" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </SectionWrapper>
        </div>
    );
}
