'use client'

import About from "@/components/layout/About";
import ContactForm from "@/components/layout/Contact";
import Experience from "@/components/layout/experienceSection/Experience";
import GoogleMap from "@/components/layout/GoogleMap";
import LargeScreenHeader from "@/components/layout/headers/LargeScreenHeader";
import Navbar from "@/components/nav/Navbar";
import Pricing from "@/components/layout/pricing/Pricing";
import Projects from "@/components/layout/projectsSection/Projects";
import Recipes from "@/components/layout/recipeSection/Recipes";
import Testamonials from "@/components/layout/testamonialSection/Testamonials";
import { useGlobalState } from "@/context";
import { useEffect, useState } from "react";



export default function Home() {
  const [isMounted, setIsMounted] = useState(false);  // Hydration state
  const [isMobile, setIsMobile] = useState(false);  // Screen size state
  const { role } = useGlobalState();

  useEffect(() => {

    // Set mounted to true once client-side
    setIsMounted(true);

    // Check if window is defined (to prevent SSR errors)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      // Initial check
      handleResize();

      // Listen for resize events
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isMobile]);

   // Return null if not mounted (during SSR), ensures component only renders on the client
   if (!isMounted) return null;

   //if (!isMobile) return null;

  return (
    <main className="relative bg-white dark:bg-gray-900">
      < div className="h-full  flex flex-col w-full">
        <div className="flex flex-col">
          <Navbar />
        </div>

        <div className="mb-16">
        <LargeScreenHeader />
        </div>

        <section
          id="about"
          className="flex justify-center w-[90%] bg-white dark:bg-gray-900 mx-auto relative mb-16 pt-[100px] -mt-[70px]"
        >
          <About />
        </section>

        <section
          id="experience"
          className="flex justify-center w-[90%] bg-white dark:bg-gray-900 mb-16 mx-auto relative pt-[100px] -mt-[70px]"
        >
          <Experience />
        </section>


        {role === "developer" && (
          <section
            id="projects"
            className="flex justify-center w-[90%] bg-white dark:bg-gray-900 mb-16 mx-auto relative pt-[100px] -mt-[70px]"
          >
          <Projects />
          </section>
        )}

        {role === "trainer" && (
        <section
          id="recipes"
          className="flex justify-center w-[90%] bg-white dark:bg-gray-900 mb-16 mx-auto relative pt-[100px] -mt-[70px]"
        >
          <Recipes />
        </section>
        )}

        {role === "trainer" && (
          <section
            id="testamonials"
            className="flex justify-center w-[90%] bg-white dark:bg-gray-900 mb-16 mx-auto relative pt-[100px] -mt-[70px]"
          >
          <Testamonials />
          </section>
        )}

        {role === "trainer" && (
          <section id="pricing">
          <div className="flex justify-center w-[90%] bg-white dark:bg-gray-900 mb-16 mx-auto relative pt-[100px] -mt-[70px]">
            <Pricing />
          </div>
          </section>
          )}

        <section
          id="contact"
          className="flex flex-col md:flex-row justify-center w-[90%] bg-white dark:bg-gray-900 my-8 mx-auto space-x-14 relative pt-[100px] -mt-[100px]"
        >
          <ContactForm /><GoogleMap />
        </section>
        <div className="h-96"></div>
      </div>
    </main>
  );
}
