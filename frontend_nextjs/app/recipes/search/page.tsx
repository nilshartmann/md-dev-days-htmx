"use client";
import { Input } from "@/app/components/Input.tsx";
import Label from "../../components/Label.tsx";
import { Suspense, useState } from "react";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import { useDebounce } from "use-debounce";
import RecipeSearch from "@/app/recipes/search/RecipeSearch.tsx";
import { usePathname, useSearchParams } from "next/navigation";
import { debounce_search } from "@/app/nextjs-demo-config.tsx";

export default function SearchPage() {
  const [searchTermInParams, setSearchTermInParams] = useSearchTermFromParams();
  const [search, setSearch] = useState(searchTermInParams || "");
  const [searchTerm] = useDebounce(search, debounce_search);

  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch);
    // Suchstring beim Tippen in die URL als Such-Parameter schreiben
    //  - React rendert dann diese Komponente neu, so dass wir den
    //    aktuellen Wert dann zur verfügung haben
    //  - dasselbe gilt, wenn wir direkt diese Seite mit einem Such-Parameter
    //    in der URL aufrufen
    setSearchTermInParams(newSearch);
  };

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
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button
            // Eingabe zurücksetzen. URL wird auch automatisch angepasst
            onClick={() => handleSearchChange("")}
            className="ms-2 cursor-pointer text-gray-500 underline hover:text-gray-900"
          >
            Clear
          </button>
        </div>
        <div className="container mx-auto mt-2 w-1/4 space-y-8 rounded-lg pb-8 pt-8">
          {search.length < 3 ? (
            <Label>Type three letters to start search</Label>
          ) : (
            // Suche ausführen, während der Request läuft, LoadingIndicator anzeigen
            <Suspense fallback={<LoadingIndicator />}>
              <RecipeSearch search={searchTerm} />
            </Suspense>
          )}
        </div>
      </main>
    </>
  );
}

function useSearchTermFromParams() {
  const searchParams = useSearchParams();
  const searchTermInParams = searchParams.get("search");
  const pathname = usePathname();

  function setParams(newSearch: string) {
    // updating the search params without re-fetching from server:
    //  see https://github.com/vercel/next.js/discussions/18072#discussioncomment-10697745

    const current = new URLSearchParams(searchParams);
    current.set("search", newSearch);

    const newUrl = `${pathname}?${current.toString()}`;
    window.history.replaceState(
      { ...window.history.state, as: newUrl, url: newUrl },
      "",
      newUrl,
    );
  }

  return [searchTermInParams, setParams] as const;
}
