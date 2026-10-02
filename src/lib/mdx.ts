import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx'
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm'

const chConfig = {
  components: { code: "MyCode" },
};

export const mdxOptions = {
    remarkPlugins: [
        remarkMath, 
        remarkGfm,
        [remarkCodeHike, chConfig]
    ],
    recmaPlugins: [
        [recmaCodeHike, chConfig]
    ],
    rehypePlugins: [
        rehypeSlug,
        rehypeKatex,
    ],
    // useDynamicImport: true
};
