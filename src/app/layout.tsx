import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';

const blexMono = localFont({
    src: './fonts/BlexMonoNerdFont-Regular.woff2',
    variable: '--font-blex-mono',
    display: 'swap',
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
            className={cn('h-full', 'antialiased', montserrat.variable, blexMono.variable)}
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
