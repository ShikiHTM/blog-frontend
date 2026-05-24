'use client'

import { useEffect } from 'react'
import type { TocItem } from '@/lib/toc'
import { useTocStore } from '@/stores/toc'

export function useActiveHeading(toc: TocItem[], scrollOffset: number) {
    const setActive = useTocStore(s => s.setActive)

    useEffect(() => {
        if (toc.length === 0) return

        const headings = toc
            .map(t => document.getElementById(t.id))
            .filter((h): h is HTMLElement => !!h)
        if (headings.length === 0) return

        const visible = new Set<string>()
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visible.add(entry.target.id)
                    else visible.delete(entry.target.id)
                }
                if (visible.size > 0) {
                    const topMost = toc.find(t => visible.has(t.id))
                    if (topMost) setActive(topMost.id)
                } else {
                    const y = window.scrollY + scrollOffset
                    let last: string | null = null
                    for (const item of toc) {
                        const el = document.getElementById(item.id)
                        if (el && el.offsetTop <= y) last = item.id
                        else break
                    }
                    setActive(last)
                }
            },
            { rootMargin: `-${scrollOffset}px 0px -70% 0px`, threshold: 0 }
        )

        headings.forEach(h => observer.observe(h))
        return () => observer.disconnect()
    }, [toc, scrollOffset, setActive])
}
