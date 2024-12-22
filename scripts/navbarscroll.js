document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const headerLayer = document.querySelector(".headerlayer");

    const getOffsetTop = (element) => {
        let offsetTop = 0;
        while (element) {
            offsetTop += element.offsetTop;
            element = element.offsetParent;
        }
        return offsetTop;
    };

    const headerLayerOffset = getOffsetTop(headerLayer) + headerLayer.offsetHeight;

    const updateNavbarVisibility = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition > headerLayerOffset) {
            navbar.classList.remove("navbar-hidden");
        } else {
            navbar.classList.add("navbar-hidden");
        }

        if (scrollPosition === 0) {
            navbar.classList.remove("navbar-hidden");
        }
    };

    navbar.classList.remove("navbar-hidden");

    window.addEventListener("scroll", updateNavbarVisibility);
});