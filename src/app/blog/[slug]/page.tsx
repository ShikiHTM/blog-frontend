import { api } from '@/lib/ky'
import React from 'react'
import { ApiResponse } from '@/types/api.types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { mdxOptions } from '@/lib/mdx'
import { mdxComponents } from '@/components/mdx/components'
import { BlogHeader } from '@/components/blog/BlogHeader'

interface BlogPageProp {
    params: Promise<{ slug: string }>
}

const BlogPage: React.FC<BlogPageProp> = async ({ params }) => {
    const response = await api.get(`posts/${(await params).slug}`, {
        throwHttpErrors: false
    });

    if (response.status === 404) {
        notFound();
    }

    const blogData = await response.json<ApiResponse>();

    return (
        <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto p-3">
            <BlogHeader title={blogData.title} date={blogData.created_at} cover={blogData.cover} />
            <div className='w-[80%] h-px bg-zinc-600 dark:bg-zinc-400 my-6 items-center mx-auto' />
            <article className='prose md:prose-lg dark:prose-invert max-w-none'>
                <MDXRemote
                    source={blogData.content!}
                    components={mdxComponents}
                    options={{ mdxOptions }}
                ></MDXRemote>
            </article>
        </div>
    )
}

export default BlogPage
