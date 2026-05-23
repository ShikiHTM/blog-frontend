# Shiki's Blog — Frontend

Personal blog frontend for [shikihtm](https://github.com/ShikiHTM). Built on Next.js 16 with the App Router, React 19 + the React Compiler, and Tailwind CSS v4.

> **Status:** mostly functional. The home page lists posts from the backend, `/blog/[slug]` renders MDX with math and syntax-highlighted code, posts have a sticky table-of-contents sidebar that tracks the active heading, and the site has a shared navbar and footer with social links and a Ko-fi support widget.

## Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) with the React Compiler enabled
- **UI:** React 19, [Tailwind CSS v4](https://tailwindcss.com) (+ [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography)), [react-icons](https://react-icons.github.io/react-icons/)
- **State:** [zustand](https://github.com/pmndrs/zustand) for the TOC's active-heading store
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) — light/dark with a Nord-inspired palette
- **Typography:** Noto Serif + Noto Serif Display (via `next/font/google`, Vietnamese subset)
- **Content:** [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) for RSC MDX rendering
  - Math: [`remark-math`](https://github.com/remarkjs/remark-math) + [`rehype-katex`](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex)
  - Code: [`rehype-pretty-code`](https://rehype-pretty.pages.dev) on [Shiki](https://shiki.style) (themes: `nord` / `catppuccin-latte`)
  - Headings: [`rehype-slug`](https://github.com/rehypejs/rehype-slug) + [`github-slugger`](https://github.com/Flet/github-slugger) for the TOC
- **HTTP client:** [ky](https://github.com/sindresorhus/ky)
- **Dates:** [date-fns](https://date-fns.org)
- **Tooling:** TypeScript 5, ESLint 9, Prettier 3, pnpm

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, ThemeProvider, Navbar, Footer
│   ├── page.tsx                # Home — fetches posts and renders BlogCards
│   ├── globals.css             # Tailwind v4 entry + theme tokens
│   └── blog/[slug]/
│       ├── page.tsx            # Post page (MDX + math + code + TOC sidebar)
│       └── not-found.tsx       # 404 for unknown slugs
├── components/
│   ├── layout/
│   │   ├── navbar.tsx          # Sticky top nav with logo + theme toggle
│   │   └── footer.tsx          # Site footer: socials, credits, Ko-fi
│   ├── ui/
│   │   ├── Card.tsx            # Shared surface card
│   │   └── ThemeSwitch.tsx     # Light/dark toggle (next-themes)
│   ├── blog/
│   │   ├── BlogCard.tsx        # Post preview card used on the home grid
│   │   ├── BlogHeader.tsx      # Title / topic / date header on post pages
│   │   ├── BlogFooter.tsx      # Return-home footer with underline animation
│   │   └── toc/
│   │       ├── TocSidebar.tsx       # Sticky table of contents
│   │       ├── TocLink.tsx          # Individual TOC entry
│   │       ├── TocIndicator.tsx     # Active-heading indicator bar
│   │       └── useActiveHeading.ts  # IntersectionObserver hook
│   ├── mdx/components.tsx      # Custom MDX components (headings, code, etc.)
│   └── widget/kofi.tsx         # Ko-fi "Support me" modal widget
├── stores/toc.ts               # zustand store for the active TOC heading
├── lib/
│   ├── ky.ts                   # Configured ky instance
│   ├── mdx.ts                  # MDX compile/serialize helpers
│   └── toc.ts                  # Extracts headings from MDX for the sidebar
├── config/api.config.ts        # API host + suffix from env
└── types/api.types.ts          # Post/API response shape
```

## Getting started

Install dependencies (pnpm is used — `pnpm-lock.yaml` is committed):

```bash
pnpm install
```

Create a `.env` with the API endpoint of the backend:

```env
API_BASE_URL=http://localhost:8080
API_SUFFIX=/api/v1
```

Run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script        | Description                |
| ------------- | -------------------------- |
| `pnpm dev`    | Start the dev server       |
| `pnpm build`  | Production build           |
| `pnpm start`  | Serve the production build |
| `pnpm lint`   | Run ESLint                 |

## License

[MIT](./LICENSE) © Phạm Nguyễn Khánh Đăng
