import React from 'react'

interface TocIndicatorProps {
    top: number
    height: number
    visible: boolean
}

export const TocIndicator: React.FC<TocIndicatorProps> = ({ top, height, visible }) => (
    <span
        aria-hidden
        className="absolute left-0 w-px bg-text transition-all duration-300 ease-out"
        style={{ top, height, opacity: visible ? 1 : 0 }}
    />
)
