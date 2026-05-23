# Shiki's Blog — Frontend

Personal blog frontend for [shikihtm](https://github.com/ShikiHTM). Built on Next.js 16 with the App Router, React 19 + the React Compiler, and Tailwind CSS v4.

> **Status:** early scaffolding. The shell (layout, navbar, theming, API client) is in place; the home page and post routes are still to come.

## Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) with the React Compiler enabled
- **UI:** React 19, [Tailwind CSS v4](https://tailwindcss.com), [react-icons](https://react-icons.github.io/react-icons/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) — light/dark with a Nord-inspired palette
- **Typography:** Noto Serif + Noto Serif Display (via `next/font/google`, Vietnamese subset)
- **HTTP client:** [ky](https://github.com/sindresorhus/ky)
- **Tooling:** TypeScript 5, ESLint 9, Prettier 3, pnpm

## Project structure

```
src/
├── app/                  # App Router entry (layout, page, globals.css)
├── components/
│   ├── layout/navbar.tsx # Sticky top nav with theme toggle and socials
│   └── ui/Card.tsx       # Shared surface card
├── config/api.config.ts  # API host + suffix from env
├── lib/ky.ts             # Configured ky instance
└── test/api.test.ts      # Ad-hoc API smoke test
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
