import { useRecipeSearchParam } from "./useRecipeSearchParam.ts";
import { Input } from "../../components/Input.tsx";

export default function SearchPage() {
  const [search, setSearch] = useRecipeSearchParam();

  // todo:
  //   - searchTerm mit useDebounce(search, 200)
  //   - Fenstertitel useRecipifyWindowTitle
  //   - suchen (s.u.)
  //   - Clear-Button

  return (
    <>
      <main className={"flex-grow"}>
        <div className="container mx-auto mt-8 flex max-w-96 pt-8">
          <Input
            type="search"
            name="search"
            autoComplete="off"
            aria-label="Enter at least three chars to start searching for recipes"
            className="h-8 p-6 hover:shadow-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="ms-2 cursor-pointer text-gray-500 underline hover:text-gray-900">
            Clear
          </button>
        </div>
        <div className="container mx-auto mt-2 w-1/4 space-y-8 rounded-lg pb-8 pt-8">
          {/*

          todo:
            - wenn search.length < 3 Meldung anziegen
            - RecipeSearch sarch verwenden, um mit searchTerm zu suchen
            - Suspense mit <LoadingIndicator />

          */}
        </div>
      </main>
    </>
  );
}
