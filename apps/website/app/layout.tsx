import type { Metadata } from "next";
import { Nunito as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

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
        url: "https://wrinky.app",
        title: "Wrinky",
        images: [
            {
                url: "https://wrinky.app/images/og-image.png",
                alt: "Wrinky"
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
                </ThemeProvider>
            </body>
        </html>
    );
}
