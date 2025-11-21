export function Loader() {
    return (
        <div className="flex items-center justify-center w-full h-full min-h-[200px]">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin shadow-red-glow"></div>
                <div className="absolute inset-4 rounded-full bg-primary/10 animate-pulse"></div>
            </div>
        </div>
    );
}
