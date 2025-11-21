"use client";

import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

export default function VoiceoverNarration() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="glass-card rounded-2xl border border-primary/30 p-6">
            <div className="flex items-center gap-4 mb-4">
                <motion.button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={
                        isPlaying
                            ? {
                                boxShadow: [
                                    '0 0 0px rgba(255,26,26,0.4)',
                                    '0 0 20px rgba(255,26,26,0.8)',
                                    '0 0 0px rgba(255,26,26,0.4)',
                                ],
                            }
                            : {}
                    }
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    {isPlaying ? <Pause size={20} className="text-primary" /> : <Play size={20} className="text-primary" />}
                </motion.button>

                <div className="flex-1">
                    <h4 className="font-bold mb-1">Welcome Message</h4>
                    <p className="text-sm text-muted-foreground">
                        "Welcome to AVERO. I'm Shivansh, and I'm building the future of AGI."
                    </p>
                </div>

                <button
                    onClick={toggleMute}
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                    {isMuted ? <VolumeX size={20} className="text-muted-foreground" /> : <Volume2 size={20} className="text-primary" />}
                </button>
            </div>

            {/* Waveform visualization */}
            <div className="h-16 flex items-center gap-1">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 bg-primary/30 rounded-full"
                        animate={
                            isPlaying
                                ? {
                                    height: [
                                        `${20 + Math.sin(i * 0.5) * 15}%`,
                                        `${40 + Math.sin(i * 0.5 + Math.PI) * 20}%`,
                                        `${20 + Math.sin(i * 0.5) * 15}%`,
                                    ],
                                }
                                : { height: '20%' }
                        }
                        transition={{
                            duration: 0.8,
                            repeat: isPlaying ? Infinity : 0,
                            delay: i * 0.02,
                        }}
                    />
                ))}
            </div>

            {/* Hidden audio element - replace with actual audio file */}
            <audio
                ref={audioRef}
                src="/audio/founder-welcome.mp3"
                onEnded={() => setIsPlaying(false)}
            />

            <p className="text-xs text-muted-foreground mt-4 text-center">
                📝 Placeholder: Add founder-welcome.mp3 to /public/audio/
            </p>
        </div>
    );
}
