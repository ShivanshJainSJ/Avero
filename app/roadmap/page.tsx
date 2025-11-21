"use client";

import SectionWrapper from '@/components/ui/SectionWrapper';
import RoadmapTimeline from '@/components/RoadmapTimeline';

const roadmapItems = [
    {
        quarter: "Q1",
        year: "2024",
        title: "Project Genesis",
        description: "Initial release of VEXO OS kernel and core agent protocols. Foundation for offline-first architecture.",
        status: "completed" as const
    },
    {
        quarter: "Q2",
        year: "2024",
        title: "Enterprise Beta",
        description: "Closed beta launch for select enterprise partners. Introduction of SECC energy management modules.",
        status: "completed" as const
    },
    {
        quarter: "Q3",
        year: "2024",
        title: "Public API Launch",
        description: "Opening our developer platform and SDKs. Enabling third-party integrations and custom agent creation.",
        status: "in-progress" as const
    },
    {
        quarter: "Q4",
        year: "2024",
        title: "Global Grid Activation",
        description: "Deployment of the decentralized security grid. Interconnecting regional agent swarms for global threat detection.",
        status: "upcoming" as const
    },
    {
        quarter: "Q1",
        year: "2025",
        title: "Neural Link Integration",
        description: "Experimental support for direct neural interfaces. The next step in human-AI collaboration.",
        status: "upcoming" as const
    }
];

export default function RoadmapPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-red-glow">The <span className="text-gradient">Path</span> Forward</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Our strategic vision for the evolution of intelligent systems.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <RoadmapTimeline items={roadmapItems} />
                </div>
            </SectionWrapper>
        </div>
    );
}
