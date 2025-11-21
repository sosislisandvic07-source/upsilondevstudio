/* ============================================
   COOKIE BANNER (Çerez Bildirimi Sistemi)
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("acceptCookies");

    // Eğer kullanıcı daha önce kabul ettiyse banner'ı gizle
    if (localStorage.getItem("cookiesAccepted") === "yes") {
        banner.style.display = "none";
    }

    // Kabul edilirse kayıt et + gizle
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "yes");
        banner.style.display = "none";
    });

});

