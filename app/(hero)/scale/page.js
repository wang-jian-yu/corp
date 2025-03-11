import React from 'react'
import hosmeSrc from '../../../public/scale.jpg'
import Hero from '../../components/Hero'

export const metadata = {
    title: 'Scale',
    description: 'Professional Cloud Hosting',
}

export default function Page() {
    return <Hero imgUrl={hosmeSrc} altTxt="home" content="Scale" />
}
