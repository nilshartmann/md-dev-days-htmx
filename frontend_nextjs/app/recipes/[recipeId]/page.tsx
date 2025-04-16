import { RecipeBanner } from "@/app/components/recipepage/RecipeBanner.tsx";
import { fetchRecipe } from "@/app/components/queries.ts";
import { notFound } from "next/navigation";
import RecipeDetails from "@/app/components/recipepage/RecipeDetails.tsx";
import TwoColumnLayout from "@/app/components/layout/TwoColumnLayout.tsx";
import { Sidebar } from "@/app/components/Sidebar.tsx";

type RecipePageProps = {
  searchParams: {
    feedback_page?: string;
  };
  params: {
    recipeId: string;
  };
};

export default async function RecipePage({
  params,
  searchParams,
}: RecipePageProps) {
  const response = await fetchRecipe(params.recipeId);

  if (!response) {
    notFound();
  }

  return (
    <div>
      <RecipeBanner recipe={response.recipe} />
      <TwoColumnLayout sidebar={<Sidebar>todo</Sidebar>}>
        <RecipeDetails recipe={response.recipe} />
      </TwoColumnLayout>
    </div>
  );
}
