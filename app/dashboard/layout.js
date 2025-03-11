'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const linkData = [
    {
        name: 'About',
        href: '/dashboard/about',
    },
    {
        name: 'Setting',
        href: '/dashboard/settings',
    },
]
export default function DashboardLayout({ children }) {
    const [count, setCount] = useState(0)
    const pathname = usePathname()
    return (
        <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-4">
            <div className="flex gap-4 font-bold text-lg mb-4  ">
                {linkData.map(item => (
                    <Link
                        className={pathname === item.href ? 'text-blue-500' : ''}
                        key={item.href}
                        href={item.href}>
                        {item.name}
                    </Link>
                ))}
            </div>
            <h2>Dashboard Layout {count}</h2>
            <button
                className="bg-black text-white p-2 my-4 rounded"
                onClick={() => setCount(count + 1)}>
                Increment
            </button>
            {children}
        </div>
    )
}
