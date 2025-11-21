function initLightbox() {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    lightbox.innerHTML = `
        <div id="lightbox-bg"></div>
        <img id="lightbox-img" src="">
        <span id="lightbox-close">❌</span>
    `;

    document.body.appendChild(lightbox);

    const bg = document.getElementById("lightbox-bg");
    const img = document.getElementById("lightbox-img");
    const close = document.getElementById("lightbox-close");

    document.querySelectorAll(".slide-img").forEach((image) => {
        image.addEventListener("click", () => {
            img.src = image.src;
            lightbox.classList.add("active");
        });
    });

    bg.addEventListener("click", () => lightbox.classList.remove("active"));
    close.addEventListener("click", () => lightbox.classList.remove("active"));
}
