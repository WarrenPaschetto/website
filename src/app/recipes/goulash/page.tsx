'use client'

import Nutrition from "@/components/ui/Nutrition";
import Image from "next/image";

export default function goulashHome() {

  return (
    <main className="relative bg-white dark:bg-gray-900">
      <div className="h-[80%] mt-28 flex flex-col w-full p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-center text-4xl m-10">Warren&apos;s Goulash</h1>

        <div className="flex justify-center">
          <Image
            src="/assets/recipeImages/goulash.png"
            alt="Bowl of goulash"
            width= "400"
            height= "400"
            className="rounded-xl"
            ></Image>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto m-10  p-4">
          <p className="text-xl mx-auto text-accent dark:text-text-primary-dark">I remember my grandmother making a version of this when I was younger that was basically green pepper, onion, tomatoes, macaroni, and ground beef.  There was something about that combination that I absolutely loved.  I made some changes to her recipe in order to create this nutritiously protein packed meal.  Hope you enjoy!</p>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto m-10  p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-3xl mb-10">Ingredients:</h1>
        <ul className="text-accent dark:text-text-primary-dark text-xl list-disc">
            <li className="leading-9">2 pounds 95% lean ground beef</li>
            <li className="leading-9">black pepper (to taste)</li>
            <li className="leading-9">salt (to taste)</li>
            <li className="leading-9">McCormick&apos;s Italian seasoning (to taste)</li>
            <li className="leading-9">1 tbsp olive oil</li>
            <li className="leading-9">3 garlic cloves</li>
            <li className="leading-9">2 green bell peppers (diced)</li>
            <li className="leading-9">1 medium white onion (diced)</li>
            <li className="leading-9">3-4 Large ripe tomatoes (diced)</li>
            <li className="leading-9">1 (14.5oz) box of Barilla Protein Plus elbow macaroni or favorite multigrain or whole wheat pasta</li>
            <li className="leading-9">12oz Fresh baby spinach</li>
        </ul>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto m-10  p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-3xl mb-10">Directions:</h1>
        <ol className="text-accent dark:text-text-primary-dark text-xl">
            <li>Brown the lean ground beef in a pan and heat 1 tbsp. of olive oil over medium heat in a separate large pot.  Either chop garlic cloves or use a garlic press and begin to sauté chopped onion, garlic, and green pepper over medium heat in the large pot.  After peppers and onion begin to soften, add tomatoes and Italian seasoning.  Continue to cook on medium to low heat for a few minutes and then stir in beef.</li>
            <li>In a separate pot, cook the elbow macaroni according to the directions on the box.  A few minutes before the pasta finishes cooking, add the baby spinach to the pot with the beef, peppers, onion, and tomatoes, stirring until the leaves soften and shrink.</li>
            <li>When the pasta is done, drain and mix well into the meat mixture.  Be sure to stir everything around very well while on low heat for a couple more minutes.  This recipe makes about 6 servings all together.  See below for nutritional information.</li>
        </ol>
        <div className="flex justify-center p-4">
          <Image
            src="/assets/recipeImages/goulashPot.jpg"
            alt="Pot of goulash cooking"
            width= "300"
            height= "300"
            className="rounded-xl m-10"
            ></Image>
        </div>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto m-5 p-4">
        <br/>
        <br/>
        <p className="text-xl mx-auto text-accent dark:text-text-primary-dark">I like to divide it up into plastic food containers and either refrigerate or freeze so I have a quick healthy meal to grab on a busy day.  This is also great topped with parmesan cheese. </p>
        <div className="flex justify-center p-4">
          <Image
            src="/assets/recipeImages/goulashContainers.jpg"
            alt="Meal prep bowls of goulash"
            width= "300"
            height= "300"
            className="rounded-xl m-10"
            ></Image>
        </div>
        <br/>
        <br/>
        </div>

        <div className="flex w-[90%] md:w-[70%] mx-auto justify-center m-5 p-4">
       <Nutrition
          servings={7}
          servingSize="1/7 of recipe"
          calories={534}
          totalFat={14}
          totalFatPercent={22}
          satFat={5}
          satFatPercent={23}
          monoFat={6}
          polyFat={2}
          transFat={0}
          chol={115}
          cholPercent={38}
          sodium={181}
          sodiumPercent={8}
          potassium={1204}
          potassiumPercent={34}
          carb={51}
          carbPercent={17}
          fiber={7}
          fiberPercent={29}
          sugar={8}
          protein={51}
          proteinPercent={102}
          vitAPercent={95}
          vitCPercent={67}
          calciumPercent={10}
          ironPercent={45}
        />
        </div>

    </div>
    </main>
  );
}
