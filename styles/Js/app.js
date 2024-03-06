// Nav change on scroll system //
(() => {
    const nav = document.querySelector("nav")

    const scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    window.addEventListener("scroll", () => {
        if (scrollY() > 1 && nav.classList.contains('scroll')) {
            nav.classList.remove('scroll')
        } else if (scrollY() < 1 && !nav.classList.contains('scroll')) {
            nav.classList.add('scroll')
        }
    })
})();
