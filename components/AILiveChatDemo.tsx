"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageSquare, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

const sampleConversation = [
    { role: 'user', text: 'What is VEXO?' },
    { role: 'ai', text: 'VEXO is an offline-first multi-agent AGI operating system that enables autonomous agent orchestration without cloud dependency. It features local reasoning packs, secure execution layers, and complete user control.' },
    { role: 'user', text: 'How does it ensure privacy?' },
    { role: 'ai', text: 'VEXO processes all data locally on your device with military-grade encryption. No data leaves your system unless you explicitly choose to share it. This offline-first architecture ensures complete privacy and security.' },
];

export default function AILiveChatDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(sampleConversation);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        setMessages([...messages, { role: 'user', text: inputValue }]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'ai',
                    text: 'This is a simulated response from VEXO AI. In production, this would connect to the actual AGI system for intelligent responses.',
                },
            ]);
            setIsTyping(false);
        }, 2000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <motion.div
                className="glass-card rounded-2xl border border-primary/30 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.div
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                            animate={{
                                boxShadow: [
                                    '0 0 0px rgba(255,26,26,0.4)',
                                    '0 0 20px rgba(255,26,26,0.8)',
                                    '0 0 0px rgba(255,26,26,0.4)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles size={20} className="text-white" />
                        </motion.div>
                        <div>
                            <h3 className="font-bold">VEXO AI Assistant</h3>
                            <div className="flex items-center gap-2">
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-primary"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="text-xs text-muted-foreground">Online</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setMessages(sampleConversation)}
                    >
                        Reset Demo
                    </Button>
                </div>

                {/* Messages */}
                <div className="h-96 overflow-y-auto p-6 space-y-4">
                    <AnimatePresence>
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div
                                    className={`max-w-[70%] p-4 rounded-2xl ${msg.role === 'user'
                                            ? 'bg-primary/20 border border-primary/30'
                                            : 'bg-white/5 border border-white/10'
                                        }`}
                                >
                                    {msg.role === 'ai' && (
                                        <div className="flex items-center gap-2 mb-2">
                                            <Sparkles size={14} className="text-primary" />
                                            <span className="text-xs font-semibold text-primary">VEXO AI</span>
                                        </div>
                                    )}
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Typing indicator */}
                    {isTyping && (
                        <motion.div
                            className="flex justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                                <div className="flex items-center gap-2">
                                    <Sparkles size={14} className="text-primary" />
                                    <span className="text-xs font-semibold text-primary">VEXO AI</span>
                                    <span className="text-xs text-muted-foreground">is thinking...</span>
                                </div>
                                <div className="flex gap-1 mt-2">
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
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Input */}
                <div className="p-6 border-t border-white/10">
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask VEXO AI anything..."
                            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-colors"
                            disabled={isTyping}
                        />
                        <Button
                            onClick={handleSend}
                            disabled={isTyping || !inputValue.trim()}
                            className="px-6"
                        >
                            <Send size={18} />
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                        This is a simulated demo. Actual VEXO AI responses would be powered by the AGI system.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
