<html lang="en">
    <head>
        <title>Hello HTMX</title>
        <script src="/htmx/htmx-1.9.10.min.js"></script>

        <style>
          body {
            font-size: 2rem;
            font-family: barlow, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          }

          li {
            margin-bottom: 0.8rem;
          }
        </style>
    </head>
    <body>

        <h1>Hello HTMX</h1>
        <label>
            <input type="checkbox"
                    <%--

                    Bei Klick "Infos" vom Backend laden:
                    - trigger
                    - get
                    - target
                    (hwa)

                    - 🤔 Was passiert eigentlich, wenn die Checkbox
                         _initial_ angehakt ist?

                    --%>
            />
            I want to know more!
        </label>

        <div id="more-info">
<%--
            👉 I want the info here
--%>
        </div>
    </body>
</html>