import React, { PropsWithChildren } from "react"

const Card: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="bg-surface rounded-2xl overflow-visible w-full">
            {children}
        </div>
    )
}

export default Card
