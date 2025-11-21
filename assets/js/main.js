/* ============================================
   NAVBAR - Mobile Menu
============================================ */

const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
});

/* ============================================
   HERO Parallax Effect
============================================ */

document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

/* ============================================
   FORM Gönderimi (webhook.js üzerinden)
============================================ */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
        name: contactForm.name.value,
        discord: contactForm.discord.value,
        message: contactForm.message.value,
    };

    sendWebhook(formData);

    contactForm.reset();
    alert("Mesajınız gönderildi!");
});

/* ============================================
   Lightbox + Slider Initialize
============================================ */

window.onload = () => {
    initSlider();
    initLightbox();
};
