import Image from 'next/image'

export const mdxComponents = {
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <Image
            src={props.src!}
            alt={props.alt ?? ''}
            width={800}
            height={0}
            style={{ height: 'auto', width: '100%' }}
            unoptimized
        />
    )
}
