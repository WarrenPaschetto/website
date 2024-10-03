"use client";

import { Reviews } from "@/constants";
import { useState } from "react";
import { SquareArrowLeft, SquareArrowRight } from "lucide-react";

const slides = Reviews;

const Slider: React.FC = () => {
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
    <div className="relative w-full md:w-[90%] mx-auto p-1 md:p-10 ">

      {/* Previous Button */}

      <div className="hidden md:block md:w-1/7">
        <button
          onClick={prevSlide}
          className="absolute top-1/3 left-0"
        >
          <SquareArrowLeft className="h-[5rem] w-[5rem] stroke-accent dark:stroke-text-primary-dark hover:stroke-hover-light dark:hover:stroke-hover-dark" />
        </button>
      </div>

      <div className="min-h-[800px] w-5/7">

        {/* Slides */}

        <div className="flex flex-row shadow-background-dark bg-background-dark shadow-md md:p-6 rounded-xl md:m-[5rem]">
          <div className="relative w-full md:w-[80%] p-1 md:p-4 bg-blue-500 rounded-3xl ml-auto md:before:content-[''] md:before:absolute md:before:border-t-transparent md:before:border-l-blue-500 md:before:border-r-transparent md:before:border-b-transparent md:before:border-[16px] md:before:right-0 md:before:top-1/2 md:before:translate-x-full md:before:-translate-y-1/2">
            <h4 className="text-xl font-bold text-text-primary-dark dark:text-text-primary-dark">&quot;{slides[currentSlide].quote}&quot;</h4>
          </div>
          <div className=" hidden md:relative md:flex md:flex-col md:justify-center w-[20%] text-xl">
            <h4 className="font-bold p-4 text-center text-text-primary-dark dark:text-text-primary-dark">{slides[currentSlide].name}</h4>
          </div>
        </div>
        <h4 className="md:hidden text-2xl font-bold p-4 text-center text-accent dark:text-text-primary-dark">-{slides[currentSlide].name}</h4>

       

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

      {/* Next Button */}

      <div className="hidden md:block md:w-1/7">
        <button
          onClick={nextSlide}
          className="absolute top-1/3 right-0"
        >
          <SquareArrowRight className="h-[5rem] w-[5rem] stroke-accent dark:stroke-text-primary-dark hover:stroke-hover-light dark:hover:stroke-hover-dark" />
        </button>
      </div>

    </div>
  );
};

export default Slider;
