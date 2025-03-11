import React from 'react'
import hosmeSrc from '../../public/home.jpg'
import Hero from '../components/Hero'

export const metadata = {
    title: 'Home',
    description: 'Professional Cloud Hosting',
}

export default function Page() {
    return <Hero imgUrl={hosmeSrc} altTxt="home" content="Professional Cloud Hosting" />
}
