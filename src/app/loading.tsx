import { Skeleton } from "@/components/ui/skeleton"

const BlogCardSkeleton = () => (
    <div className="bg-surface rounded-2xl overflow-hidden w-full">
        <div className="flex flex-col md:flex-row">
            <Skeleton className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-48 rounded-none" />
            <div className="w-full md:w-1/2 p-5 flex flex-col justify-center gap-3">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-7 w-3/4" />
                <Skeleton className="h-4 w-32 mt-2" />
            </div>
        </div>
    </div>
)

const HomeLoading = () => {
    return (
        <div className="flex-1 w-full flex flex-col items-center text-text">
            <div className="flex-1 max-w-4xl w-full">
                <div className="flex flex-col px-4 py-6 gap-3">
                    <Skeleton className="h-9 w-80" />
                    <Skeleton className="h-6 w-96 ml-2" />
                </div>

                <div className="flex flex-col px-4 py-6 gap-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <BlogCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeLoading
