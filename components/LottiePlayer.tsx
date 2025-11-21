"use client";

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with Lottie
const Player = dynamic(
    () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
    { ssr: false }
);

interface LottiePlayerProps {
    animationPath: string;
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
}

export default function LottiePlayer({
    animationPath,
    className = '',
    loop = true,
    autoplay = true,
}: LottiePlayerProps) {
    return (
        <motion.div
            className={`relative ${className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <Player
                autoplay={autoplay}
                loop={loop}
                src={animationPath}
                style={{ height: '100%', width: '100%' }}
            />
        </motion.div>
    );
}

// Product-specific Lottie components
export function VEXOLottie() {
    return (
        <LottiePlayer
            animationPath="/lottie/vexo-animation.json"
            className="w-full h-64"
        />
    );
}

export function PostureLottie() {
    return (
        <LottiePlayer
            animationPath="/lottie/posture-animation.json"
            className="w-full h-64"
        />
    );
}

export function CropAssistLottie() {
    return (
        <LottiePlayer
            animationPath="/lottie/crop-animation.json"
            className="w-full h-64"
        />
    );
}

export function SECCLottie() {
    return (
        <LottiePlayer
            animationPath="/lottie/secc-animation.json"
            className="w-full h-64"
        />
    );
}

export function SleepPredictorLottie() {
    return (
        <LottiePlayer
            animationPath="/lottie/sleep-animation.json"
            className="w-full h-64"
        />
    );
}
