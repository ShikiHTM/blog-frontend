import BlogCard from "@/components/blog/BlogCard";

export default function Home() {
    return (
        <div className="flex-1 w-full flex flex-col items-center text-text">
            <div className="border-amber-200 flex-1 border-2 max-w-4xl w-full overflow-hidden">
                {/* Welcome */}
                <div className="flex flex-col px-4 py-6">
                    <span className="font-extrabold text-3xl font-display">Welcome to my blog 👋</span>
                    <span className="mt-3 ml-2 font-serif text-xl">I'm Hotome Shiki - Developer, Win Variation Simp</span>
                </div>

                {/* Card */}
                <div className="flex flex-col md:flex-row px-4 py-6">
                    <BlogCard topic="dummy" title="the quick brown fox jumps over the lazy dog" slug="test" date="14 May 2026" cover="/test.png" />
                </div>
            </div>
        </div>
    );
}
