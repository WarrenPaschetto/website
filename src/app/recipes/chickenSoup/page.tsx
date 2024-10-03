'use client'

import Nutrition from "@/components/layout/recipeSection/Nutrition";
import Image from "next/image";

export default function chickenSoupHome() {

  return (
    <main className="relative bg-white dark:bg-gray-900">
      < div className="h-[80%] mt-28 flex flex-col w-full p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-center text-4xl m-10">Homemade Chicken Soup</h1>

        <div className="flex justify-center">
          <Image
            src="/assets/recipeImages/soup.jpg"
            alt="Chocolate protein balls"
            width= "400"
            height= "400"
            className="rounded-xl"
            ></Image>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto m-10  p-4">
          <p className="text-xl mx-auto text-accent dark:text-text-primary-dark">This is one of my favorite recipes to make on a lazy cold day. It&apos;s time consuming but definitely worth it and extra soup can be frozen for quick future meals. Sometimes I might add some rice or small pasta for extra calories.</p>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto m-10  p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-3xl mb-10">Ingredients:</h1>
        <ul className="text-accent dark:text-text-primary-dark text-xl list-disc">
            <li className="leading-9">5 lb(s), roasted chicken</li>
            <li className="leading-9">3 cleaned celery stalks</li>
            <li className="leading-9">3-4 cleaned carrots</li>
            <li className="leading-9">1-2 yellow onions</li>
            <li className="leading-9">4 garlic cloves</li>
            <li className="leading-9">2 extra large Knorr chicken bouillon cubes (optional)</li>
            <li className="leading-9">2 tablespoons chopped Italian parsley</li>
            <li className="leading-9">1 tablespoon dried thyme leaves</li>
            <li className="leading-9">salt and pepper to taste</li>
        </ul>
        </div>

        <br/>
        <br/>

        <div className="w-[90%] md:w-[70%] mx-auto m-10  p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-3xl mb-10">Directions:</h1>
        <ol className="text-accent dark:text-text-primary-dark text-xl">
            <li>Place the whole washed chicken in a large pot with peeled garlic, carrots, celery, and peeled onion all cut in half.  Pour cold water into the pot until all the ingredients are covered by an inch of water.</li>
            <div className="flex justify-center p-4">
              <Image
                src="/assets/recipeImages/soupIngredients.jpg"
                alt="Soup ingredients in a pot of water"
                width= "300"
                height= "300"
                className="rounded-xl m-10"
                ></Image>
            </div>
            <li>Bring the water to a boil, then reduce to a low simmer.  Let the pot simmer for a couple of hours until the chicken is cooked through and the meat falls off the bone easily.  Skim the fat at the top of the soup with a spoon as needed.</li>
            <div className="flex justify-center p-4">
              <Image
                src="/assets/recipeImages/skimming.jpg"
                alt="Skimming chicken fat from broth"
                width= "300"
                height= "300"
                className="rounded-xl m-10"
              ></Image>
            </div>
            <br/>
            <br/>
            <li>Carefully remove the hot chicken and vegetables from the pot and set aside. Then carefully pour the remaining broth through a strainer into another bowl or pot to remove and small bones and garlic.</li>
            <li>Once the chicken and vegetables have cooled off, chop the vegetables and return them to the strained broth or add fresh chopped vegetables if you prefer them to be firmer.  Add the chicken bouillon if you want for some added flavor.  Using your hands or forks, discard the chicken skin and shred all the chicken meat off the bone.  Add all the bone free meat to the broth and season with parsley, thyme, salt, and pepper.  Let this all simmer for 5-10 minutes and stir regularly. Simmer longer if you added fresh raw vegetables so they cook through.</li>
            <div className="flex justify-center p-4">
              <Image
                src="/assets/recipeImages/straining.jpg"
                alt="Straining chicken broth"
                width= "300"
                height= "300"
                className="rounded-xl m-10"
              ></Image>
            </div>
            <br/>
            <br/>
            <li>I occasionaly cook brown, white, or wild rice or sometimes even some sort of noodle separately and pour the soup over it when I&apos;m ready to eat.  I like to do this so the soup doesn&apos;t overcook the noodles or rice and I can change up what I want to add to the soup when I&apos;m reheating leftovers.  Also tastes great with grated Parmesan cheese sprinkled on top.</li>
        </ol>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto m-5 p-4">
        <br/>
        <br/>
        <p className="text-xl mx-auto text-accent dark:text-text-primary-dark">This recipe makes about 12 bowls, each one about 222 Calories with about 25g protein, 9g carbs, 2g sugar, and 12g total fat. Hope you enjoy and share with others!</p>
        <br/>
        <br/>
        </div>

        <div className="flex w-[90%] md:w-[70%] mx-auto justify-center m-5 p-4">
       <Nutrition
          servings={12}
          servingSize="1 bowl"
          calories={222}
          totalFat={12}
          totalFatPercent={18}
          satFat={1}
          satFatPercent={7}
          monoFat={0}
          polyFat={0}
          transFat={0}
          chol={337}
          cholPercent={112}
          sodium={848}
          sodiumPercent={35}
          potassium={106}
          potassiumPercent={3}
          carb={9}
          carbPercent={3}
          fiber={1}
          fiberPercent={5}
          sugar={2}
          protein={25}
          proteinPercent={49}
          vitAPercent={63}
          vitCPercent={5}
          calciumPercent={15}
          ironPercent={14}
        />
        </div>

    </div>
    </main>
  );
}
