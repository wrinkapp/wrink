import Navbar from "@/components/navbar";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-y-hidden px-6 sm:px-24">
            <Navbar />
            <h1 className="text-4xl font-bold">Get sh*t done.</h1>
            <p className="text-foreground/40 mt-4 text-lg">coming soon...</p>
        </main>
    );
}
