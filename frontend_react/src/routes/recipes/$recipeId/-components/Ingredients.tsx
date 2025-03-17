import { DetailedRecipeDto } from "../../../../components/api-types.ts";
import ServingsChooser from "./ServingsChooser.tsx";

type IngredientsProps = {
  recipe: DetailedRecipeDto;
};

export function Ingredients({ recipe }: IngredientsProps) {
  // todo:
  //   - servingsStore verwenden
  //   - Berechnung unten zeigen
  const servings = 4;
  return (
    <>
      <div className={"mb-8 mt-8 flex items-center justify-between"}>
        <h2 className={"font-space text-3xl font-bold"}>Ingredients</h2>
        <ServingsChooser />
      </div>
      {recipe.ingredients.map((i) => {
        return (
          <div
            className={
              "mb-4 me-4 ms-4 border-b border-dotted border-gray-300 pb-4"
            }
            key={i.name}
          >
            <i className="fa-regular fa-circle-check me-2 text-orange_2 "></i>
            <span className={"font-inter text-gray-500 "}>
              {(i.amount / 4) * servings} {i.unit} {i.name}
            </span>
          </div>
        );
      })}
    </>
  );
}
