import Navbar from "@/components/navbar";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-y-hidden px-4 sm:px-24">
            <Navbar />
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-muted/20 mb-6 flex rounded-full border px-4 sm:mb-12">
                    <p className="text-foreground/30 text-lg">coming soon</p>
                </div>
                <h1 className="text-4xl font-extrabold sm:text-5xl">Get sh*t done.</h1>
                <p className="text-foreground/60 text-lg">A new wave of project management.</p>
            </div>
        </main>
    );
}
