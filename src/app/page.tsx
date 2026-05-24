import BlogCard from '@/components/blog/BlogCard';
import secretConfig from '@/config/secret.config';
import { format } from 'date-fns';
import { Metadata } from 'next';
import { api } from '@/lib/ky';
import { ApiResponse } from '@/types/api.types';

export const metadata: Metadata = {
    title: "Shiki Personal Blog",
    description: "Developer, Win Variation Simp. Personal blog.",
    openGraph: {
        title: "Shiki Personal Blog",
        url: secretConfig.host,
        type: 'website',
        images: [{ url: secretConfig.fallbackCover!, width: 1200, height: 630 }]
    }
}

export const revalidate = 3600;

export default async function Home() {
    const blogs = await api.get('posts').json<ApiResponse[]>();

    return (
        <div className='flex-1 w-full flex flex-col items-center text-text'>
            <div className='flex-1 max-w-4xl w-full'>
                {/* Welcome */}
                <div className='flex flex-col px-4 py-6'>
                    <span className='font-extrabold text-3xl font-display'>Welcome to my blog 👋</span>
                    <span className='mt-3 ml-2 font-serif text-xl'>
                        I'm Hotome Shiki - Developer, Win Variation Simp
                    </span>
                </div>

                {/* Card */}
                <div className='flex flex-col px-4 py-6 gap-3'>
                    {blogs &&
                        blogs.map((p) => (
                            <BlogCard
                                key={p.slug}
                                topic={p.topic}
                                title={p.title}
                                cover={p.cover}
                                date={format(p.created_at, 'MMMM do, yyyy')}
                                slug={p.slug}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
