import React from 'react'
import type { TocItem } from '@/lib/toc'

interface TocLinkProps {
    item: TocItem
    isActive: boolean
    onNavigate: (id: string) => void
    itemRef: (el: HTMLLIElement | null) => void
}

export const TocLink: React.FC<TocLinkProps> = ({ item, isActive, onNavigate, itemRef }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        onNavigate(item.id)
    }

    return (
        <li
            ref={itemRef}
            style={{ paddingLeft: (item.depth - 2) * 12 + 14 }}
        >
            <a
                href={`#${item.id}`}
                onClick={handleClick}
                className={`block py-1 leading-snug transition-colors duration-200 ${isActive ? 'text-text font-semibold' : 'text-muted hover:text-text'
                    }`}
            >
                {item.text}
            </a>
        </li>
    )
}
