import React from 'react'
import hosmeSrc from '../../../public/performance.jpg'
import Hero from '../../components/Hero'

export const metadata = {
    title: 'Performance',
    description: 'Professional Cloud Hosting',
}

export default function Page() {
    return <Hero imgUrl={hosmeSrc} altTxt="home" content="Performance" />
}
