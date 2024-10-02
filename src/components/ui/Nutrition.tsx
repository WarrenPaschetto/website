
interface NutritionProps {
    servings: number;
    servingSize: string;
    calories: number;
    totalFat: number;
    totalFatPercent: number;
    satFat: number;
    satFatPercent: number;
    monoFat: number;
    polyFat: number;
    transFat: number;
    chol: number;
    cholPercent: number;
    sodium: number;
    sodiumPercent: number;
    potassium: number;
    potassiumPercent: number;
    carb: number;
    carbPercent: number;
    fiber: number;
    fiberPercent: number;
    sugar: number;
    protein: number;
    proteinPercent: number;
    vitAPercent: number;
    vitCPercent: number;
    calciumPercent: number;
    ironPercent: number;
  }

const Nutrition: React.FC<NutritionProps> = ({ servings, servingSize, calories, totalFat, totalFatPercent,
    satFat, satFatPercent, monoFat, polyFat, transFat, chol, cholPercent, sodium, sodiumPercent,
    potassium, potassiumPercent, carb, carbPercent, fiber, fiberPercent, sugar, protein, proteinPercent,
    vitAPercent, vitCPercent, calciumPercent, ironPercent}) => {
return (
<div className="p-1 border-2 border-black dark:border-secondary-dark font-sans w-72">
    <div className="text-4xl font-extrabold leading-none">Nutrition Facts</div>
    <div className="leading-snug">{servings} servings per recipe</div>
    <div className="flex justify-between font-bold border-b-8 border-black dark:border-secondary-dark">
        <div>Serving size</div><div>{servingSize}</div>
    </div>
    <div className="flex justify-between items-end font-extrabold">
        <div>
            <div className="font-bold">Amount per serving</div>
            <div className="text-4xl">Calories</div>
        </div>
        <div className="text-5xl">{calories}</div>
    </div>
    <div className="border-t-4 border-black dark:border-secondary-dark text-sm pb-1">
        <div className="text-right font-bold pt-1 pb-1">% Daily value*</div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>
                <span className="font-bold">Total Fat</span> {totalFat}g
            </div>
            <div className="font-bold">{totalFatPercent}%</div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>Saturated Fat {satFat}g</div>
            <div className="font-bold">{satFatPercent}%</div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>Monounsaturated Fat {monoFat}g</div>
            <div className="font-bold"> </div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>Polyunsaturated Fat {polyFat}g</div>
            <div className="font-bold"> </div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div>
            <span className="italic">Trans Fat</span> {transFat}g
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>
                <span className="font-bold">Cholesterol</span> {chol}mg
            </div>
            <div className="font-bold">{cholPercent}%</div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>
                <span className="font-bold">Sodium</span> {sodium}mg
            </div>
            <div className="font-bold">{sodiumPercent}%</div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>
                <span className="font-bold">Potassium</span> {potassium}mg
            </div>
            <div className="font-bold">{potassiumPercent}%</div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>
                <span className="font-bold">Total Carbohydrate</span> {carb}g
            </div>
            <div className="font-bold">{carbPercent}%</div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div className="pl-4">
                Dietary Fiber {fiber}g
            </div>
            <div className="font-bold">{fiberPercent}%</div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="pl-4">
            Sugars {sugar}g
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>
                <span className="font-bold">Protein</span> {protein}g
            </div>
            <div className="font-bold">{proteinPercent}%</div>
        </div>
    </div>
    <div className="border-t-8 border-black dark:border-secondary-dark pt-1 text-sm">
        <div className="flex justify-between">
            <div>Vitamin A</div>
            <div>{vitAPercent}%</div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>Vitamin C</div>
            <div>{vitCPercent}%</div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>Calcium</div>
            <div>{calciumPercent}%</div>
        </div>
        <hr className="border-gray-500 dark:border-secondary-dark"/>
        <div className="flex justify-between">
            <div>Iron</div>
            <div>{ironPercent}%</div>
        </div>
        <div className="border-t-4 border-black dark:border-secondary-dark flex leading-none text-xs pt-2 pb-1">
            <div className="pr-1">*</div>
            <div>The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</div>
        </div>
    </div>
</div>
)}

export default Nutrition;