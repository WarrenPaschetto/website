'use client'

import Nutrition from "@/components/ui/Nutrition";
import Image from "next/image";

export default function goulashHome() {

  return (
    <main className="relative bg-white dark:bg-gray-900">
      <div className="h-[80%] mt-28 flex flex-col w-full p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-center text-4xl m-10">Chocolate Coconut Protein Balls</h1>

        <div className="flex justify-center">
          <Image
            src="/assets/recipeImages/proteinBalls.jpg"
            alt="Chocolate protein balls"
            width= "400"
            height= "400"
            className="rounded-xl"
            ></Image>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto m-10  p-4">
          <p className="text-xl mx-auto text-accent dark:text-text-primary-dark">It&apos;s that time of year when everyone is making Christmas cookies and as much as I love eating them, I need an alternative that tastes just as good, but without all the sugar and extra calories.  This recipe is super easy to make and very hard to believe it&apos;s not your grandmother&apos;s cookie recipe.  You will need a food processor and if you follow me on Instagram or Facebook, you know how much of a huge fan I am of the NutriBullet blender.  I use this for most of my recipes, shakes, and even make homemade ice cream with it.  It&apos;s also extremely easy to clean and very reasonably priced.  If you don&apos;t have a NutriBullet, most any food processor should work.</p>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto m-10  p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-3xl mb-10">Ingredients:</h1>
        <ul className="text-accent dark:text-text-primary-dark text-xl list-disc">
            <li className="leading-9">2 scoops (or servings) Quest Chocolate Milkshake flavored protein</li>
            <li className="leading-9">1/2 cup Almond Flour</li>
            <li className="leading-9">1/2 cup raw walnuts</li>
            <li className="leading-9">2 ounces Sun Maid raisins (optional)</li>
            <li className="leading-9">2 tablespoons unsweetened almond milk</li>
            <li className="leading-9">1/4 cup fine shredded organic coconut (unsweetened)</li>
        </ul>
        </div>

        <div className="flex justify-center p-4">
          <Image
            src="/assets/recipeImages/ballsIngredients.jpg"
            alt="Ingredients for protein balls"
            width= "300"
            height= "300"
            className="rounded-xl m-10"
            ></Image>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto m-10  p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-3xl mb-10">Directions:</h1>
        <ol className="text-accent dark:text-text-primary-dark text-xl">
            <li>Set aside a plate with parchment paper to set cookies on and another plate with the shredded coconut to roll the balls in.</li>
            <li>Grab the small NutriBullet cup (or food processor) and add protein powder, almond flour, raisins, and walnuts. Blend until it&apos;s all a fine powder.</li>
            <li>Add these ingredients to a large bowl and break up any clumps with a fork.</li>
            <div className="flex justify-center p-4">
              <Image
                src="/assets/recipeImages/dryIngredients.jpg"
                alt="Dry ingredients in a bowl"
                width= "300"
                height= "300"
                className="rounded-xl m-10"
                ></Image>
            </div>
            <li>Slowly add about 2 tablespoons of almond milk to the processed mixture in the bowl and begin rolling up 6 equally sized balls in your hands. If the mixture is too dry to stick together, gently add a few more drops of almond milk, but be careful not to get the mixture too wet. If you do, add more almond flour to dry it up.</li>
            <li>Roll each of these balls in the coconut and place in the fridge on the parchment paper for at least 30 minutes before eating.  If they aren&apos;t eaten right away, place in a Ziploc container and keep in the fridge up to 5 days.</li>
        </ol>
        <div className="flex justify-center p-4">
          <Image
            src="/assets/recipeImages/finishedProteinBalls.jpg"
            alt="Finished protein ball cut in half"
            width= "300"
            height= "300"
            className="rounded-xl m-10"
            ></Image>
        </div>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto m-5 p-4">
        <br/>
        <br/>
        <p className="text-xl mx-auto text-accent dark:text-text-primary-dark">Each ball is 195 Calories with about 12g protein, 12g carbs, 6g sugar, and 11g fat.  Without the raisins, each ball is 171 Calories with about 12g protein, 6g carbs, 1g sugar, and 11g fat.  At the bottom of this page I included the full nutrition for the version with the raisins and without.  Hope you enjoy and share with others!</p>
        <br/>
        <br/>
        </div>

        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex w-[90%] md:w-[70%] mx-auto justify-center m-5 p-4">
          <div className="flex flex-col">
            <h1 className="text-xl mx-auto text-accent dark:text-text-primary-dark mb-3">With raisins</h1>
            <Nutrition
              servings={6}
              servingSize="1 ball"
              calories={195}
              totalFat={11}
              totalFatPercent={17}
              satFat={2}
              satFatPercent={8}
              monoFat={1}
              polyFat={5}
              transFat={0}
              chol={5}
              cholPercent={2}
              sodium={59}
              sodiumPercent={2}
              potassium={134}
              potassiumPercent={4}
              carb={12}
              carbPercent={4}
              fiber={3}
              fiberPercent={12}
              sugar={6}
              protein={12}
              proteinPercent={24}
              vitAPercent={0}
              vitCPercent={0}
              calciumPercent={14}
              ironPercent={4}
            />
            </div>
          </div>
          <div className="flex w-[90%] md:w-[70%] mx-auto justify-center m-5 p-4">
            <div className="flex flex-col">
            <h1 className="text-xl mx-auto text-accent dark:text-text-primary-dark mb-3">Without raisins</h1>
            <Nutrition
              servings={6}
              servingSize="1 ball"
              calories={171}
              totalFat={11}
              totalFatPercent={17}
              satFat={2}
              satFatPercent={8}
              monoFat={1}
              polyFat={5}
              transFat={0}
              chol={5}
              cholPercent={2}
              sodium={58}
              sodiumPercent={2}
              potassium={83}
              potassiumPercent={2}
              carb={6}
              carbPercent={2}
              fiber={3}
              fiberPercent={11}
              sugar={1}
              protein={12}
              proteinPercent={24}
              vitAPercent={0}
              vitCPercent={0}
              calciumPercent={14}
              ironPercent={3}
            />
            </div>
          </div>

        </div>
    </div>
    </main>
  );
}
