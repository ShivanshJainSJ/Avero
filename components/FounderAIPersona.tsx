"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Volume2, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

const sampleResponses = [
    "I'm passionate about building AGI systems that are secure, private, and truly intelligent.",
    "VEXO represents the future of offline-first AI - no cloud dependency, complete user control.",
    "My vision is to democratize access to powerful AI while maintaining privacy and security.",
    "I believe AI should augment human capability, not replace it.",
];

export default function FounderAIPersona() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai'; text: string }>>([]);
    const [isTyping, setIsTyping] = useState(false);

    const handleAsk = async () => {
        const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
        const question = 'Tell me about your vision';

        setMessages([...messages, { type: 'user', text: question }]);
        setIsTyping(true);

        setTimeout(async () => {
            setMessages((prev) => [...prev, { type: 'ai', text: randomResponse }]);
            setIsTyping(false);

            // Log to Supabase
            try {
                await fetch('/api/ai-chat/log', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: 'AI Chat User',
                        email: 'visitor@avero.ai',
                        question,
                        answer: randomResponse,
                    }),
                });
            } catch (error) {
                console.error('Failed to log chat:', error);
            }
        }, 1500);
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute bottom-20 right-0 w-96 glass-card border border-primary/30 rounded-2xl p-6 shadow-red-glow"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
                            <div className="relative">
                                <motion.div
                                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary"
                                    animate={{
                                        boxShadow: [
                                            '0 0 0px rgba(255,26,26,0.4)',
                                            '0 0 20px rgba(255,26,26,0.8)',
                                            '0 0 0px rgba(255,26,26,0.4)',
                                        ],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Image
                                        src="/founderimage.jpg"
                                        alt="Shivansh AI"
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </div>
                            <div>
                                <h3 className="font-bold flex items-center gap-2">
                                    Shivansh AI <Sparkles size={16} className="text-primary" />
                                </h3>
                                <p className="text-xs text-muted-foreground">AI Persona • Always Available</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                            {messages.length === 0 && (
                                <p className="text-sm text-muted-foreground text-center py-8">
                                    Ask me anything about AVERO, VEXO, or my vision for AGI!
                                </p>
                            )}
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    className={`p-3 rounded-lg ${msg.type === 'user'
                                        ? 'bg-primary/20 ml-8'
                                        : 'bg-white/5 mr-8'
                                        }`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <p className="text-sm">{msg.text}</p>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div
                                    className="flex gap-1 p-3 bg-white/5 rounded-lg mr-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 h-2 bg-primary rounded-full"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{
                                                duration: 0.6,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <Button
                                size="sm"
                                onClick={handleAsk}
                                disabled={isTyping}
                                className="flex-1"
                            >
                                <MessageCircle size={16} className="mr-2" />
                                Ask Shivansh AI
                            </Button>
                            <Button size="sm" variant="outline">
                                <Volume2 size={16} />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-red-glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    boxShadow: [
                        '0 0 20px rgba(255,26,26,0.4)',
                        '0 0 40px rgba(255,26,26,0.8)',
                        '0 0 20px rgba(255,26,26,0.4)',
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Sparkles size={24} className="text-white" />
            </motion.button>
        </div>
    );
}
