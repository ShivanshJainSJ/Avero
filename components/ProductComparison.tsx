"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, X } from 'lucide-react';

const products = [
    { id: 'vexo', name: 'VEXO', color: '#FF1A1A' },
    { id: 'posture', name: 'AI Posture', color: '#C40000' },
    { id: 'crop', name: 'CropAssist', color: '#7A0000' },
    { id: 'secc', name: 'SECC', color: '#FF1A1A' },
    { id: 'sleep', name: 'Sleep Predictor', color: '#C40000' },
];

const features = [
    { name: 'Offline-First', vexo: true, posture: true, crop: false, secc: true, sleep: true },
    { name: 'AI/ML Powered', vexo: true, posture: true, crop: true, secc: true, sleep: true },
    { name: 'Real-time Processing', vexo: true, posture: true, crop: false, secc: true, sleep: false },
    { name: 'Multi-Agent System', vexo: true, posture: false, crop: false, secc: false, sleep: false },
    { name: 'Privacy-First', vexo: true, posture: true, crop: true, secc: true, sleep: true },
    { name: 'Cloud Integration', vexo: false, posture: false, crop: true, secc: true, sleep: true },
    { name: 'Mobile Support', vexo: true, posture: true, crop: true, secc: true, sleep: true },
    { name: 'Enterprise Ready', vexo: true, posture: true, crop: true, secc: true, sleep: false },
];

export default function ProductComparison() {
    const [selectedProducts, setSelectedProducts] = useState<string[]>(['vexo', 'secc']);
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

    const toggleProduct = (id: string) => {
        if (selectedProducts.includes(id)) {
            setSelectedProducts(selectedProducts.filter((p) => p !== id));
        } else if (selectedProducts.length < 3) {
            setSelectedProducts([...selectedProducts, id]);
        }
    };

    return (
        <div className="w-full">
            {/* Product selector */}
            <div className="flex flex-wrap gap-3 mb-8">
                {products.map((product) => {
                    const isSelected = selectedProducts.includes(product.id);
                    return (
                        <motion.button
                            key={product.id}
                            onClick={() => toggleProduct(product.id)}
                            className={`px-6 py-3 rounded-xl border-2 font-semibold transition-all ${isSelected
                                    ? 'border-primary bg-primary/20 text-primary'
                                    : 'border-white/10 bg-white/5 text-muted-foreground hover:border-primary/50'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={
                                isSelected
                                    ? {
                                        boxShadow: [
                                            `0 0 0px ${product.color}40`,
                                            `0 0 20px ${product.color}80`,
                                            `0 0 0px ${product.color}40`,
                                        ],
                                    }
                                    : {}
                            }
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {product.name}
                        </motion.button>
                    );
                })}
            </div>

            {/* Comparison table */}
            <div className="glass-card rounded-2xl border border-primary/30 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="p-4 text-left font-bold">Feature</th>
                                {selectedProducts.map((productId) => {
                                    const product = products.find((p) => p.id === productId);
                                    return (
                                        <th key={productId} className="p-4 text-center">
                                            <motion.div
                                                className="font-bold"
                                                style={{ color: product?.color }}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {product?.name}
                                            </motion.div>
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, i) => (
                                <motion.tr
                                    key={feature.name}
                                    className={`border-b border-white/5 ${hoveredFeature === feature.name ? 'bg-primary/5' : ''
                                        }`}
                                    onHoverStart={() => setHoveredFeature(feature.name)}
                                    onHoverEnd={() => setHoveredFeature(null)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <td className="p-4 font-medium">{feature.name}</td>
                                    {selectedProducts.map((productId) => {
                                        const hasFeature = feature[productId as keyof typeof feature];
                                        return (
                                            <td key={productId} className="p-4 text-center">
                                                <motion.div
                                                    className="flex justify-center"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: i * 0.05 + 0.2 }}
                                                >
                                                    {hasFeature ? (
                                                        <motion.div
                                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <Check className="text-primary" size={20} />
                                                        </motion.div>
                                                    ) : (
                                                        <X className="text-muted-foreground/30" size={20} />
                                                    )}
                                                </motion.div>
                                            </td>
                                        );
                                    })}
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4 text-center">
                Select up to 3 products to compare
            </p>
        </div>
    );
}
