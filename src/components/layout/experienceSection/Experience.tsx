"use client";

import { useGlobalState } from "@/context";
import VerticalTimeline from "./VerticalTimeLine";
import { ChevronsUpDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible"
import { developerEvents, trainerEvents } from "@/constants";

export default function Experience() {
  const { role } = useGlobalState();

  return (
    <div className="flex justify-center w-full bg-gray-100 rounded-lg shadow-lg dark:shadow-gray-900 dark:bg-gray-900 my-8 mx-auto">
    <div className="container text-center mx-auto my-10 max-w-full md:max-w-[60%]">
      <Collapsible>
          <CollapsibleTrigger>
            <h1 className="text-3xl font-bold text-accent dark:text-text-primary-dark mb-8">{role === "trainer"? <div className="flex flex-row items-center">Trainer Experience&nbsp;&nbsp;<ChevronsUpDown className="stroke-accent dark:stroke-text-primary-dark"/> </div>: <div className="flex flex-row items-center">Developer Experience&nbsp;&nbsp;<ChevronsUpDown className="stroke-accent dark:stroke-text-primary-dark"/></div>}</h1>
          </CollapsibleTrigger>
          <CollapsibleContent>
          <VerticalTimeline events={role === "trainer"? trainerEvents : developerEvents} />
      {role === "trainer"?
        <ul className="text-xl text-left text-accent dark:text-text-primary-dark">
          <h1 className="text-2xl font-bold pt-8">Certifications:<br/><br/></h1>
          <li>09/12/2013&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSCS,*D</li>
          <li>03/14/2013&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NSCA-CPT,*D</li>
        </ul>
        :
        <ul className="text-xl text-left text-accent dark:text-text-primary-dark">
          <h1 className="text-2xl font-bold text-accent dark:text-text-primary-dark pt-8">Certifications:<br/><br/></h1>
          <li>08/11/2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBM DevOps and Software Engineering</li>
          <li>07/16/2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Google Data Analytics</li>
          <li>08/09/2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vetsin Tech Intro to Web Development</li>
        </ul>}
          </CollapsibleContent>
        </Collapsible>
    </div>
    </div>
  );
}
