import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

interface BlogFooterProps {
    author: string
}

const BlogFooter: React.FC<BlogFooterProps> = ({ author }) => {
    return (
        <div className='w-full flex justify-between items-center'>
            <Link href={'/'} className='flex group items-center text-muted hover:text-text transition-colors gap-2'>
                <FaArrowLeft size={15} className='group-hover:-translate-x-1 transition-transform' />
                <span >
                    Back to Home
                    <div className='bg-text h-px w-0 group-hover:w-full transition-all duration-500 ease-out'></div>
                </span>
            </Link>
            <div className='flex justify-center items-center gap-1'>
                <span className='text-muted'>Written by </span>
                <span className='font-bold'>{author}</span>
            </div>
        </div>
    )
}

export default BlogFooter
