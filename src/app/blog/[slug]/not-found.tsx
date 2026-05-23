import Link from 'next/link'
import Image from 'next/image'

export default function BlogNotFound() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-6 text-center">
            <Image
                src='/not_found.png'
                alt='not found'
                width={499}
                height={319}
                className='w-full max-w-md h-auto'
                priority
                unoptimized
            />

            <div className="w-24 h-px bg-zinc-600 dark:bg-zinc-400 my-8" />

            <h1 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Blog post not found
            </h1>
            <p className="text-muted text-lg max-w-md mb-10">
                The post you’re looking for doesn’t exist, has been moved, or maybe it was never written at all.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
                <Link
                    href="/"
                    className="px-5 py-2 rounded-md bg-surface hover:bg-surface-hover border border-border transition-colors"
                >
                    Back to home
                </Link>
            </div>
        </div>
    )
}
