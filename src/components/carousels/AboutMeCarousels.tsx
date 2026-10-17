"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const photos = [
  "/IMG_0936.JPG",
  "/IMG_0657.jpg",
  "/IMG_1688.jpg",
];

export default function AboutPhotos() {
  const [selected, setSelected] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => setSelected(emblaApi.selectedScrollSnap());
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);

    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <div className="w-70 max-w-full shrink-0 md:w-80 select-none">
      <div ref={emblaRef} className="overflow-hidden rounded-4xl">
        <div className="flex touch-pan-y">
        {photos.map((src, index) => (
          <div key={`aboutMePhoto_${index}`}>
            <Image className="md:max-w-80 max-w-70" alt="" width={3024} height={4032} src={src} />
          </div>
        ))}
        </div>
      </div>
      <div className="mt-2 flex justify-center" role="group" aria-label="Выбор фотографии">
        {photos.map((src, index) => (
          <button
            key={`aboutMeButton_${index}`}
            type="button"
            aria-current={selected === index ? "true" : undefined}
            onClick={() => {
              emblaApi?.scrollTo(index);
              emblaApi?.plugins().autoplay?.reset();
            }}
            className="flex size-8 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span aria-hidden="true" className={`h-2 rounded-full transition-all duration-300 ${selected === index ? "w-6 bg-violet-600" : "w-2 bg-stone-300"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
