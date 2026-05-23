'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { TocItem } from '@/lib/toc'
import { useTocStore } from '@/stores/toc'
import { useActiveHeading } from './useActiveHeading'
import { TocIndicator } from './TocIndicator'
import { TocLink } from './TocLink'

const SCROLL_OFFSET = 80

interface TocSidebarProps {
    toc: TocItem[]
}

export const TocSidebar: React.FC<TocSidebarProps> = ({ toc }) => {
    const activeId = useTocStore(s => s.activeId)
    const itemRefs = useRef<Record<string, HTMLLIElement | null>>({})
    const [bar, setBar] = useState({ top: 0, height: 0, visible: false })

    useActiveHeading(toc, SCROLL_OFFSET)

    useEffect(() => {
        if (!activeId) {
            setBar(b => ({ ...b, visible: false }))
            return
        }
        const el = itemRefs.current[activeId]
        if (!el) return
        setBar({ top: el.offsetTop, height: el.offsetHeight, visible: true })
    }, [activeId])

    const handleNavigate = (id: string) => {
        const heading = document.getElementById(id)
        if (!heading) return
        const top = heading.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
        window.scrollTo({ top, behavior: 'smooth' })
        history.replaceState(null, '', `#${id}`)
    }

    if (toc.length === 0) return null

    return (
        <nav className="sticky top-24 self-start hidden xl:block w-60 text-sm">
            <p className="font-display font-bold mb-3 text-text">On this page</p>
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                <TocIndicator top={bar.top} height={bar.height} visible={bar.visible} />
                <ul className="space-y-1">
                    {toc.map(item => (
                        <TocLink
                            key={item.id}
                            item={item}
                            isActive={item.id === activeId}
                            onNavigate={handleNavigate}
                            itemRef={(el) => { itemRefs.current[item.id] = el }}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    )
}
