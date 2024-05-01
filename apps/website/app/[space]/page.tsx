import Sidebar from "@/components/sidebar";

export default function Page({ params }: { params: { space: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-y-hidden px-4 sm:px-24">
            <Sidebar />
            <div className="bg-background flex w-full items-center justify-center">
                <h1 className="text-4xl font-extrabold sm:text-5xl">{params.space}</h1>
            </div>
        </main>
    );
}
