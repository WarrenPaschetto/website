"use client";

import { ChevronsUpDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible"
import { useGlobalState } from "@/context";

export default function About() {
  const { role } = useGlobalState();

  return (
    <div className="flex justify-center w-full bg-gray-100 rounded-lg shadow-lg dark:shadow-gray-900 dark:bg-gray-900 my-8 mx-auto">
      <div className="container text-center mx-auto my-10 max-w-[60%]">
        <Collapsible>
          <CollapsibleTrigger>
            <h1 className="text-3xl font-bold text-accent dark:text-text-primary-dark mb-8">{role === "trainer"? <div className="flex flex-row items-center">About Me as a Trainer&nbsp;&nbsp;<ChevronsUpDown className="stroke-accent dark:stroke-text-primary-dark"/> </div>: <div className="flex flex-row items-center">About Me as a Developer&nbsp;&nbsp;<ChevronsUpDown className="stroke-accent dark:stroke-text-primary-dark"/></div>}</h1>
          </CollapsibleTrigger>
        <CollapsibleContent>
          {role === "trainer"?
            <>
              <p className="text-xl text-left text-accent dark:text-text-primary-dark mb-8">{`Hello and welcome to my website!  First, a little background information on me.  I am a former Army combat medic with a B.S. in Biology from the University of Albany in NY and have an M.S. in Health and Human Performance with a specialization in strength and conditioning from Canisius University in Buffalo, NY.  I am currently a registered professional member of the National Strength and Conditioning Association (NSCA), a Certified Strength and Conditioning Specialist with Distinction (CSCS,*D), and a NSCA Certified Personal Trainer with Distinction (NSCA-CPT,*D).`}</p>
              <br/>
              <p className="text-xl text-left text-accent dark:text-text-primary-dark mb-8">I enjoy combining my medical knowledge with proper program design and exercise technique to help individuals with weight loss, increased strength, building muscle, improving sport performance, injury prevention, injury rehabilitation, and just moving better. I do not create a one-size-fits-all program for my clients, but rather a custom-built program that is appropriate for your age, lifestyle, and fitness level. My philosophy is that your goals can be achieved with consistency and patience. I do not promote extreme programs or diet plans that claim you will lose 10 pounds of fat in a week or some other ridiculous promise. Not all my clients end up reaching their goals, but the ones that do are the ones that are consistent week after week with their workouts, sleep, and nutrition. It does not have to be a suffering process, but a gradual lifestyle change that is enjoyable.</p>
              <br/>
              <p className="text-xl text-left text-accent dark:text-text-primary-dark mb-8">If this sounds like something you are looking for, then please feel free to email me at wdpaschetto@gmail.com and we can schedule a free consultation to discuss your goals and for me to answer any questions you might have.</p>
            </>
          :
            <>
              <p className="text-xl text-left text-accent dark:text-text-primary-dark mb-8">Hi, I&apos;m Warren Paschetto, a web developer with a passion for solving problems and creating intuitive, user-friendly applications. My journey began as a kid, coding games on my TRS-80, and grew into a lifelong love for programming. After studying Computer Science at the University of Albany, I expanded my skill set by working with React.js, HTML, and other modern web technologies.</p>
              <br/>
              <p className="text-xl text-left text-accent dark:text-text-primary-dark mb-8">I specialize in developing responsive, efficient websites, collaborating with cross-functional teams, and crafting custom solutions that enhance user experiences. Whether it&apos;s building engaging front-end designs or optimizing back-end performance, I bring creativity and technical expertise to every project.</p>
              <br/>
              <p className="text-xl text-left text-accent dark:text-text-primary-dark mb-8">{`Let’s build something amazing together. Contact me for a consultation!`}</p>
            </>
          }
        </CollapsibleContent>
        </Collapsible>
      </div>
      </div>
    )
};
