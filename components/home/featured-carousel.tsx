import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Home } from "@/sanity.types";

import { urlFor } from "@/lib/image";
import { getTitle } from "@/lib/getTitle";

export function FeaturedCarousel({ data }: { data: Home['restaurants'] }) {
  const { i18n } = useTranslation();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const isRTL = i18n.language === "ar"; // Check if the current locale is Arabic

  const itemsToScroll = () => {
    if (window.innerWidth >= 1024) return 4; // Large screens
    if (window.innerWidth >= 768) return 2; // Medium screens
    return 1; // Mobile screens
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(Math.floor(api.selectedScrollSnap() / itemsToScroll()) + 1);

    api.on("select", () => {
      setCurrent(Math.floor(api.selectedScrollSnap() / itemsToScroll()) + 1);
    });

    api.on("scroll", () => {
      setCurrent(Math.floor(api.selectedScrollSnap() / itemsToScroll()) + 1);
    });
  }, [api]);

  const totalItems = Math.ceil(count / itemsToScroll()); // Calculate total items based on screen size

  return (
    <div className={cn("select-none", { "rtl-carousel": isRTL })}>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
          direction: isRTL ? "rtl" : "ltr", // Set direction based on locale
        }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full"
      >
        <CarouselContent>
          {data?.map((item, index) => (
            <CarouselItem
              key={index}
              className="w-full md:basis-1/2 lg:basis-1/4"
            >
              <Card
                key={index}
                className="w-full md:basis-1/2 bg-transparent lg:basis-1/3 p-0 m-0 rounded-none border-none"
              >
                <CardContent className="flex flex-col text-white bg-transparent aspect-square p-0 m-0 rounded-none">
                  <div className="relative h-80 w-full">
                    <Image
                      src={urlFor(item.logo?.asset?._ref!).url()}
                      alt="benefit"
                      objectFit="cover"
                      fill
                      className='w-full h-80 rounded-md'
                    />
                  </div>

                  <h2 className={cn("text-2xl pt-6 pb-2 text-pretty font-medium")}>{getTitle(item.name!, i18n.language)}</h2>
                  <p className=" text-pretty text-md my-auto font-medium">
                    {getTitle(item?.description!, i18n.language)}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Carousel Navigation */}
      <div
        className={cn(
          "flex items-center justify-center gap-2 mt-2",
          isRTL ? "flex-row-reverse" : "flex-row"
        )}
      >
        {Array.from({ length: totalItems }).map((_, index) => {
          const dotIndex = isRTL ? totalItems - 1 - index : index; // Adjust index for RTL
          return (
            <div
              className="rounded-full border-[0.5px]"
              onClick={() => api?.scrollTo(dotIndex * itemsToScroll())} // Use adjusted index
              key={index}
            >
              {current === dotIndex + 1 ? (
                <div className="w-2.5 h-2.5 rounded-full bg-[#bf9f60]"></div>
              ) : (
                <div className="w-2.5 h-2.5 rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
