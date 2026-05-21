import React, { PropsWithChildren } from "react"

const Card: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="shadow-shadow-nord shadow-xl bg-surface rounded-2xl overflow-hidden w-full">
            {children}
        </div>
    )
}

export default Card
