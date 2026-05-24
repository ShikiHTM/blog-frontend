'use client';

import BlogCard from '@/components/blog/BlogCard';
import { useEffect } from 'react';
import { format } from 'date-fns';
import { useBlogStore } from '@/stores/useBlogStore';

export default function Home() {
    const { blogs, isLoading, isError, fetch } = useBlogStore();

    useEffect(() => {
        fetch();
    }, [fetch]);

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
