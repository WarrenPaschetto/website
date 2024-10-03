'use client';

import { useGlobalState } from '@/context';
import Image from 'next/image';

export default function SmallScreenHeader() {
  const { role, toggleRole } = useGlobalState();

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900">

      <div className="p-5">
        <Image
          src="/images/MobilePic.png"
          alt="Programmer/Coder Profile Picture"
          className="mx-auto rounded-full"
          width= "200"
          height= "200"
        />

      <div className="flex flex-row justify-center mt-3">
        <h1
          className={role ==="developer" ? "text-hover-light text-center text-xl font-bold cursor-pointer border-2 p-2 rounded-full border-accent bg-blue-100 dark:bg-secondary-dark dark:border-blue-100"
            :
            "text-accent dark:text-[#F2E9E4] text-center text-xl hover:text-[#FCA311] dark:hover:text-[#FCA311] font-bold cursor-pointer border-2 p-2 rounded-full border-accent bg-blue-100 dark:bg-secondary-dark dark:border-blue-100"}
          onClick={() => toggleRole('developer')}
        >
         Web Developer
        </h1>
        <h1 className="text-neutral-900 dark:text-white text-center text-xl font-bold">&nbsp;/&nbsp;</h1>
        <h1
           className={role ==="trainer" ? "text-hover-light text-center text-xl font-bold cursor-pointer border-2 p-2 rounded-full border-accent bg-blue-100 dark:bg-secondary-dark dark:border-blue-100"
            :
            "text-accent dark:text-[#F2E9E4] text-center text-xl hover:text-[#FCA311] dark:hover:text-[#FCA311] font-bold cursor-pointer border-2 p-2 rounded-full border-accent bg-blue-100 dark:bg-secondary-dark dark:border-blue-100"}
          onClick={() => toggleRole('trainer')}
        >
           Personal Trainer
        </h1>
        </div>
        </div>
    </div>
  );
}
