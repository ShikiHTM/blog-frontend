import { Skeleton } from "@/components/ui/skeleton"

const BlogPostLoading = () => {
    return (
        <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto p-3">
            <header className="pt-5 flex flex-col gap-6">
                <Skeleton className="h-5 w-40" />
                <div className="flex flex-col gap-3">
                    <Skeleton className="h-12 w-11/12" />
                    <Skeleton className="h-12 w-2/3" />
                </div>
                <Skeleton className="w-full aspect-16/6 rounded-xl" />
            </header>

            <div className="w-full h-px bg-zinc-600 dark:bg-zinc-400 my-6 items-center mx-auto" />

            <div className="grid xl:grid-cols-[1fr_15rem] xl:gap-10">
                <div className="flex flex-col gap-4 min-w-0">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-8 w-2/5 mt-4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-11/12" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                </div>

                <nav className="sticky top-24 self-start hidden xl:block w-60">
                    <Skeleton className="h-5 w-28 mb-3" />
                    <div className="flex flex-col gap-2 pl-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-4/6" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                </nav>
            </div>

            <div className="w-full h-px bg-zinc-600 dark:bg-zinc-400 my-6 items-center mx-auto" />

            <div className="w-full flex justify-between items-center">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-40" />
            </div>
        </div>
    )
}

export default BlogPostLoading
