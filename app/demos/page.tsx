import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ProductComparison from '@/components/ProductComparison';
import VEXOAgentSimulation from '@/components/VEXOAgentSimulation';
import VEXO3DMockup from '@/components/VEXO3DMockup';
import SECCInteractiveDemo from '@/components/SECCInteractiveDemo';
import DreamMoodVisualizer from '@/components/DreamMoodVisualizer';
import AILiveChatDemo from '@/components/AILiveChatDemo';
import { VEXOLottie, PostureLottie, CropAssistLottie, SECCLottie, SleepPredictorLottie } from '@/components/LottiePlayer';

export const metadata: Metadata = {
    title: 'Product Demos | AVERO',
    description: 'Interactive demos of AVERO products including VEXO, SECC, CropAssist, and more.',
};

export default function ProductDemos() {
    return (
        <div className="pt-16">
            {/* VEXO 3D Mockup */}
            <SectionWrapper>
                <h1 className="text-5xl font-bold text-center mb-12">
                    Product <span className="text-gradient">Demos</span>
                </h1>
                <VEXO3DMockup />
            </SectionWrapper>

            {/* Product Comparison */}
            <SectionWrapper className="bg-surface/50">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Compare <span className="text-gradient">Products</span>
                </h2>
                <ProductComparison />
            </SectionWrapper>

            {/* VEXO Agent Simulation */}
            <SectionWrapper>
                <VEXOAgentSimulation />
            </SectionWrapper>

            {/* SECC Interactive Demo */}
            <SectionWrapper className="bg-surface/50">
                <SECCInteractiveDemo />
            </SectionWrapper>

            {/* Dream Mood Visualizer */}
            <SectionWrapper>
                <DreamMoodVisualizer />
            </SectionWrapper>

            {/* AI Live Chat */}
            <SectionWrapper className="bg-surface/50">
                <h2 className="text-4xl font-bold text-center mb-12">
                    AI <span className="text-gradient">Assistant</span>
                </h2>
                <AILiveChatDemo />
            </SectionWrapper>

            {/* Lottie Animations */}
            <SectionWrapper>
                <h2 className="text-4xl font-bold text-center mb-12">
                    Product <span className="text-gradient">Animations</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-center">VEXO</h3>
                        <VEXOLottie />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-center">AI Posture</h3>
                        <PostureLottie />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-center">CropAssist</h3>
                        <CropAssistLottie />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-center">SECC</h3>
                        <SECCLottie />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-center">Sleep Predictor</h3>
                        <SleepPredictorLottie />
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
