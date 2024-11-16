import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <section
      className="h-[580px] min-h-[560px] w-full relative"
    >
      <div className="relative px-6 flex flex-col h-full w-full pt-14">
        <div className="mx-auto flex-1">
          <div className="text-center">
            <h1 className="text-balance text-3xl font-[700] tracking-tight text-sky-500 sm:text-5xl">
              {t('banner-title')}
            </h1>
            <p className="mt-2 text-pretty text-lg font-normal sm:text-[16px]">
              {t('banner-desc')}
            </p>
          </div>
        </div>
        <div className="w-full relative h-full mx-auto">
          <Image
            src={require("../../public/images/iphone-3.png")}
            alt="iphone"
            fill
            className="w-full object-contain scale-125"
          />
        </div>
        </div>
    </section>
  )
}

