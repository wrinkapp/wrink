import Navbar from "@/components/navbar";
import WaitlistForm from "@/components/waitlist-form";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-y-hidden px-4 sm:px-24">
            <Navbar />
            <div className="flex flex-col items-center justify-center gap-2 space-y-12">
                <div className="bg-muted/20 flex rounded-full border px-4">
                    <p className="text-foreground/30 sm:text-md text-sm">coming soon</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">Get sh*t done.</h1>
                    <p className="text-foreground/60 text-lg">A new wave of project management.</p>
                </div>

                <div className="flex w-full items-center justify-center gap-4">
                    <WaitlistForm />
                </div>
            </div>
        </main>
    );
}
