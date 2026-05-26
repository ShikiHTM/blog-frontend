import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'

interface BlogHeaderProps {
    title: string;
    date: string;
    cover?: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date, cover }) => {
    return (
        <header className='pt-5 flex flex-col gap-6'>
            <span className='text-muted'>{format(date, "MMMM do, yyyy")}</span>
            <span className='font-display font-bold text-4xl/6'>{title}</span>

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
