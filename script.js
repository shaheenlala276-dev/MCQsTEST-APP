
/* =====================================================
   DARK MODE
===================================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const themeButton = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

        themeButton.title = "Switch to Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙";

        themeButton.title = "Switch to Dark Mode";

        localStorage.setItem("theme", "light");

    }
}


/* Load saved theme */

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme");

    const themeButton = document.getElementById("themeButton");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeButton) {
            themeButton.textContent = "☀️";
            themeButton.title = "Switch to Light Mode";
        }

    }

});
