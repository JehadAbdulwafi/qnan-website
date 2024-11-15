import React from 'react'
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Home } from '@/sanity.types';
import { urlFor } from '@/lib/image';
import { useTranslation } from 'react-i18next';
import { getTitle } from '@/lib/getTitle';

export default function BenefitsCarousel({ data }: { data: Home['benefits'] }) {
  const { i18n } = useTranslation('common')
  return (
    <div className="flex flex-row gap-4">
      {data?.map((item, index) => (
        <Card
          key={index}
          className="w-full md:basis-1/2 bg-transparent lg:basis-1/3 p-0 m-0 rounded-none border-none"
        >
          <CardContent className="flex flex-col text-white bg-transparent aspect-square p-0 m-0 rounded-none">
            <div className="relative h-52 w-full">
              <Image
                src={urlFor(item.image?.asset?._ref!).url()}
                alt="benefit"
                objectFit="cover"
                fill
                className='w-full h-52 rounded'
              />

            </div>

            <h2 className={cn("text-2xl pt-6 pb-3 text-pretty font-medium")}>{getTitle(item.title!, i18n.language)}</h2>
            <p className="mt-1 text-pretty text-md my-auto font-medium">
              {getTitle(item.description!, i18n.language)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

