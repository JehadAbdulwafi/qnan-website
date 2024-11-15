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
import { Quote, Star } from "lucide-react";
import { Home } from "@/sanity.types";
import { getTitle } from "@/lib/getTitle";

export function TestimonialsCarousel({ data }: { data: Home['testimonials'] }) {
  const { i18n } = useTranslation();
  const [_api, setApi] = React.useState<CarouselApi>();

  const isRTL = i18n.language === "ar";

  return (
    <div className={cn("select-none", { "rtl-carousel": isRTL })}>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
          direction: isRTL ? "rtl" : "ltr",
        }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full"
      >
        <CarouselContent>
          {data?.map((item, index) => (
            <CarouselItem
              key={index}
              className="w-full md:basis-1/2"
            >
              <div className="p-1  h-full">
                <Card className="h-full w-full flex flex-col">
                  <CardContent className="flex flex-row h-full items- p-6">
                    <Quote className="fill-sky-500 stroke-[0]" size={32} />
                    <div className="flex flex-1 flex-col items-center justify-center gap-3">
                      <div className="flex flex-row gap-0.5 items-center">
                        <Star className="fill-sky-500 stroke-[0]" />
                        <Star className="fill-sky-500 stroke-[0]" />
                        <Star className="fill-sky-500 stroke-[0]" />
                        <Star className="fill-sky-500 stroke-[0]" />
                        <Star className="fill-sky-500 stroke-[0]" />
                      </div>
                      <p className="line-clamp-3 text-pretty text-md my-auto font-medium text-center">
                        {getTitle(item.feedback!, i18n.language)}
                      </p>
                      <p className="text-pretty mt-auto text-lg font-medium text-sky-500">
                        {getTitle(item.name!, i18n.language)}
                      </p>
                    </div>
                    <Quote size={32} className="fill-sky-500 stroke-[0] transform scale-x-[-1] mt-auto" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
