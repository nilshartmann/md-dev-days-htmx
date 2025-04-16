@param nh.recipify.domain.api.DetailedRecipeDto recipe
<%--x-data servings: 4--%>
<div x-data="{servings: 4}">
    <div class="mb-8 mt-8 flex items-center justify-between">
        <h2 class="font-space text-3xl font-bold">Ingredients</h2>
        <div
                class="rounded-lg border border-dotted border-gray-500 p-4 text-lg"
        >
            <!-- todo: bei click: servings++ -->
            <i
                    @click="servings++"
                    class="fa-solid fa-circle-plus text-orange_2 hover:cursor-pointer hover:text-orange_2-500"
            ></i>
            <span class="text-gray-500">
              <!-- todo: mit x-text 'servings' ausgeben -->
              <span x-text="servings"></span> servings
            </span>
            <!-- todo: bei click: wenn servings > 1 servings- -->
            <!-- todo: :class, wenn servings === 1 cursor-default, sonst cursor-pointer' -->
            <i
                    <%-- Noch eine DSL fuer JS-Code...  --%>
                    @click="servings > 1 && servings--"
                    <%-- ...und noch eine DSL fuer CSS...  --%>
                    :class="servings === 1 ? 'cursor-default' : 'cursor-pointer'"

                    class="fa-solid fa-circle-minus text-orange_2 hover:text-orange_2-500"

            ></i>
        </div>
    </div>
    @for(nh.recipify.domain.model.Ingredient i : recipe.ingredients())
        <div

                class="mb-4 me-4 ms-4 border-b border-dotted border-gray-300 pb-4"
        >

            <i class="fa-regular fa-circle-check me-2 text-orange_2"></i>
            <span class="font-inter text-gray-500">
<%--
    todo:
       - span mit x-text:  "(${i.getAmount()} / 4) * servings"
       - erläutern: was macht "i" und wo kommt das her?
--%>
                <%--
                  "${i.getAmount()}" wird im BACKEND ins HTML geschrieben
                    - wir generieren jetzt also JavaScript Code (Schnippsel)
                    🤯 Da kommt selbst IDEA mit dem Syntax Check durcheinander
                 --%>

                <span x-text="(${i.getAmount()} / 4) * servings"></span>
            ${i.getUnit()} ${i.getName()}

          </span>
        </div>
    @endfor
</div>