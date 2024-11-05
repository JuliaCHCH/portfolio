document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector("#darkModeToggle");
    const themeLink = document.querySelector("#theme-link");
    const iconLight = document.querySelector(".icon-light");
    const iconDark = document.querySelector(".icon-dark");

    // Check the current theme and set it up on initial load
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        themeLink.href = "dark-mode.css";
        iconDark.classList.add("active");
        iconLight.classList.remove("active");
    } else {
        themeLink.href = "styles.css";
        iconLight.classList.add("active");
        iconDark.classList.remove("active");
    }

    // Event listener for button click to toggle themes
    btn.addEventListener("click", function() {
        if (themeLink.getAttribute("href") === "styles.css") {
            themeLink.href = "dark-mode.css";
            iconLight.classList.remove("active");
            iconDark.classList.add("active");
            localStorage.setItem("theme", "dark");
        } else {
            themeLink.href = "styles.css";
            iconDark.classList.remove("active");
            iconLight.classList.add("active");
            localStorage.setItem("theme", "light");
        }
    });
});
