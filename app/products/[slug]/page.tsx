import ProductDetail from '@/components/ProductDetail';
import productsData from '@/data/products.json';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return productsData.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const product = productsData.find((p) => p.slug === params.slug);
    if (!product) {
        return {
            title: 'Product Not Found | AVERO',
        };
    }
    return {
        title: `${product.title} | AVERO`,
        description: product.description,
    };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = productsData.find((p) => p.slug === params.slug);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <p className="text-muted-foreground">The product you are looking for does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-16">
            <ProductDetail
                title={product.title}
                description={product.description}
                features={product.features}
                specs={product.specs}
                image={product.imageUrl}
            />
        </div>
    );
}
