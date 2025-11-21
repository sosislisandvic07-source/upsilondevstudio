/* ============================================
   LOADER (Yüklenme Ekranı)
============================================ */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1500); // 0.5 saniye bekleme süresi (isteğe bağlı)
});

