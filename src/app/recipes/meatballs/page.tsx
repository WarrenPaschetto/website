'use client'

import Nutrition from "@/components/ui/Nutrition";
import Image from "next/image";

export default function Home() {

  return (
    <main className="relative bg-white dark:bg-gray-900">
      <div className="h-[80%] mt-28 flex flex-col w-full p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-center text-4xl m-10">Turkey Meatballs</h1>

        <div className="flex justify-center p-4">
          <Image
            src="/assets/recipeImages/turkeyMeatball.png"
            alt="Turkey Meatballs"
            width= "400"
            height= "400"
            className="rounded-xl"
            ></Image>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto m-10 p-4">
          <p className="text-xl mx-auto text-accent dark:text-text-primary-dark">I do occasionally incorporate pasta into my diet, but I plan ahead and save it as a post workout meal about an hour after a hard leg or back training session when my body could really use this type of carb.  One of the pasta dishes I like to make is angel hair pasta with these hearty turkey meatballs, drizzled with olive oil and some parmesan cheese.  Prep time for these meatballs is about 8 minutes and they&apos;re done baking in about 30 minutes.  This recipe makes 12 large meatballs and a single serving is 2.  For 2 meatballs there are 187 Calories, 3g fat, 6g carbs, and 34g protein.  Scroll down for the rest of the nutritional information.</p>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto m-10 p-4">
          <h1 className="text-accent dark:text-text-primary-dark font-bold text-3xl mb-10">Ingredients:</h1>
          <ul className="text-accent dark:text-text-primary-dark text-xl list-disc">
            <li className="leading-9">2 pounds of fresh ground turkey 99% fat free</li>
            <li className="leading-9">2 large whole eggs</li>
            <li className="leading-9">1/2 cup of Italian seasoned bread crumbs (If you use unseasoned, you may want to season with garlic and onion powder, parsley, salt, and pepper)</li>
            <li className="leading-9">1 cup of freshly chopped baby spinach</li>
            <li className="leading-9">A nonstick cooking spray</li>
          </ul>
        </div>
        <br/>
        <br/>

        <div className="flex justify-center p-4">
          <Image
            src="/assets/recipeImages/meatballIngredients.jpg"
            alt="Turkey meatball ingredients"
            width= "300"
            height= "300"
            className="rounded-xl m-10"
            ></Image>
        </div>
        <br/>
        <br/>

        <div className="w-[90%] md:w-[70%] mx-auto m-10 p-4">
          <h1 className="text-accent dark:text-text-primary-dark font-bold text-3xl mb-10">Directions:</h1>
          <ol className="text-accent dark:text-text-primary-dark text-xl">
            <li>Preheat oven to 350 degrees Fahrenheit and lightly spray a baking pan with your cooking spray. </li>
            <li>Thoroughly mix the turkey, eggs, bread crumbs, and spinach in a large bowl with your hands.</li>
            <li>Next simply shape 12 equally sized meatballs in your hands and place each evenly spaced on the sprayed baking pan.&nbsp;The easiest way to make equally sized meatballs is to divide the whole meat mixture in half, then divide each half in equal halves, and then make three meatballs from each divided portion. </li>
            <li>Bake in your preheated oven for about 30 minutes and check the internal temperature of the meatballs which should be at least 165&deg;F or 77&deg;C.&nbsp;Hope you enjoy!</li>
          </ol>
        </div>
        <br/>
        <br/>
        <div className="flex justify-center p-4">
          <Image
            src="/assets/recipeImages/meatballPan.jpg"
            alt="Turkey meatball ingredients"
            width= "300"
            height= "300"
            className="rounded-xl m-10"
            ></Image>
        </div>
        <br/>
        <br/>

       

        <div className="flex w-[90%] md:w-[70%] mx-auto justify-center m-5 p-4">
          <Nutrition
           servings={6}
           servingSize="2 meatballs"
           calories={187}
           totalFat={3}
           totalFatPercent={5}
           satFat={1}
           satFatPercent={3}
           monoFat={1}
           polyFat={0}
           transFat={0}
           chol={130}
           cholPercent={43}
           sodium={218}
           sodiumPercent={9}
           potassium={26}
           potassiumPercent={1}
           carb={6}
           carbPercent={2}
           fiber={0}
           fiberPercent={1}
           sugar={0}
           protein={34}
           proteinPercent={68}
           vitAPercent={5}
           vitCPercent={1}
           calciumPercent={2}
           ironPercent={11}
          />
          </div>

    </div>
    </main>
  );
}
