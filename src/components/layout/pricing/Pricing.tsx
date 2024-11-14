"use client";

import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import PriceCard from "./PriceCard";
import { TrainingPackages } from "@/constants";

export default function Pricing() {

  return (
    <div className="flex justify-center w-full bg-gray-100 rounded-lg shadow-lg dark:shadow-gray-900 dark:bg-gray-900 mt-8 mb-16 mx-auto">
      <div className="container text-center my-10 max-w-full">
        <Collapsible>
          <CollapsibleTrigger>
            <h1 className="text-3xl font-bold text-accent dark:text-text-primary-dark mb-8"><div className="flex flex-row items-center hover:text-[#FCA311]">Pricing&nbsp;&nbsp;<ChevronsUpDown className="stroke-accent dark:stroke-text-primary-dark hover:stroke-[#FCA311] dark:hover:stroke-[#FCA311] w-10 h-10"/></div></h1>
          </CollapsibleTrigger>
        <CollapsibleContent>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center w-full mb-20">
              <h1 className="text-xl mx-auto leading-relaxed text-accent dark:text-text-primary-dark">These are the prices for the various personal training packages that I offer.</h1>
            </div>
            <div className="w-full mx-auto overflow-auto">
              <table className="w-[80%] border-2 border-accent dark:border-[#111827] mx-auto table-auto  text-left whitespace-no-wrap">
                <thead className=" border-accent border-b-2">
                  <tr>
                    <th className="px-4 py-3 w-[15%] text-accent text-lg bg-blue-100 rounded-tl rounded-bl">Package</th>
                    <th className="px-4 py-3 text-center w-[15%] text-accent text-lg bg-blue-100 rounded-tl rounded-bl">Session Duration</th>
                    <th className="px-4 py-3 text-center w-[15%] text-accent text-lg bg-blue-100 rounded-tl rounded-bl">Number of Sessions</th>
                    <th className="px-4 py-3 text-center w-[15%] text-accent text-lg bg-blue-100">Price Per Session</th>
                    <th className="px-4 py-3 text-center w-[15%] text-accent text-lg bg-blue-100">Total Price</th>
                  </tr>
               </thead>
               <PriceCard events={TrainingPackages}/>
              </table>
            </div>
          </div>
        </section>
        </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
    )
};