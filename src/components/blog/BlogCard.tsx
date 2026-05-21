import Card from "../ui/Card";
import Image from "next/image"
import Link from "next/link";

interface BlogCardProps {
    topic: string;
    title: string;
    cover?: string;
    date: string;
    slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ topic, title, cover, date, slug }) => {
    return (
        <Card>
            <Link href={slug} className="flex flex-col md:flex-row cursor-pointer">
                {/* Cover */}
                {cover != null && (
                    <div className="relative w-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                        <Image
                            src={cover}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 60vw"
                        />
                    </div>
                )}

                <div className="w-full p-5 md:w-1/2 flex flex-col justify-center rounded-b-2xl md:rounded-l-none md:rounded-r-2xl">
                    <span className="font-display text-xl text-muted/60">{topic}</span>
                    <span className="font-display text-2xl font-extrabold">{title}</span>
                    <footer className="bottom-0 mt-2 text-muted/60">{date}</footer>
                </div>
            </Link>
        </Card>
    )
}

export default BlogCard
