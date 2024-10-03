"use client"

import Image from "next/image";
import Link from "next/link";


interface RecipeCardProps {
    image: string;
    title: string;
    description: string;
    macros: string;
    link: string;
  }

  const RecipeCard: React.FC<RecipeCardProps> = ({ image, title, description, macros, link }) => {

    return (
      <div className="group [perspective:1000px] w-[350px] h-[500px]">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-text-primary-dark shadow-xl shadow-gray-500">
          {/* Front Side */}
          <div className="absolute w-full h-full [backface-visibility:hidden] p-8">
          <h1 className="text-accent font-bold text-center text-2xl m-5">{title}<br/></h1>
            <Image
              src={image}
              alt="Recipe Screenshot"
              width="300"
              height="300"
              className="top-1/2 mx-auto rounded-xl"
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-gray-100 p-8 rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center">
            <h1 className="text-accent font-bold text-center text-2xl mt-5 mb-10 hover:text-hover-light hover:cursor-pointer"> <Link href={link}>{title}<br/></Link></h1>
            <p className="w-[80%] text-center text-accent font-semibold text-base text-wrap mb-10"><br/>{description}<br/></p>
            <p className="text-accent font-semibold text-center text-base text-wrap mb-10"><br/>{macros}<br/></p>
          </div>

          </div>
        </div>
    );
  };

  export default RecipeCard;