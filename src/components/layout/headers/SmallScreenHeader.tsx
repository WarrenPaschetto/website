'use client';

import { useGlobalState } from '@/context';
import Image from 'next/image';
import { useState } from 'react';

export default function SmallScreenHeader() {
  const { role, toggleRole } = useGlobalState();
  const [imageSlider, setImageSlider] = useState(100);

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 h-[400px] justify-start items-center overflow-hidden"
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
            transition: 'clip-path 700ms ease-in-out',
            willChange: 'clip-path',
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
            transition: 'clip-path 700ms ease-in-out',
            willChange: 'clip-path',
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
          onClick={() => {
            toggleRole('developer')
            setImageSlider(100);
          }}
        >
          Web Developer
        </h1>
        <h1
          className={`text-center text-lg font-bold cursor-pointer border-2 p-2 rounded-full border-accent dark:border-blue-100
              ${role === 'trainer'
              ? 'bg-[#FCA311] text-white dark:text-white'
              : 'bg-blue-100 text-accent dark:text-accent hover:bg-[#FCA311] dark:hover:bg-[#FCA311] dark:bg-secondary-dark'}
              `}
          onClick={() => {
            toggleRole('trainer')
            setImageSlider(0);
          }}
        >
          Personal Trainer
        </h1>
      </div>
    </div>
  );
}