import React from "react";
import { useGlobalState } from "@/context";

const Mode: React.FC = () => {
  const { role, toggleRole } = useGlobalState();

  return (
        <div className="fixed flex p-2 z-[100] space-x-1 opacity-85 rounded-full border-2 bg-blue-100 dark:bg-gray-900 border-accent-light dark:border-gray-900">

          <h1 className="text-lg text-center text-accent dark:text-[#F2E9E4]">Choose Mode:&nbsp;</h1>
          <button
            onClick={() => toggleRole('trainer')}
            className={role ==="trainer" ? "text-hover-light" : "text-accent dark:text-[#F2E9E4] "}>
            Trainer
          </button>
          <span>/</span>
          <button
          onClick={() => toggleRole('developer')}
          className={role ==="developer" ? "text-hover-light " : "text-accent dark:text-[#F2E9E4]"}>Developer</button>
        </div>
  );
};

export default Mode;
