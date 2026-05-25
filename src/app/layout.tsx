import type { Metadata } from "next";
import { Noto_Serif, Noto_Serif_Display, Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const notoSerif = Noto_Serif({
    subsets: ["vietnamese"],
    weight: ["400", "600", "700"],
    variable: "--font-noto-serif"
})

const notoDisplay = Noto_Serif_Display({
    subsets: ["vietnamese"],
    weight: ["500", "700", "800"],
    variable: "--font-display"
})

export const metadata: Metadata = {
    title: "Shiki's Blog",
    description: "Shiki personal blog",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="vi" suppressHydrationWarning
            className={cn("h-full", "antialiased", notoSerif.variable, notoDisplay.variable, "font-sans", geist.variable)}
        >
            <body className="min-h-screen flex flex-col">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    <main className="flex-1 flex flex-col">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
