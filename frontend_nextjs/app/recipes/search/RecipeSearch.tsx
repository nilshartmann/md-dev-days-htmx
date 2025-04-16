import Label from "@/app/components/Label.tsx";
import RecipeSummaryCard from "@/app/recipes/search/RecipeSummaryCard.tsx";
import { Button } from "@/app/components/Button.tsx";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import { useSearchQuery } from "@/app/recipes/search/use-search-query.ts";
import { RecipeSummaryDto } from "@/app/components/api-types.ts";

type SearchProps = {
  search: string;
};

export default function RecipeSearch({ search }: SearchProps) {
  // Führt die Suche aus. Liefert zurück:
  //   - die Treffer für die aktuelle "Seite"
  //   - Information, ob es weitere "Seiten" gibt
  //   - die neu gelesenen Ergebnisse werden im Client-seitigen Cache
  //     der bisherigen Ergebnis-Liste hinzugefügt.
  const query = useSearchQuery(search);

  if (!query.hasHits) {
    return <Label>No recipes found.</Label>;
  }

  return (
    <>
      <Label>Recipes for {search}</Label>

      {/*List rendern, React kümmert sich um das anfügen der neuen Einträge */}
      <SearchResultList recipes={query.allRecipes} />

      {/* Wenn es eine weitere Seite gibt, dann FindMoreButtonRendern*/}
      {query.hasNextPage && (
        <FindMoreButton
          isFetching={query.isFetchingNextPage}
          onClick={query.fetchNextPage}
        />
      )}

      {query.hasNextPage || <Label>No more recipes. Happy cooking!</Label>}
    </>
  );
}

type FindMoreButtonProps = {
  isFetching: boolean;
  onClick(): void;
};

function FindMoreButton({ isFetching, onClick }: FindMoreButtonProps) {
  return (
    <div className="flex justify-center">
      <Button>
        {isFetching ? (
          <LoadingIndicator secondary />
        ) : (
          <button onClick={() => onClick()}>Find more...</button>
        )}
      </Button>
    </div>
  );
}

type SearchResultListProps = {
  recipes: RecipeSummaryDto[];
};
function SearchResultList({ recipes }: SearchResultListProps) {
  return recipes.map((recipe) => (
    <RecipeSummaryCard key={recipe.id} recipe={recipe} />
  ));
}
