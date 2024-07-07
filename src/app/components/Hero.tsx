import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.15] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative -mt-16 text-center">
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-5">
            Explore the Possibilities <br />
            of AI Chatting with Brainwave
            <span className="w-full flex justify-end mt-4">
              <Image
                src="/curve.png"
                alt="curve"
                width={350}
                height={100}
                className=""
              />
            </span>
          </p>
          <p className="text-white text-lg z-50 font-thin font-sans tracking-widest p-3 text-center">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with
            <br /> Brainwave, the open AI chat app.
          </p>
        </div>
      </div>

      <div className="mt-8 w-[75%] aspect-[1024/490] overflow-hidden scale-[70%] z-40 rounded-3xl bg-gradient-conic">
        <Image
          src="/background.jpg"
          alt="robot img"
          width={1024}
          height={490}
          className="w-full scale-[1] -translate-y-[25%]"
        />
      </div>

      <div className="absolute flex w-3/4 md:w-1/4 rounded-3xl h-12 bg-black opacity-70 translate-y-[1000px] md:translate-y-[1300px] z-50 mx-auto md:mx-0">
        <Image
          alt="loading"
          src="/loading.png"
          width={45}
          height={10}
          className="ml-3 p-3"
        />
        <p className="text-white my-auto mx-3">AI is generating</p>
      </div>
    </div>
  );
}
