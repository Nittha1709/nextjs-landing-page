import { useState } from 'react'

export default function Button({
    children,
    type,
    className,
    onClick,
    isDisabled,
}) {
    return (
        <button
            type={type}
            className={`btn btn-${className}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>

    )
}