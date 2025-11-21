"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

const fullAbout = `I'm Shivansh Jain, the founder of AVERO and creator of VEXO. My journey into AI began with a fascination for how machines could learn and adapt. What started as curiosity evolved into a mission to build systems that don't just process data, but truly understand and act intelligently.

I founded AVERO with a vision: to create AI systems that are secure, private, and incredibly powerful. VEXO, our flagship multi-agent AGI operating system, represents years of research and development in offline-first architecture and autonomous agent orchestration.

My philosophy is simple: AI should empower, not replace. Every system I build is designed to augment human capability while respecting privacy and maintaining full user control. I specialize in AI Engineering, Multi-Agent Systems, LLMs, RAG, System Design, and Applied Machine Learning.

Beyond AVERO, I've built multiple AI products including an AI Posture Detection system, CropAssist for smart farming, SECC for elderly care, and a Sleep Pattern & Dream Mood Predictor. Each project reflects my commitment to using AI to solve real-world problems while maintaining the highest standards of privacy and security.`;

const aiSummary = `Shivansh Jain • Founder of AVERO • Creator of VEXO AGI OS • Specializes in Multi-Agent Systems, LLMs, and Offline-First AI • Built 5+ AI products across healthcare, agriculture, and productivity • Philosophy: AI should augment, not replace human capability • Committed to privacy-first, secure AI solutions.`;

export default function AIAboutSummary() {
    const [isAIMode, setIsAIMode] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleMode = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAIMode(!isAIMode);
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className="glass-card rounded-2xl border border-primary/30 p-8">
            {/* Toggle button */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">About Me</h3>
                <motion.button
                    onClick={toggleMode}
                    className={`px-4 py-2 rounded-lg border-2 font-semibold flex items-center gap-2 ${isAIMode
                            ? 'border-primary bg-primary/20 text-primary'
                            : 'border-white/10 bg-white/5'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Sparkles size={16} />
                    {isAIMode ? 'AI Summary' : 'Full Version'}
                    <motion.div
                        animate={{ rotate: isAIMode ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown size={16} />
                    </motion.div>
                </motion.button>
            </div>

            {/* Content */}
            <div className="relative min-h-[300px]">
                {isAnimating && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <motion.div
                                className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            />
                            <p className="text-sm text-primary font-semibold">
                                {isAIMode ? 'Expanding...' : 'Summarizing with AI...'}
                            </p>
                        </div>
                    </motion.div>
                )}

                <motion.div
                    key={isAIMode ? 'ai' : 'full'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    {isAIMode ? (
                        <motion.div
                            className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                >
                                    <Sparkles className="text-primary" size={24} />
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">AI-Generated Summary</h4>
                                    <p className="text-xs text-muted-foreground">
                                        Condensed by VEXO AI • 90% compression
                                    </p>
                                </div>
                            </div>
                            <p className="text-foreground leading-relaxed">{aiSummary}</p>
                        </motion.div>
                    ) : (
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            {fullAbout.split('\n\n').map((paragraph, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
