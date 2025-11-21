"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message, MessageType, MessageStatus } from '@/lib/supabase';
import { Mail, MessageSquare, Filter, Search, RefreshCw, Eye, Check, Reply } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function MessagesInbox() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [filterType, setFilterType] = useState<MessageType | 'all'>('all');
    const [filterStatus, setFilterStatus] = useState<MessageStatus | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [total, setTotal] = useState(0);

    const fetchMessages = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (filterType !== 'all') params.append('type', filterType);
            if (filterStatus !== 'all') params.append('status', filterStatus);
            if (searchQuery) params.append('search', searchQuery);

            const response = await fetch(`/api/messages?${params}`);
            const data = await response.json();

            if (response.ok) {
                setMessages(data.messages);
                setTotal(data.total);
            }
        } catch (error) {
            console.error('Failed to fetch messages:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateMessageStatus = async (id: string, status: MessageStatus) => {
        try {
            const response = await fetch(`/api/messages/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                fetchMessages();
                if (selectedMessage?.id === id) {
                    setSelectedMessage({ ...selectedMessage, status });
                }
            }
        } catch (error) {
            console.error('Failed to update message:', error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, [filterType, filterStatus, searchQuery]);

    const getStatusColor = (status: MessageStatus) => {
        switch (status) {
            case 'new': return 'bg-primary/20 text-primary border-primary/30';
            case 'read': return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
            case 'replied': return 'bg-green-500/20 text-green-500 border-green-500/30';
        }
    };

    const getTypeIcon = (type: MessageType) => {
        return type === 'contact' ? <Mail className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />;
    };

    const stats = {
        total: messages.length,
        new: messages.filter(m => m.status === 'new').length,
        read: messages.filter(m => m.status === 'read').length,
        replied: messages.filter(m => m.status === 'replied').length,
    };

    return (
        <div className="pt-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        Messages <span className="text-gradient">Inbox</span>
                    </h1>
                    <p className="text-muted-foreground">Manage contact form submissions and AI chat logs</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <motion.div
                        className="glass-card p-6 rounded-xl border border-white/10"
                        whileHover={{ borderColor: 'rgba(255,26,26,0.3)' }}
                    >
                        <div className="text-3xl font-bold text-primary">{stats.total}</div>
                        <div className="text-sm text-muted-foreground">Total Messages</div>
                    </motion.div>
                    <motion.div
                        className="glass-card p-6 rounded-xl border border-primary/30"
                        whileHover={{ borderColor: 'rgba(255,26,26,0.6)' }}
                    >
                        <div className="text-3xl font-bold text-primary">{stats.new}</div>
                        <div className="text-sm text-muted-foreground">New</div>
                    </motion.div>
                    <motion.div
                        className="glass-card p-6 rounded-xl border border-blue-500/30"
                        whileHover={{ borderColor: 'rgba(59,130,246,0.6)' }}
                    >
                        <div className="text-3xl font-bold text-blue-500">{stats.read}</div>
                        <div className="text-sm text-muted-foreground">Read</div>
                    </motion.div>
                    <motion.div
                        className="glass-card p-6 rounded-xl border border-green-500/30"
                        whileHover={{ borderColor: 'rgba(34,197,94,0.6)' }}
                    >
                        <div className="text-3xl font-bold text-green-500">{stats.replied}</div>
                        <div className="text-sm text-muted-foreground">Replied</div>
                    </motion.div>
                </div>

                {/* Filters */}
                <div className="glass-card p-6 rounded-xl border border-white/10 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search messages..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                                />
                            </div>
                        </div>
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value as MessageType | 'all')}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                        >
                            <option value="all">All Types</option>
                            <option value="contact">Contact Form</option>
                            <option value="ai_chat">AI Chat</option>
                        </select>
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value as MessageStatus | 'all')}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                        >
                            <option value="all">All Status</option>
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="replied">Replied</option>
                        </select>
                        <Button onClick={fetchMessages} variant="outline" size="sm">
                            <RefreshCw className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Messages List */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* List */}
                    <div className="space-y-4">
                        {loading ? (
                            <div className="text-center py-12 text-muted-foreground">Loading messages...</div>
                        ) : messages.length === 0 ? (
                            <div className="text-center py-12 text-muted-foreground">No messages found</div>
                        ) : (
                            messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className={`glass-card p-4 rounded-xl border cursor-pointer transition-all ${selectedMessage?.id === message.id
                                            ? 'border-primary shadow-red-glow'
                                            : 'border-white/10 hover:border-primary/50'
                                        }`}
                                    onClick={() => setSelectedMessage(message)}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            {getTypeIcon(message.type)}
                                            <span className="font-semibold">{message.name}</span>
                                        </div>
                                        <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(message.status)}`}>
                                            {message.status}
                                        </span>
                                    </div>
                                    <div className="text-sm text-muted-foreground mb-2">{message.email}</div>
                                    {message.subject && (
                                        <div className="text-sm font-medium mb-2">{message.subject}</div>
                                    )}
                                    <div className="text-sm text-muted-foreground line-clamp-2">{message.message}</div>
                                    <div className="text-xs text-muted-foreground mt-2">
                                        {new Date(message.created_at).toLocaleString()}
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>

                    {/* Message Viewer */}
                    <div className="sticky top-24">
                        <AnimatePresence mode="wait">
                            {selectedMessage ? (
                                <motion.div
                                    key={selectedMessage.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="glass-card p-6 rounded-xl border border-white/10"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold">Message Details</h3>
                                        <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(selectedMessage.status)}`}>
                                            {selectedMessage.status}
                                        </span>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">From</div>
                                            <div className="font-semibold">{selectedMessage.name}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Email</div>
                                            <a href={`mailto:${selectedMessage.email}`} className="text-primary hover:underline">
                                                {selectedMessage.email}
                                            </a>
                                        </div>
                                        {selectedMessage.phone && (
                                            <div>
                                                <div className="text-sm text-muted-foreground mb-1">Phone</div>
                                                <a href={`tel:${selectedMessage.phone}`} className="text-primary hover:underline">
                                                    {selectedMessage.phone}
                                                </a>
                                            </div>
                                        )}
                                        {selectedMessage.subject && (
                                            <div>
                                                <div className="text-sm text-muted-foreground mb-1">Subject</div>
                                                <div className="font-medium">{selectedMessage.subject}</div>
                                            </div>
                                        )}
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Message</div>
                                            <div className="bg-white/5 p-4 rounded-lg whitespace-pre-wrap">
                                                {selectedMessage.message}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Received</div>
                                            <div>{new Date(selectedMessage.created_at).toLocaleString()}</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        {selectedMessage.status === 'new' && (
                                            <Button
                                                onClick={() => updateMessageStatus(selectedMessage.id, 'read')}
                                                variant="outline"
                                                size="sm"
                                                className="flex-1"
                                            >
                                                <Eye className="w-4 h-4 mr-2" />
                                                Mark as Read
                                            </Button>
                                        )}
                                        {selectedMessage.status !== 'replied' && (
                                            <Button
                                                onClick={() => updateMessageStatus(selectedMessage.id, 'replied')}
                                                size="sm"
                                                className="flex-1"
                                            >
                                                <Reply className="w-4 h-4 mr-2" />
                                                Mark as Replied
                                            </Button>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="glass-card p-12 rounded-xl border border-white/10 text-center text-muted-foreground"
                                >
                                    <Mail className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <p>Select a message to view details</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
