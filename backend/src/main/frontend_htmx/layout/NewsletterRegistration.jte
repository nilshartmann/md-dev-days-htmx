@param String newsletterEmail = ""
@param String newsletterResult = ""

<%--<!-- todo--%>
<%--         - hx-post auf /newsletter--%>
<%--         - 🔎 Untersuchen: Netzwerkverkehr, was wird geschickt--%>
<%--         - 🤔 was passiert, wenn wir KEINE hx-swap-Angabe machen?--%>
<%--         -       hx-swap="outerHTML"--%>
<%--         - slowdown und hx-disabled-elt, z.B. this, input, button--%>
<%--         -                  ^-- ⚠️ das setzt "nur" disabled state.--%>
<%--         -                  ^-- 🤔 wie können wir Submit blockieren, bis Eingabe erfolgt ist--%>
<%--         -                  ^-- 🤔 wie würden wir das Formular zurücksetzen?--%>
<%--         -                         (Use-Case: erst "Subscribed" anzeigen, bei Keypress Form zurücksetzen)--%>
<%--         ---%>
<%--         -->--%>
<form
        class="max-w-1/4 flex items-center space-x-4 pe-2 ps-2 font-barlow"
>
    <label for="newsletterEmailInput">Don't miss new recipes. Subscribe to newsletter</label>
    <div class="max-w-64">
        <input
                id="newsletterEmailInput"
                name="newsletterEmail"
                type="text"
                value="${newsletterEmail}"
                placeholder="E-Mail"
        />
    </div>
    <div>
        <div class="flex space-x-2">
            <button
                    id="subscribeButton"
                    type="submit"
            >Subscribe
            </button>
            @template.components.LoadingIndicator(id = "newsletterLoading", secondary = true)
        </div>
    </div>
    @if("success".equals(newsletterResult))
        <div id="newsletterSubscribed">Subscribed!</div>
    @endif

</form>
