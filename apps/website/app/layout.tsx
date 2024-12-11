import type { Metadata } from "next";
import { Nunito as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

export const metadata: Metadata = {
    title: "Wrink",
    description: "Get sh*t done. A new wave of project management. Coming soon.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://wrink.app",
        title: "Wrink",
        images: [
            {
                url: "https://wrink.app/images/og-image.png",
                alt: "Wrink"
            }
        ]
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    defer
                    data-domain="wrink.app"
                    src="https://a.kyle.so/js/script.js"
                ></script>
            </head>
            <body
                className={cn(
                    "bg-background min-h-screen font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>{children}</TooltipProvider>
                    <Toaster richColors />
                </ThemeProvider>
            </body>
        </html>
    );
}
