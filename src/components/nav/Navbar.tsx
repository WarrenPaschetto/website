'use client';

import { Button } from "../ui/Button";
import { ModeToggle } from "../ui/ModeToggle";
import React, { useState } from "react";
import { useGlobalState } from "@/context";
import Mode from "../ui/Mode";
import Link from 'next/link';
import { Menu } from "lucide-react";


const Navbar: React.FC = () => {
  const { role, toggleRole } = useGlobalState();

  const handleClick = () => {
    window.location.href = 'https://wpfitness.ptminder.com/';  // Link to PTminder for client bookings
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);  // Toggle state between true/false
    };

  return (
    <nav className="fixed z-[100] sm:opacity-95 md:opacity-85 flex justify-between items-center w-full text-xl font-bold md:p-3 h-15 bg-background-light text-accent dark:bg-secondary-dark dark:text-text-primary-dark border-b-accent dark:border-b-gray-900 shadow-accent dark:shadow-gray-900 shadow-md">

      <div className="md:hidden w-full flex flex-row justify-between bg-[#dee2ef] dark:bg-[#2A2A2E] dark:text-[#F2E9E4]">
        <Menu className="h-7 w-7 hover:stroke-[#FCA311] dark:stroke-[#F4F4F9] dark:hover:stroke-[#FCA311] m-2" onClick={toggleMobileMenu}/>

        {/* Conditionally render mobile menu based on state */}
        {isMobileMenuOpen && (
        <div className="flex flex-col m-3 md:hidden ">
            {role === "trainer" ? (
              <>
              <ul className="flex flex-col space-y-4">
                <li className="hover:text-[#FCA311]"><Link href="/" onClick={toggleMobileMenu}>Home</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#about" onClick={toggleMobileMenu}>About</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#experience" onClick={toggleMobileMenu}>Work Experience</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#recipes" onClick={toggleMobileMenu}>Recipes</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#testamonials" onClick={toggleMobileMenu}>Testamonials</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#pricing" onClick={toggleMobileMenu}>Pricing</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#contact" onClick={toggleMobileMenu}>Contact</Link></li>
                <div className="p-2 z-[100] flex flex-row opacity-100 rounded-full border-2 bg-blue-100 dark:bg-gray-900 border-accent-light dark:border-gray-900">
                  <h1 className="text-lg text-center text-accent dark:text-[#F2E9E4]">Choose:&nbsp;</h1>
                  <button
                    onClick={() => toggleRole('trainer')}
                    className={role ==="trainer" ? "text-hover-light" : "text-accent dark:text-[#F2E9E4] "}>
                      Trainer
                  </button>
                  <span>/</span>
                  <button
                    onClick={() => toggleRole('developer')}
                    className={role !=="trainer" ? "text-hover-light " : "text-accent dark:text-[#F2E9E4]"}>
                      Developer
                  </button>
                </div>
              </ul>
            </>
            ) : (
              <>
              <ul className="flex flex-col space-y-4">
                <li className="hover:text-[#FCA311]"><Link href="/" onClick={toggleMobileMenu}>Home</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#about" onClick={toggleMobileMenu}>About</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#experience" onClick={toggleMobileMenu}>Work Experience</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#projects" onClick={toggleMobileMenu}>Projects</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#contact" onClick={toggleMobileMenu}>Contact</Link></li>
                <div className="p-2 z-[100] flex flex-row opacity-100 rounded-full border-2 bg-blue-100 dark:bg-gray-900 border-accent-light dark:border-gray-900">
                  <h1 className="text-lg text-center text-accent dark:text-[#F2E9E4]">Choose:&nbsp;</h1>
                  <button
                    onClick={() => toggleRole('trainer')}
                    className={role !=="developer" ? "text-hover-light" : "text-accent dark:text-[#F2E9E4] "}>
                      Trainer
                  </button>
                  <span>/</span>
                  <button
                    onClick={() => toggleRole('developer')}
                    className={role ==="developer" ? "text-hover-light " : "text-accent dark:text-[#F2E9E4]"}>
                      Developer
                  </button>
                </div>
              </ul>
              </>
            )}
             <button
                    onClick={toggleMobileMenu}
                    className="absolute right-5 bottom-5 text-accent dark:text-[#F2E9E4] hover:text-[#FCA311] dark:hover:text-[#FCA311]">
                      X close
                </button>
          </div>
         )}

        <div className="flex flex-row">
          <Button
            variant="outline"
            size="lg"
            className=" dark:bg-gray-900 bg-blue-100 text-accent dark:text-text-primary-dark hover:bg-[#FCA311] hover:text-black dark:hover:bg-[#FCA311] dark:hover:text-black border-2 rounded-full"
            onClick={handleClick}
          >Client Login</Button>
          <div className="m-1">{ModeToggle()}</div>
        </div>
      </div>

      <div className="Flex flex-col w-full hidden md:block">
      <div className="flex flex-row w-full justify-center items-center p-1 mb-2"><Mode/></div>
        <div className="flex flex-row justify-between items-center w-full pt-3">
          <div className="flex justify-start m-3">
              {role === "trainer" ?
              <ul className="flex justify-between space-x-16">
                <li className="hover:text-[#FCA311]"><Link href="/">Home</Link></li>
                <li className="hover:text-[#FCA311] "><Link href="/#about">About</Link></li>
                <li className="hover:text-[#FCA311] "><Link href="/#experience">Work Experience</Link></li>
                <li className="hover:text-[#FCA311] "><Link href="/#recipes">Recipes</Link></li>
                <li className="hover:text-[#FCA311] "><Link href="/#testamonials">Testamonials</Link></li>
                <li className="hover:text-[#FCA311] "><Link href="/#pricing">Pricing</Link></li>
                <li className="hover:text-[#FCA311] "><Link href="/#contact">Contact</Link></li>
              </ul>
              :
              <ul className="flex justify-between space-x-16">
                <li className="hover:text-[#FCA311]"><Link href="/">Home</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#about">About</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#experience">Work Experience</Link></li>
                <li className="hover:text-[#FCA311] "><Link href="/#projects">Projects</Link></li>
                <li className="hover:text-[#FCA311]"><Link href="/#contact">Contact</Link></li>
              </ul>
              }
          </div>
          <div className="flex justify-end">
            {role === "trainer"?
            <Button
              variant="outline"
              size="lg"
              className="ml-8 mr-8 dark:bg-gray-900 bg-blue-100 text-accent dark:text-text-primary-dark hover:bg-[#FCA311] hover:text-black dark:hover:bg-[#FCA311] dark:hover:text-black border-2 rounded-full"
              onClick={handleClick}
              >Client Login</Button>
              : <></>}
            <div className="m-1">{ModeToggle()}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
