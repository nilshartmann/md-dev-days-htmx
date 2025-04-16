import { RecipeBanner } from "@/app/components/recipepage/RecipeBanner.tsx";
import { fetchFeedback, fetchRecipe } from "@/app/components/queries.ts";
import { notFound } from "next/navigation";
import RecipeDetails from "@/app/components/recipepage/RecipeDetails.tsx";
import TwoColumnLayout from "@/app/components/layout/TwoColumnLayout.tsx";
import { Sidebar } from "@/app/components/Sidebar.tsx";
import { Suspense } from "react";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import FeedbackList from "@/app/components/recipepage/FeedbackList.tsx";

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
  // Dieser Code wird IMMER ausgeführt, wenn auf die /recipeId-Route zugegriffen wird:
  //   - als initialer Request
  //   - als "interne" Navigation
  //   -> Next.js kümmert sich im Client darum, dass nur die Änderungen
  //      im Browser gemacht werden, die gemacht werden müssen
  //      Beispiel: Eier-Uhr, Newsletter-Formular
  //

  // Laden der Daten für den CLIENT beginnt auf dem SERVER!
  const feedbackPromise = fetchFeedback(
    params.recipeId,
    searchParams.feedback_page,
  );
  const response = await fetchRecipe(params.recipeId);

  if (!response) {
    notFound();
  }

  return (
    <div>
      <RecipeBanner recipe={response.recipe} />
      <TwoColumnLayout
        sidebar={
          <Sidebar>
            {/*
              💡 Das PROMISE wird vom SERVER zum BROWSER geschickt!

              💡 Hier wird das Rendern "unterbrochen", wenn der Feedback-Request "lange" dauert
                   - aber was passsiert, wenn die ganze Seite langsam ist, weil auch der
                     Rezept-Request nicht geladen werden kann?
                     -> loading.tsx
                   - und in htmx?

            */}
            <Suspense fallback={<LoadingIndicator />}>
              <FeedbackList feedbackPromise={feedbackPromise} />
            </Suspense>
          </Sidebar>
        }
      >
        <RecipeDetails recipe={response.recipe} />
      </TwoColumnLayout>
    </div>
  );
}
