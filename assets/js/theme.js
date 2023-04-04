function detectColorScheme() {
    var theme = "light"; //default to light

    //local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") == "dark") {
            var theme = "dark";
        }
    } else if (!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        var theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
    initCharts();
    //initMap();
    initCharts2();
}

detectColorScheme();
const toggleSwitch = document.querySelector("#checkbox");
const body = document.querySelector("body");

toggleSwitch.addEventListener("change", function (e) {
    if (e.target.checked) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    }
    initCharts();
    initMap();
    initCharts2();
});
if (document.documentElement.getAttribute("data-theme") == "dark") {
    toggleSwitch.checked = true;
}
