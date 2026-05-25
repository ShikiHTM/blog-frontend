import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode, { LineElement } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

export const mdxOptions = {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
        rehypeSlug,
        rehypeKatex,
        [rehypePrettyCode, {
            theme: { dark: 'github-dark', light: 'github-light' },
            onVisitLine(node: LineElement) {
                if (node.children.length === 0) {
                    node.children = [{ type: 'text', value: '' }]
                }
            },
            onVisitHighlightedLine(node: LineElement) {
                node.properties.className?.push('line--highlighted');
            },
            onVisitHighlightedWord(node: LineElement) {
                node.properties.className = ['word--highlighted'];
            }
        }] as [typeof rehypePrettyCode, Record<string, unknown>]
    ]
}
