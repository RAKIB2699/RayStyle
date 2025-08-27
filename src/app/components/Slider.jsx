"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function Slider() {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[ Autoplay]}
      className="mySwiper rounded-2xl h-[60vh]"
    >
      {/* Slide 1 */}
      <SwiperSlide className="relative">
        <Image
          src="/banner/sun-1.webp"
          alt="Banner 1"
          width={1280}
          priority={false} 
          height={1500}
          className="w-full h-full object-cover"
        />
    
        <div className="absolute inset-0 bg-black/50"></div>
    
      </SwiperSlide>

    
      <SwiperSlide className="relative">
        <Image
          src="/banner/sun-2.jpg"
          alt="Banner 2"
          width={1280}
          height={1500}
          priority={false} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

      </SwiperSlide>

      
      <SwiperSlide className="relative">
        <Image
          src="/banner/sun-3.webp"
          alt="Banner 3"
          width={1200}
          height={1500}
          priority={false} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </SwiperSlide>
            <SwiperSlide className="relative">
        <Image
          src="/banner/sun-4.webp"
          alt="Banner 3"
          width={1200}
          height={1500}
          priority={false} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </SwiperSlide>
    </Swiper>
  );
}
