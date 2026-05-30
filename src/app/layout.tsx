import type { Metadata } from 'next';
import { Fira_Mono, Montserrat } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const firaMono = Fira_Mono({
    subsets: ['latin-ext'],
    weight: ['400', '500', '700'],
    variable: '--font-fira-mono',
});

const montserrat = Montserrat({
    subsets: ['vietnamese'],
    weight: ['400', '600', '700'],
    variable: '--font-montserrat'
})

export const metadata: Metadata = {
    title: "Shiki's Blog",
    description: 'Shiki personal blog',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='vi'
            suppressHydrationWarning
            className={`h-full antialiased ${montserrat.variable} ${firaMono.variable}`}
        >
            <body className='min-h-screen flex flex-col'>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    <Navbar />
                    <main className='flex-1 flex flex-col'>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
