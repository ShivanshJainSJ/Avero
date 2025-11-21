/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                surface: 'var(--surface)',
                primary: {
                    DEFAULT: '#FF1A1A', // Vibrant red glow
                    dark: '#C40000',    // Deep red
                    crimson: '#7A0000', // Dark crimson
                    foreground: '#FFFFFF',
                },
                secondary: {
                    DEFAULT: '#16161A',
                    foreground: '#FFFFFF',
                },
                accent: {
                    DEFAULT: '#D4D4D4', // Metallic gray
                    foreground: '#000000',
                },
                destructive: {
                    DEFAULT: '#7f1d1d',
                    foreground: '#ffffff',
                },
                border: 'var(--border)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'red-glow': 'linear-gradient(to right, #FF1A1A, #C40000, #7A0000)',
                'dark-radial': 'radial-gradient(circle at center, rgba(255, 26, 26, 0.2), transparent 70%)',
                'metallic-edge': 'linear-gradient(to right, transparent, #D4D4D4, transparent)',
            },
            boxShadow: {
                'red-glow': '0 0 20px rgba(255, 26, 26, 0.5)',
                'neon': '0 0 10px rgba(255, 26, 26, 0.5), 0 0 20px rgba(255, 26, 26, 0.3)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(255, 26, 26, 0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(255, 26, 26, 0.6)' },
                },
            },
        },
    },
    plugins: [],
};
