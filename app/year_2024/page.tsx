// app/components/SwiperComponent.tsx
"use client" // Specify that this component is client-side

import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import Swiper styles and the Swiper component
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules"
import { images } from "../../lib/images"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import Image from "next/image"

const Year2024 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <div className="h-full flex flex-col items-center p-6">
      <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 inline-block text-transparent bg-clip-text mb-6">
        Year 2024
      </h1>

      <Swiper
        loop={true}
        autoplay={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="h-96 w-full rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center bg-[#252525]">
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-full w-full object-cover md:object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`thumbs mt-3 h-[75px] md:h-[150px]  w-full rounded-lg`}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <button className="flex h-full w-full items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-full w-full object-cover"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Year2024
