import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const BlogFooter: React.FC = () => {
    return (
        <div className='w-full flex justify-start items-center'>
            <Link href={'/'} className='flex group items-center text-muted hover:text-text transition-colors gap-2'>
                <FaArrowLeft size={15} className='group-hover:-translate-x-1 transition-transform' />
                <span >
                    Back to Home
                    <div className='bg-text h-px w-0 group-hover:w-full transition-all duration-500 ease-out'></div>
                </span>
            </Link>
        </div>
    )
}

export default BlogFooter
