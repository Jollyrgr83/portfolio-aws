$(() => {
    $(document).on("click", ".button", (event) => {
        const routes = {
            home: "/",
            view: "/view",
            year: "/year",
            comp: "/competitors",
            score: "/score",
            reports: "/reports"
        };
        if (routes[$(event.target).attr("id")]) {
            window.location.href = routes[$(event.target).attr("id")];
        }
    });
});
