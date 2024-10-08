"use client";

import { ProjectExamples } from "@/constants";
import { useState } from "react";
import { ChevronsUpDown, SquareArrowLeft, SquareArrowRight } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/Collapsible"
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const slides = ProjectExamples;

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex justify-center w-full bg-gray-100 rounded-lg shadow-lg dark:shadow-gray-900 dark:bg-gray-900 mt-8 mb-16 mx-auto">
    <div className="container text-center my-10 max-w-full">
      <Collapsible>
        <CollapsibleTrigger>
          <h1 className="text-3xl font-bold text-accent dark:text-text-primary-dark mb-8"><div className="flex flex-row items-center">Projects&nbsp;&nbsp;<ChevronsUpDown className="stroke-accent dark:stroke-text-primary-dark"/></div></h1>
        </CollapsibleTrigger>
        <CollapsibleContent>
      <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center">
          <p className="text-center text-lg font-bold text-accent dark:text-text-primary-dark">Click on backside title to view demo and</p>
          <p className="flex justify-center items-center text-center text-lg font-bold text-accent dark:text-text-primary-dark">click&nbsp;<span><Image src="/assets/tech/github.png" alt="github icon" width="20" height="20" className="rounded-full dark:bg-white"/></span>&nbsp;to view code.</p>
          <p className="text-center text-xl font-bold text-hover-light dark:text-hover-dark md:hidden">Tap on the card to view the backside.</p>
        </div>
      <div className="relative flex flex-row justify-center rounded-lg ">

        <button
          onClick={prevSlide}
          className="md:flex md:justify-center md:items-center w-1/5 hidden"
        >
          <SquareArrowLeft className="h-[5rem] w-[5rem] stroke-accent dark:stroke-text-primary-dark hover:stroke-hover-light dark:hover:stroke-hover-dark" />
        </button>

        <div className="sm:w-full flex justify-center lg:w-3/5 p-2">

          <div className="flex justify-center sm:p-5 sm:max-w-[50%] m-5 md:p-0 md:max-w-[45%]">
            <ProjectCard
              key={currentSlide}
              projectLink={slides[currentSlide].link}
              github={slides[currentSlide].github}
              image={slides[currentSlide].source}
              title={slides[currentSlide].name}
              description={slides[currentSlide].description}
              tech={slides[currentSlide].techNames}
              icons={slides[currentSlide].tech}
            />
          </div>

          <div className="lg:flex lg:justify-center hidden lg:m-5 lg:w-[45%]">
            <ProjectCard
              key={(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
              projectLink={slides[(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)].link}
              github={slides[(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)].github}
              image={slides[(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)].source}
              title={slides[(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)].name}
              description={slides[(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)].description}
              tech={slides[(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)].techNames}
              icons={slides[(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)].tech}
            />
          </div>

        </div>

        <button
          onClick={nextSlide}
          className="md:flex md:justify-center md:items-center w-1/5 hidden"
        >
          <SquareArrowRight className="h-[5rem] w-[5rem] stroke-accent dark:stroke-text-primary-dark hover:stroke-hover-light dark:hover:stroke-hover-dark" />
        </button>
      </div>
      <div className="flex justify-center mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 mx-2 rounded-full ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/*Slider buttons for small screens only*/}
        <div className="flex flex-row justify-center mt-3 md:hidden">

          {/* Previous Button */}
          <div className="md:hidden">
            <button onClick={prevSlide}>
              <SquareArrowLeft className="h-[5rem] w-[5rem] stroke-accent dark:stroke-text-primary-dark hover:stroke-hover-light dark:hover:stroke-hover-dark" />
            </button>
          </div>

        {/* Next Button */}
        <div className="md:hidden">
          <button onClick={nextSlide}>
            <SquareArrowRight className="h-[5rem] w-[5rem] stroke-accent dark:stroke-text-primary-dark hover:stroke-hover-light dark:hover:stroke-hover-dark" />
          </button>
        </div>
    </div>
    </div>
    </CollapsibleContent>
    </Collapsible>
    </div>
    </div>
  );
};

export default Projects;




