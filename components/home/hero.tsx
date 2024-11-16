import Image from 'next/image'
import React from 'react'

export default function Hero() {

  return (
    <div
      className="h-[590px] sm:h-[720px] min-h-[560px] w-full relative"
    >
      <div className="relative flex flex-1 flex-col h-full w-full">
        <div className="w-full relative h-[80%]">
          <Image
            src={require("../../public/images/banner.webp")}
            alt="iphone"
            fill
            className="w-full h-full object-cover relative"
          />
        </div>
        <div className="w-full absolute h-[75%] -bottom-24 sm:-bottom-40">
          <Image
            src={require("../../public/images/iphone-3.webp")}
            alt="iphone"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

