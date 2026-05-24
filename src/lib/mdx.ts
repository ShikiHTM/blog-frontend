import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

export const mdxOptions = {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
        rehypeSlug,
        rehypeKatex,
        [rehypePrettyCode, {
            theme: { dark: 'github-dark', light: 'github-light' }
        }] as [typeof rehypePrettyCode, Record<string, unknown>]
    ]
}
