import { Ingredient } from "@/app/components/api-types.ts";
import IngredientList from "@/app/components/recipepage/IngredientsList.tsx";

type IngredientsProps = {
  ingredients: Ingredient[];
};
export default function IngredientsSection({ ingredients }: IngredientsProps) {
  // todo:
  //    - Client-Komponente
  //    - state
  //    - Button
  //    - Anzahl Servings
  //    - IngredientList zeigen
  const servings = 4;
  return (
    <>
      <div className={"mb-8 mt-8 flex items-center justify-between"}>
        <h2 className={"font-space text-3xl font-bold"}>Ingredients</h2>
        <div
          className={
            "rounded-lg border border-dotted border-gray-500 p-4 text-lg"
          }
        >
          {/* Rendern:
            - PlusButton,
            - MinusButton
            - Anzahl Servings
            */}
        </div>
      </div>
      <IngredientList ingredients={ingredients} servings={servings} />
    </>
  );
}
