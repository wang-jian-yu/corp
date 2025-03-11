import React from 'react'
import hosmeSrc from '../../../public/reliability.jpg'
import Hero from '../../components/Hero'

export const metadata = {
    title: 'Reliable',
    description: 'Professional Cloud Hosting',
}

export default function Page() {
    return <Hero imgUrl={hosmeSrc} altTxt="home" content="Reliable " />
}
