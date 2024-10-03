'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useGlobalState } from '@/context';
import SmallScreenHeader from './SmallScreenHeader';

export default function LargeScreenHeader() {
  const { toggleRole } = useGlobalState();
  const [position, setPosition] = useState(0);
  const [imageSlider, setImageSlider] = useState(51);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX } = e;
    const xPercent = (clientX / window.innerWidth) * 100;
    const xMotion = ((clientX / window.innerWidth) * 100)-50;
    setPosition(xMotion);
    setImageSlider(xPercent);
  };


  return (
    <>
      <div className="hidden md:block">
        <div className="relative w-full h-[550px] flex justify-evenly items-center bg-white dark:bg-gray-900" onMouseMove={handleMouseMove}>
          <div className=" mr-16 max-w-[25%]">
            <h1
              className="top-0 text-accent dark:text-accent text-center text-xl mx-auto max-w-[50%] hover:bg-[#FCA311] font-bold cursor-pointer dark:hover:bg-[#FCA311] border-2 p-2 rounded-full border-accent bg-blue-100"
              style={{ opacity: `${1-(imageSlider/100)}`}}
              onClick={() => toggleRole('trainer')}
            >
              Personal Trainer
            </h1>
            <p
              className="text-accent dark:text-gray-300 pt-2 pl-[20%] pr-[20%] text-center text-base font-semibold text-wrap"
              style={{ opacity: `${1-(imageSlider/100)}`}}
            >
              Building strength, confidence, and healthier lifestyles with personalized training.</p>
          </div>

          {/* Images */}
          <div className="flex justify-center items-center z-50">
            <Image
              src="/images/coder.png"
              alt="Programmer Profile Picture"
              className="absolute z-[100] rounded-full"
              width= "400"
              height= "400"
              style={{ clipPath: `inset( 0 ${100 - imageSlider}% 0 0 )`, transform: `translateX(${position/4}%)`, transition: 'transform 0.2s ease', }}
            />

          <Image
            src="/images/personal-trainer.png"
            alt="Personal Trainer Profile Picture"
            className="absolute z-10 rounded-full"
            width= "400"
            height= "400"
            style={{ clipPath: `inset( 0 0 0 ${imageSlider}% )`,transform: `translateX(${position/4}%)`, transition: 'transform 0.2s ease', }}
          />
        </div>

          {/* Hover Text */}
          <div className="ml-16 max-w-[25%]">
            <h1
              className="top-0 text-accent dark:text-accent text-center text-xl mx-auto max-w-[50%] hover:bg-[#FCA311] font-bold cursor-pointer dark:hover:bg-[#FCA311] border-2 p-2 rounded-full border-accent bg-blue-100"
              style={{ opacity: `${imageSlider/100}`}}
              onClick={() => toggleRole('developer')}
            >
              Web Developer
            </h1>
            <p
              className="text-accent dark:text-gray-300 pt-2 pl-[20%] pr-[20%] text-center text-base font-semibold text-wrap"
              style={{ opacity: `${imageSlider/100}`}}
            >
              Turning creative ideas into functional, efficient, and powerful code.
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden"><SmallScreenHeader /></div>
    </>
    )
}
