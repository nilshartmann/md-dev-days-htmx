@param gg.jte.Content content
@param String title = "Recipify"

<!doctype html>
<html
        lang="en"
>
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>${title}</title>

        @template.layout.favicons()


        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="/main.css" rel="stylesheet"/>
        <link href="/fonts/google-fonts.css" rel="stylesheet"/>
        <link href="/fontawesome/css/fontawesome.css" rel="stylesheet"/>
        <link href="/fontawesome/css/brands.css" rel="stylesheet"/>
        <link href="/fontawesome/css/regular.css" rel="stylesheet"/>
        <link href="/fontawesome/css/solid.css" rel="stylesheet"/>
        <link href="/RecipePage.css" rel="stylesheet"/>
        <link href="/LoadingIndicator.css" rel="stylesheet"/>
    </head>

    <body>
        <div class="flex min-h-screen flex-col">
            <div class="container mx-auto h-16">
                <div class="flex h-full items-center justify-end">
                    @template.layout.NewsletterRegistration()
                </div>
            </div>

            <header
                    class="flex h-24 items-center bg-cover bg-center"
                    style="background-image: url(/images/landing-page.png)"
            >
                <div class="container mx-auto">
                    <div class="flex h-full items-center justify-between">
                        <div class="flex items-center font-space font-bold text-red">
                            <h1 class="inline-block bg-white p-2 pb-3 text-4xl">
                                <a href="/">Recipify</a>
                            </h1>
                            <div class="ms-2 shrink-0 bg-white p-1 text-xl">
                                <span class="text-green">HTMX</span> Edition
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main class="flex-grow">
                ${content}
            </main>

            <footer class="h-16 bg-gray-800 font-inter text-sm text-gray-200">
                <div class="container mx-auto flex h-full items-center justify-between">
                    <p>Dummy content only. Do not cook 👮‍.</p>
                    <p>https://nilshartmann.net</p>
                </div>
            </footer>
        </div>
        <!--    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.5/dist/cdn.min.js"></script>-->
        <script src="/alpinejs/alpine-3.13.5.min.js"></script>

        <script
                type="text/javascript"
                src="/htmx/htmx-1.9.10.min.js"
        ></script>

        <script>
          //      htmx.logAll();
        </script>
    </body>
</html>

