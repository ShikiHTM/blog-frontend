import { api } from '@/lib/ky';
import { ApiResponse } from '@/types/api.types';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { mdxOptions } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx/components';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { TocSidebar } from '@/components/blog/toc/TocSidebar';
import { extractToc } from '@/lib/toc';
import { Metadata } from 'next';
import secretConfig from '@/config/secret.config';
import React from 'react';
import BlogFooter from '@/components/blog/BlogFooter';

interface BlogPageProp {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProp): Promise<Metadata> {
    const { slug } = await params;

    const response = await api.get(`posts/${(await params).slug}`);
    const post = await response.json<ApiResponse>();

    if (!post) notFound();

    return {
        title: post.title,
        openGraph: {
            title: post.title,
            url: secretConfig.host + `/blog/${slug}`,
            type: 'article',
            images: [
                {
                    url: post.cover || secretConfig.fallbackCover!,
                    width: 1200,
                    height: 630,
                    alt: slug
                }
            ]
        }
    }
}

const BlogPage: React.FC<BlogPageProp> = async ({ params }) => {
    const response = await api.get(`posts/${(await params).slug}`, {
        throwHttpErrors: false,
    });

    if (response.status === 404) {
        notFound();
    }

    const post = await response.json<ApiResponse>();
    const toc = extractToc(post.content ?? '');

    return (
        <div className='flex-1 flex flex-col w-full max-w-4xl mx-auto p-3'>
            <BlogHeader title={post.title} date={post.created_at} cover={post.cover} />
            <div className='w-full h-px bg-zinc-600 dark:bg-zinc-400 my-6 items-center mx-auto' />
            <div className='grid xl:grid-cols-[1fr_15rem] xl:gap-10'>
                <article className='prose md:prose-lg dark:prose-invert max-w-none min-w-0'>
                    <MDXRemote
                        source={post.content!}
                        components={mdxComponents}
                        options={{ mdxOptions }}
                    ></MDXRemote>
                </article>
                <TocSidebar toc={toc} />
            </div>
            <div className='w-full h-px bg-zinc-600 dark:bg-zinc-400 my-6 items-center mx-auto' />
            <BlogFooter author={post.author} />
        </div>
    );
};

export default BlogPage;
