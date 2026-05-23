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
            <Link href={"/blog/" + slug} className="relative group flex flex-col md:flex-row cursor-pointer">
                {/* Cover */}
                {cover && (
                    <>
                        <div className="absolute inset-0 -z-50 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:duration-200 ease-linear">
                            <Image
                                src={cover}
                                alt=""
                                fill
                                loading="lazy"
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                        </div>
                        <div className="relative w-full aspect-video md:aspect-auto">
                            <Image
                                src={cover}
                                alt={title}
                                fill
                                className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                        </div>
                    </>
                )}

                {!cover && (
                    <div className="absolute inset-0"></div>
                )}

                <div className="relative w-full p-5 md:w-1/2 flex flex-col justify-center rounded-b-2xl md:rounded-l-none md:rounded-r-2xl">
                    <span className="font-display text-xl text-muted/60">{topic}</span>
                    <span className="font-display text-2xl font-extrabold">{title}</span>
                    <footer className="bottom-0 mt-2 text-muted/60">{date}</footer>
                </div>
            </Link>
        </Card>
    )
}

export default BlogCard
