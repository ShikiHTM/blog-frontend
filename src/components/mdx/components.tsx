import Image from 'next/image'

export const mdxComponents = {
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <Image
            src={props.src as string}
            alt={props.alt ?? ''}
            width={800}
            height={0}
            style={{ height: 'auto', width: '100%' }}
            unoptimized
        />
    )
}
