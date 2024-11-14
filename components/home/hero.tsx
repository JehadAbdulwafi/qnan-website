import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <section
      className="h-[580px] min-h-[560px] w-full relative"
    >
      <Image
        src={require("../../public/images/bg.png")}
        alt="iphone"
        className="absolute top-0 left-0 w-full object-center object-cover h-[580px] min-h-[560px]"

      />
      <div className="relative px-6 flex flex-col h-full w-full pt-14">
        <div className="mx-auto flex-1">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-[700] tracking-tight text-[#bf9f60] sm:text-5xl">
              {t('banner-title')}
            </h1>
            <p className="mt-2 text-white text-pretty text-lg font-normal sm:text-[16px]">
              {t('banner-desc')}
            </p>
          </div>
        </div>
        <div className="max-w-[720px] relative flex-1 mx-auto flex-grow">
          <Image
            src={require("../../public/images/iphone-3.png")}
            alt="iphone"
            className="w-full object-contain relative top-0"
          />
        </div>
      </div>
    </section>
  )
}

