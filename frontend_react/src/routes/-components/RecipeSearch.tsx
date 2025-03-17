import Label from "../recipes/-components/Label.tsx";
import { useSearchQuery } from "../../components/use-queries.ts";
import RecipeSummaryCard from "./RecipeSummaryCard.tsx";

type SearchProps = {
  search: string;
};

export default function RecipeSearch({ search }: SearchProps) {
  const { hasHits, allRecipes } = useSearchQuery(search);

  if (!hasHits) {
    return <Label>No recipes found.</Label>;
  }

  // todo:
  //   hasNextPage, isFetchingNextPage und fetchNetPage verwenden:
  //   <Button> rendern ODER "No more recipes. Happy cooking!"
  //   Button-Label <LoadingIndicator secondary /> oder FindMode

  return (
    <>
      <Label>Recipes for {search}</Label>
      {allRecipes.map((recipe) => (
        <RecipeSummaryCard key={recipe.id} recipe={recipe} />
      ))}
    </>
  );
}
