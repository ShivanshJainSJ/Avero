import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="text-3xl font-bold text-white mt-4 mb-6">Page Not Found</h2>
            <p className="text-gray-400 max-w-md mb-8">
                The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link href="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
}
