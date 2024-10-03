"use client";

import { useGlobalState } from "@/context";

export default function GoogleMap() {
    const { role } = useGlobalState();

    return(
        <>
        {role === "trainer"?
          <div className="w-full h-full flex flex-col justify-center items-center mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
            <h1 className=" text-3xl font-bold mb-6 text-center text-accent">Warren Paschetto Fitness Location<br/></h1>
            <h3 className=" text-xl font-bold mb-6 text-center text-accent">Currently training clients inside Pelitera&apos;s Performance Center<br/></h3>
            <iframe
            title="Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16873.563102321623!2d-78.78343282920775!3d43.07207578259568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d371625207df11%3A0x74afc23011ac1468!2sWarren%20Paschetto%20Fitness!5e1!3m2!1sen!2sus!4v1726505412167!5m2!1sen!2sus"
            width="500"
            height="500"
            style={{ border: 1 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mx-auto w-[80%] h-[80%] md:w-[500px] md:h-[500px]"
          ></iframe>
          </div>
          :
          <></>
        }
    </>
    )
}