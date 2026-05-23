import BlogCard from "@/components/blog/BlogCard";
import { ApiResponse } from "@/types/api.types";
import { api } from "@/lib/ky";
import { format } from "date-fns";

export default async function Home() {
    const posts = await api('posts', { throwHttpErrors: false }).json<ApiResponse[]>();

    return (
        <div className="flex-1 w-full flex flex-col items-center text-text">
            <div className="flex-1 max-w-4xl w-full">
                {/* Welcome */}
                <div className="flex flex-col px-4 py-6">
                    <span className="font-extrabold text-3xl font-display">Welcome to my blog 👋</span>
                    <span className="mt-3 ml-2 font-serif text-xl">I'm Hotome Shiki - Developer, Win Variation Simp</span>
                </div>

                {/* Card */}
                <div className="flex flex-col px-4 py-6 gap-3">
                    {posts.map((p) => (
                        <BlogCard key={p.slug} topic={p.topic} title={p.title} cover={p.cover} date={format(p.created_at, "MMMM do, yyyy")} slug={p.slug} />
                    ))}
                </div>
            </div>
        </div>
    );
}
