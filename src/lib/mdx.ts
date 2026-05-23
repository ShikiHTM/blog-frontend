import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'

export const mdxOptions = {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
        rehypeKatex,
        [rehypePrettyCode, {
            theme: { dark: 'github-dark', light: 'github-light' }
        }]
    ]
}
