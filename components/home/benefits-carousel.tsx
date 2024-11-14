import React from 'react'
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const list = Array.from({ length: 3 });

export default function BenefitsCarousel() {
  return (
    <div className="flex flex-row gap-4">
      {list.map((_, index) => (
        <Card
          key={index}
          className="w-full md:basis-1/2 bg-transparent lg:basis-1/3 p-0 m-0 rounded-none border-none"
        >
          <CardContent className="flex flex-col text-white bg-transparent aspect-square p-0 m-0 rounded-none">
            <div className="relative h-52 w-full">
              <Image
                // rondom image
                src={"https://picsum.photos/200"}
                alt="benefit"
                objectFit="cover"
                fill
                className='w-full h-52 rounded'
              />

            </div>

            <h2 className={cn("text-3xl pt-6 pb-3")}> Benefit {index + 1}</h2>
            <p className="mt-1 text-pretty text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

