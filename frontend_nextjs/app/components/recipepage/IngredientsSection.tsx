"use client";

import { Ingredient } from "@/app/components/api-types.ts";
import IngredientList from "@/app/components/recipepage/IngredientsList.tsx";
import { useState } from "react";
import MinusButton from "@/app/components/recipepage/MinusButton.tsx";
import PlusButton from "@/app/components/recipepage/PlusButton.tsx";

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
  const [servings, setServings] = useState(4);

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
          <MinusButton onClick={() => setServings(servings - 1)} />
          {servings} Servings
          <PlusButton onClick={() => setServings(servings + 1)} />
        </div>
      </div>
      <IngredientList ingredients={ingredients} servings={servings} />
    </>
  );
}
