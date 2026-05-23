import { api } from '@/lib/ky'
import React from 'react'
import { ApiResponse } from '@/types/api.types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import Image from 'next/image'

interface BlogPageProp {
    params: Promise<{ slug: string }>
}

const components = {
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        return <Image
            src={props.src!}
            alt={props.alt ?? ''}
            width={800}
            height={0}
            style={{ height: 'auto', width: '100%' }}
            unoptimized
        />
    }
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
            <header className='pt-5 flex flex-col gap-6'>
                <span className='text-muted'>{format(blogData.created_at, "MMMM do, yyyy")}</span>
                <span className='font-display font-bold text-5xl'>{blogData.title}</span>

                <div className='relative aspect-16/6 w-full'>
                    <Image
                        src={blogData.cover ?? ""}
                        alt='cover'
                        fill
                        className='object-cover rounded-xl'
                    />
                </div>
            </header>

            <div className='w-[80%] h-px bg-zinc-600 dark:bg-zinc-400 my-6 items-center mx-auto' />

            <article className='prose md:prose-lg dark:prose-invert max-w-none'>
                <MDXRemote source={blogData.content}
                    components={components}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkMath],
                            rehypePlugins: [
                                rehypeKatex,
                                [rehypePrettyCode, {
                                    theme: { dark: 'nord', light: 'catppuccin-latte' }
                                }]
                            ]
                        }
                    }}
                ></MDXRemote>
            </article>
        </div>
    )
}

export default BlogPage
