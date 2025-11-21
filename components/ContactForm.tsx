"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, User, Phone, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                    Name *
                </label>
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                        placeholder="Your full name"
                    />
                </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email *
                </label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                        placeholder="your.email@example.com"
                    />
                </div>
            </motion.div>

            {/* Phone Field */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-foreground">
                    Phone (Optional)
                </label>
                <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                        placeholder="+1 (555) 123-4567"
                    />
                </div>
            </motion.div>

            {/* Subject Field */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground">
                    Subject
                </label>
                <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                        placeholder="How can we help?"
                    />
                </div>
            </motion.div>

            {/* Message Field */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Tell us more about your inquiry..."
                />
            </motion.div>

            {/* Status Messages */}
            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500"
                >
                    <CheckCircle2 className="w-5 h-5" />
                    <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                </motion.div>
            )}

            {status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500"
                >
                    <AlertCircle className="w-5 h-5" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                </motion.div>
            )}

            {/* Submit Button */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full shadow-red-glow hover:shadow-neon"
                    size="lg"
                >
                    {status === 'loading' ? (
                        <>
                            <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                        </>
                    )}
                </Button>
            </motion.div>
        </form>
    );
}
