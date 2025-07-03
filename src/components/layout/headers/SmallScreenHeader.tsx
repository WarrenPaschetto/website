'use client';

import { useGlobalState } from '@/context';
import Image from 'next/image';
import { useState } from 'react';

export default function SmallScreenHeader() {
  const { role, toggleRole } = useGlobalState();
  const [imageSlider, setImageSlider] = useState(50);
  const [position, setPosition] = useState(0);

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchX = e.touches[0].clientX;
    const xPercent = (touchX / window.innerWidth) * 100;
    const xMotion = xPercent - 50;
    setImageSlider(xPercent);
    setPosition(xMotion);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 h-[400px] justify-start items-center overflow-hidden"
      onTouchMove={handleTouchMove}
    >
      {/* Image container */}
      <div className="relative w-[220px] h-[220px]">
        {/* Developer Image */}
        <Image
          src="/images/coder.png"
          alt="Web Developer"
          className="absolute z-10 rounded-full"
          width={220}
          height={220}
          style={{
            clipPath: `inset(0 ${100 - imageSlider}% 0 0)`,
            transform: `translateX(${position / 4}%)`,
            transition: 'transform 0.2s ease',
          }}
        />
        {/* Trainer Image */}
        <Image
          src="/images/personal-trainer.png"
          alt="Personal Trainer"
          className="absolute z-[5] rounded-full"
          width={220}
          height={220}
          style={{
            clipPath: `inset(0 0 0 ${imageSlider}%)`,
            transform: `translateX(${position / 4}%)`,
            transition: 'transform 0.2s ease',
          }}
        />
      </div>

      {/* Role Toggle */}
      <div className="flex flex-row justify-center mt-20 space-x-3 z-20">
        <h1
          className={`text-center text-lg font-bold border-2 p-2 rounded-full border-accent dark:border-blue-100
              ${role === 'developer'
              ? 'bg-[#FCA311] text-white dark:text-white'
              : 'bg-blue-100 text-accent dark:text-accent hover:bg-[#FCA311] dark:hover:bg-[#FCA311] dark:bg-secondary-dark'}
              `}
          onClick={() => toggleRole('developer')}
          style={{ opacity: `${imageSlider / 100}` }}
        >
          Web Developer
        </h1>
        <h1
          className={`text-center text-lg font-bold cursor-pointer border-2 p-2 rounded-full border-accent dark:border-blue-100
              ${role === 'trainer'
              ? 'bg-[#FCA311] text-white dark:text-white'
              : 'bg-blue-100 text-accent dark:text-accent hover:bg-[#FCA311] dark:hover:bg-[#FCA311] dark:bg-secondary-dark'}
              `}
          onClick={() => toggleRole('trainer')}
          style={{ opacity: `${1 - imageSlider / 100}` }}
        >
          Personal Trainer
        </h1>
      </div>
    </div>
  );
}