import { fromMarkdown } from 'mdast-util-from-markdown'
import { visit } from 'unist-util-visit'
import GithubSlugger from 'github-slugger'

export interface TocItem {
    id: string
    text: string
    depth: number
}

type MdastNode = { type: string; value?: string; children?: MdastNode[] }

function nodeText(node: MdastNode): string {
    if (typeof node.value === 'string') return node.value
    if (!node.children) return ''
    return node.children.map(nodeText).join('')
}

export function extractToc(markdown: string, minDepth = 2, maxDepth = 4): TocItem[] {
    const tree = fromMarkdown(markdown)
    const slugger = new GithubSlugger()
    const items: TocItem[] = []

    visit(tree, 'heading', (node) => {
        if (node.depth < minDepth || node.depth > maxDepth) return
        const text = nodeText(node as unknown as MdastNode).trim()
        if (!text) return
        items.push({ id: slugger.slug(text), text, depth: node.depth })
    })

    return items
}
