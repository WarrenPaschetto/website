"use client"

import { Photos } from "@/constants";
import { useState } from "react";
import { SquareArrowLeft, SquareArrowRight } from "lucide-react";
import Image from "next/image";

const slides = Photos;

const Carousel: React.FC = () => {
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
    <div className="flex flex-col w-full justify-center">
      <div className="flex flex-row justify-center">
        <h1 className="text-3xl font-bold text-accent dark:text-text-primary-dark text-center">Are you ready to make a change?</h1>
      </div>
      <div className="relative flex flex-row justify-center rounded-lg ">

        <button
          onClick={prevSlide}
          className=" hidden md:flex md:items-center md:justify-center md:w-1/5"
        >
          <SquareArrowLeft className="h-[5rem] w-[5rem] stroke-accent dark:stroke-text-primary-dark hover:stroke-hover-light dark:hover:stroke-hover-dark" />
        </button>

        <div className=" m-8 rounded-lg w-full md:w-1/5">
          <Image
            src={slides[currentSlide]}
            alt="Transformation Pic"
            width="500"
            height="500"
            className="shadow-lg shadow-gray-500 border-text-primary-dark border-8 mx-auto"
          />
        </div>

        <button
          onClick={nextSlide}
          className="hidden md:flex md:items-center md:justify-center md:w-1/5"
        >
          <SquareArrowRight className="h-[5rem] w-[5rem] stroke-accent dark:stroke-text-primary-dark hover:stroke-hover-light dark:hover:stroke-hover-dark" />
        </button>
      </div>

       {/* Dots Navigation */}

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
  );
};

export default Carousel;




