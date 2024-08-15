'use client'

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import assets from "@/app/assets";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function Hero () {
     const plugin = React.useRef(
       Autoplay({ delay: 3000  })
     );
  const carousel01 = assets.carousel.carouselOne;
  const carousel02 = assets.carousel.carouselTwo;
  const carousel03 = assets.carousel.carouselThree;
  const carousel04 = assets.carousel.carouselFour;
  const carousel05 = assets.carousel.carouselFive;
  const carousel06 = assets.carousel.carouselSix;

  const carouselImages = [carousel01, carousel02, carousel03,carousel04,carousel05,carousel06];

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        opts={{ align: "start", loop: true }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full max-w-full mt-16 md:mt-[70px]"
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <CardContent>
                  <Image
                    src={image}
                    width={2000}
                    height={400}
                    alt={` logo`}
                    className="rounded-md mr-1"
                  />
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
