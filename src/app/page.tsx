"use client";
import Image from "next/image";
import { Hero } from "./components/Hero";
import { InfiniteCards } from "./components/InfiniteCards";
import { Lamp } from "./components/Lamp";
import {
  AnimatedTooltipPreview,
  people,
} from "./components/AnimatedTooltipPreview";
import { BackgroundGradientDemo } from "./components/BackgroundGradientDemo";
import { BackgroundGradientAnimationDemo } from "./components/BackgroundAnimation";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-[200px]">
        <AnimatedTooltipPreview />
        <p className="text-white -translate-y-4 text-center ">Happy Users</p>
      </div>
      <InfiniteCards />
      <Lamp />
      <div className="flex flex-col md:flex-row justify-between w-[90%] md:w-[70%] mx-auto mt-[50px] md:mt-[100px] space-y-4 md:space-y-0 md:space-x-4">
        <BackgroundGradientDemo image="/service-1.png" />
        <BackgroundGradientDemo image="/service-2.png" />
        <BackgroundGradientDemo image="/service-3.png" />
      </div>
      
      <div className="scale-50 rounded-3xl overflow-hidden">
      <BackgroundGradientAnimationDemo />
      </div>
      
    </>
  );
}
