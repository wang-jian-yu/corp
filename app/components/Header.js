'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
    {
        name: 'Performance',
        href: '/performance',
    },
    {
        name: 'Reliability',
        href: '/reliability',
    },
    {
        name: 'Scale',
        href: '/scale',
    },
]

const accessLink = ['/', '/performance', '/reliability', '/scale']

export default function Header() {
    const pathname = usePathname()
    console.log(pathname)
    // if (!accessLink.includes(pathname)) return null
    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8">
                <Link href="/" className="text-3xl bold">
                    Home
                </Link>
                <div className="text-xl space-x-4">
                    {linkData.map(item => {
                        console.log('pathname', pathname, item.href, pathname === item.href)
                        return (
                            <Link
                                className={pathname === item.href ? 'text-purple-500' : ''}
                                key={item.href}
                                href={item.href}>
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
