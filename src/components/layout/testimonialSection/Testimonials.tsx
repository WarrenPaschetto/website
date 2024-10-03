"use client";

import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import Slider from "./Slider";
import Carousel from "../../ui/Carousel";

export default function Testimonials() {

  return (
    <div className="flex justify-center w-full bg-gray-100 rounded-lg shadow-lg dark:shadow-gray-900 dark:bg-gray-900 my-8 mx-auto">
      <div className="container text-center my-10 max-w-full">
        <Collapsible>
          <CollapsibleTrigger>
            <h1 className="text-3xl font-bold text-accent dark:text-text-primary-dark mb-8"><div className="flex flex-row items-center">Testimonials&nbsp;&nbsp;<ChevronsUpDown className="stroke-accent dark:stroke-text-primary-dark"/></div></h1>
          </CollapsibleTrigger>
        <CollapsibleContent>
        <Carousel />
        <div className="flex flex-row justify-center md:p-5">
          <Slider/>
        </div>
        </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
    )
};