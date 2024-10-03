"use client";

import { recipeList } from "@/constants";
import { useState } from "react";
import { ChevronsUpDown, SquareArrowLeft, SquareArrowRight } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/Collapsible"
import RecipeCard from "./RecipeCard";
import Image from "next/image";

const recipesArray =recipeList;

const Recipes: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === recipesArray.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? recipesArray.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex justify-center w-full bg-gray-100 rounded-lg shadow-lg dark:shadow-gray-900 dark:bg-gray-900 mt-8 mb-16 mx-auto">
    <div className="container text-center my-10 max-w-full">
      <Collapsible>
        <CollapsibleTrigger>
          <h1 className="text-3xl font-bold text-accent dark:text-text-primary-dark mb-8"><div className="flex flex-row items-center">Recipes&nbsp;&nbsp;<ChevronsUpDown className="stroke-accent dark:stroke-text-primary-dark"/></div></h1>
        </CollapsibleTrigger>
        <CollapsibleContent>
      <div className="flex flex-col justify-center">
        <div className="w-full flex flex-row justify-center items-center">
          <a href="/files/RecipeBook.pdf" download>
            <h3 className="text-xl font-bold text-accent dark:text-text-primary-dark mb-8 hover:text-hover-light dark:hover:text-hover-light">Click&nbsp;<a className="text-hover-light dark:text-hover-dark">here</a>&nbsp;to download my free recipe book</h3>
          </a>
          <a href="/files/RecipeBook.pdf" download>
            <Image
              src="/assets/recipeImages/RecipeBook.png"
              alt="Recipe book image"
              width="100"
              height="100"
              className="mb-8"
            />
          </a>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center text-xl font-bold text-accent dark:text-text-primary-dark">Click on backside title to view recipe and complete nutritional information.</p>
          <p className="text-center text-xl font-bold text-hover-light dark:text-hover-dark md:hidden">Tap on the card to view the backside.</p>
        </div>
      <div className="relative flex flex-row justify-center rounded-lg ">

        <button
          onClick={prevSlide}
          className="md:flex md:justify-center md:items-center w-1/5 hidden"
        >
          <SquareArrowLeft className="h-[5rem] w-[5rem] stroke-accent dark:stroke-text-primary-dark hover:stroke-hover-light dark:hover:stroke-hover-dark" />
        </button>

        <div className="sm:w-full flex justify-center md:w-3/5 p-2">

          <div className="flex justify-center sm:p-5 sm:max-w-[50%] m-5 md:p-0 md:max-w-[45%]">
            <RecipeCard
              key={currentSlide}
              image={recipesArray[currentSlide].image}
              title={recipesArray[currentSlide].title}
              description={recipesArray[currentSlide].description}
              macros={recipesArray[currentSlide].macros}
              link={recipesArray[currentSlide].link}
            />
          </div>

          <div className="md:flex md:justify-center hidden md:m-5 md:w-[45%]">
            <RecipeCard
              key={(currentSlide === recipesArray.length - 1 ? 0 : currentSlide + 1)}
              image={recipesArray[(currentSlide === recipesArray.length - 1 ? 0 : currentSlide + 1)].image}
              title={recipesArray[(currentSlide === recipesArray.length - 1 ? 0 : currentSlide + 1)].title}
              description={recipesArray[(currentSlide === recipesArray.length - 1 ? 0 : currentSlide + 1)].description}
              macros={recipesArray[(currentSlide === recipesArray.length - 1 ? 0 : currentSlide + 1)].macros}
              link={recipesArray[(currentSlide === recipesArray.length - 1 ? 0 : currentSlide + 1)].link}
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
          {recipesArray.map((_, index) => (
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

export default Recipes;
