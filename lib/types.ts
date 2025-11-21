export interface Product {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    features: string[];
    imageUrl: string;
    tags: string[];
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl?: string;
}

export interface RoadmapItem {
    quarter: string;
    year: string;
    title: string;
    description: string;
    status: 'completed' | 'in-progress' | 'planned';
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string; // Markdown
}
