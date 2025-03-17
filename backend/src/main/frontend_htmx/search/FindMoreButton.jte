<%--

  Informationen, die vom Server ermittelt
  und ans Template übergeben werden:

--%>
@param boolean hasMore
@param Integer nextPage
@param String search
<div
        class="container mx-auto mt-2 flex w-1/4 justify-center space-y-8 rounded-lg pb-8"
        id="moreField"
        hx-swap-oob="true"
>
    @if(hasMore)
<%--

   /search?page=XXX liefert zwei Schnipsel zurück:
       (RecipeWebController.searchRecipes)

       1. diesen Button (mit aktualisierten Links für die jeweils folgende Seite)
          - der Button ersetzt sich selbst über die "id" und "hx-swap-oob"
       2. Die neuen Suchergebnisse (max. 2 weitere Rezepte)
          - diese werden an das div#searchResult ans Ende eingeführt
            (SearchResult.jte)

  --%>
        <a
                href="/search?page=${nextPage}&search=${search}"
                hx-get="/search?page=${nextPage}"
                <%-- searchField ist in SearchPageContent --%>
                hx-include="#searchField"
                hx-target="#searchResult"
                hx-select="#searchResult > *"
                hx-swap="beforeend"
                hx-indicator="#searchIndicator"
                class="mb-2 mt-2 inline-flex transform items-center justify-center rounded bg-orange_2 p-2 px-4 py-2 font-barlow font-normal text-white transition-all duration-500 ease-in-out hover:cursor-pointer hover:bg-orange_2-500 hover:underline hover:shadow-lg"
        >
            Find more...
        </a>
    @endif
</div>