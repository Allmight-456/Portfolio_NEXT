//primary section that you see when visiting above fold
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow} from "react-icons/fa";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="-top-40 -left-10 md:-left32  md:-top-20 h-screen "
        fill="white"
      />
      <Spotlight
        className="top-10 left-full  h-[80vh]
        w-[50vw] "
        fill="purple"
      />
      <Spotlight className="top-40 left-80 h-[80vh] w-[50vw] " fill="blue" />
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div
            className="max-w-[60vw] flex flex-col items-center
          justify-center"
          >
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic With NextJS
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl "
              words="Transforming Words into Seamless Transitions"
            />
            <p className=" md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! Ishan this side ,I'm NEXT.js, Rust  Developer .
            </p>
            <a href="https://github.com/Allmight-456" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="Show my work"
                icon={FaLocationArrow}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
