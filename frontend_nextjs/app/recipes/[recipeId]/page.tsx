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
  // todo: fetchRecipe
  //  -> wenn nicht vorhanden, notFound()
  //  Ergebnis:
  //   <RecipeBanner />
  //   <RecipeDetails />

  return <div>Recipe {params.recipeId}</div>;
}
