import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'

interface BlogHeaderProps {
    title: string;
    date: string;
    // cover?: string;
    author: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date, author }) => {
    return (
        <header className='pt-5 flex flex-col gap-6'>
            <span className='font-display font-bold text-5xl/tight' >{title}</span>
            <div className="flex items-center w-full h-10 -mt-3 justify-between">
                <div className='flex items-center gap-4'>
                    <div className='relative w-10 h-10 shrink-0'>
                        <Image 
                            src={"/logo.png"}
                            alt={author}
                            fill
                            className='object-cover rounded-full'
                        />
                    </div>
                    <span className='text-muted text-xl'>{author}</span>
                </div>
                <span className='text-muted text-xl'>{format(date, "MMMM do, yyyy")}</span>
            </div>

            {/*
            <div className='relative aspect-16/6 w-full'>
                <Image
                    src={cover ?? ""}
                    alt='cover'
                    fill
                    className='object-cover rounded-xl'
                />
            </div>
            */}
        </header>
    )
}
