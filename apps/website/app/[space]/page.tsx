export default function Page({ params }: { params: { space: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-y-hidden px-4 sm:px-24">
            <h1 className="text-xl">{params.space} space fr</h1>
        </main>
    );
}
