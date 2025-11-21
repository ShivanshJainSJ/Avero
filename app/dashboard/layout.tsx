import DashboardSidebar from '@/components/DashboardSidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-[calc(100vh-4rem)]">
            <DashboardSidebar />
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
