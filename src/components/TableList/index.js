import React, { useState } from 'react'

/**
 * 
 * Pre-designed 
 */
export const TableListRow = ({ className, children, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`table-list ${className}`} onClick={() => setIsOpen(!isOpen)}>
            {children}
            {(isOpen && details) && <div className='bg-neutral-100 min-h-60 overflow-auto rounded-b-md col-span-full'>{ details() }</div>}
        </nav>
    );
}