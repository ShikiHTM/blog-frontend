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

const getPost = async (slug: string) => {
    const response = await api.get(`posts/${slug}`);
    if (response.status === 404) return null;
    return response.json<ApiResponse>();
}

export async function generateMetadata({ params }: BlogPageProp): Promise<Metadata> {
    const { slug } = await params;

    const post = await getPost(slug);

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
    const { slug } = await params;

    const post = await getPost(slug);

    if (!post) notFound();

    const toc = extractToc(post.content ?? '');

    return (
        <div className='flex-1 flex flex-col w-full max-w-5xl mx-auto p-3'>
            <BlogHeader title={post.title} date={post.created_at} author={post.author} />
            <div className='w-full h-px bg-zinc-600 dark:bg-zinc-400 my-8 items-center mx-auto' />
            <div className='grid xl:grid-cols-[1fr_15rem] xl:gap-5'>
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
            <BlogFooter />
        </div>
    );
};

export default BlogPage;
