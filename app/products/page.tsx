"use client";

import SectionWrapper from '@/components/ui/SectionWrapper';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';

export default function ProductsPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-red-glow">Our <span className="text-gradient">Products</span></h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover our suite of intelligent systems designed for the next era of computing.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsData.map((product, index) => (
                        <ProductCard key={product.slug} product={product} index={index} />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
