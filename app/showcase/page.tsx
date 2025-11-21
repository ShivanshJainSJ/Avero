import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import FounderAITimeline from '@/components/FounderAITimeline';
import FounderAchievements from '@/components/FounderAchievements';
import AIAboutSummary from '@/components/AIAboutSummary';
import VoiceoverNarration from '@/components/VoiceoverNarration';
import FounderVideoBackground from '@/components/FounderVideoBackground';
import ParticleUniverse3D from '@/components/animations/ParticleUniverse3D';

export const metadata: Metadata = {
    title: 'About | AVERO',
    description: 'Learn about Shivansh Jain, founder of AVERO and creator of VEXO AGI Operating System.',
};

export default function AboutShowcase() {
    return (
        <div className="relative">
            <ParticleUniverse3D />

            {/* Hero with Video Background */}
            <FounderVideoBackground />

            {/* AI-Powered About Summary */}
            <SectionWrapper>
                <AIAboutSummary />
            </SectionWrapper>

            {/* Voiceover Narration */}
            <SectionWrapper className="bg-surface/50">
                <VoiceoverNarration />
            </SectionWrapper>

            {/* Founder Timeline */}
            <SectionWrapper>
                <FounderAITimeline />
            </SectionWrapper>

            {/* Achievements Wall */}
            <SectionWrapper className="bg-surface/50">
                <FounderAchievements />
            </SectionWrapper>
        </div>
    );
}
