import Image from 'next/image'
import React from 'react'

export default function Hero(props) {
    return (
        <div className="h-screen relative">
            <div className="absolute inset-0 -z-10">
                <Image src={props.imgUrl} fill style={{ objectFit: 'cover' }} alt={props.altTxt} />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
            </div>
            <div className="flex justify-center pt-48">
                <h1 className="text-white text-6xl">{props.content}</h1>
            </div>
        </div>
    )
}
