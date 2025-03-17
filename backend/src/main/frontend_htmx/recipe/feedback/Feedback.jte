@param String recipeId
<div class="border-1 mt-8 w-full rounded-2xl bg-goldgray p-8 md:mt-0">
    <h2 class="mb-4 font-space text-3xl font-bold">Feedback</h2>
    <!-- todo #10: Feedback beim Laden der Seite lesen

        - hx-trigger: load
          - was passiert, wenn wir für hx:trigger einen falschen Wert angeben 🤔
        - get: "/recipes/${recipeId}/feedback?slowdown=0"
        - indicator: #feedbackListIndicator

        - Was passiert, wenn die ganze Seite (initialer Request) langsam ist?

        -->
    <div
            id="feedbackList"
    >
    </div>

    <div id="feedbackListIndicator"
         class="Spinner"
    >
        @template.recipe.feedback.FeedbackLoadingIndicator()
    </div>

    <!-- todo #12: Loading Indicator
     - zeigen: was passiert, wenn wir den Request langsam machen?
       '(slowdown=0)}"
       - beim ersten Aufruf
       - beim Blättern durch die Bewertungen

     - neues div feedbackListIndicator
          - verwendet  th:insert="~{::FeedbackLoadingIndicator}"
          - class="Spinner"
     - oben als hx-indicator eintragen
     - wichtig: das Element wird mit einer zusätzlichen CSS-Klasse versehen,
        es verschwindet aber nicht (nur optisch)
    -->
</div>