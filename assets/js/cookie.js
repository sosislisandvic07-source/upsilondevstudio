document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const accept = document.getElementById("acceptCookies");

    if (localStorage.getItem("cookiesAccepted") === "yes") {
        banner.style.display = "none";
    }

    accept.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "yes");
        banner.style.display = "none";
    });
});
