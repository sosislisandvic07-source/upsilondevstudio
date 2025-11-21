/* ============================================
   MOBILE MENU
============================================ */
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});


/* ============================================
   PARALLAX HERO
============================================ */
document.addEventListener("mousemove", (e) => {
    const layers = document.querySelectorAll(".layer");

    layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed") || 0.02;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
});


/* ============================================
   PROJECT TRACKER
============================================ */
async function checkProject() {
    const id = document.getElementById("projectID").value.trim();
    const output = document.getElementById("projectResult");

    if (!id) {
        output.innerHTML = "Lütfen geçerli bir Proje ID girin.";
        return;
    }

    try {
        const res = await fetch("assets/data/projects.json");
        const data = await res.json();

        if (!data[id]) {
            output.innerHTML = "Proje bulunamadı!";
            return;
        }

        const p = data[id];

        output.innerHTML = `
            <strong>${id}</strong> Proje Durumu:
            <br><br>
            <strong>Durum:</strong> ${p.status} <br>
            <strong>İlerleme:</strong> %${p.progress}
        `;
    } catch (err) {
        output.innerHTML = "Sunucu hatası.";
    }
}


/* ============================================
   CONTACT FORM → DISCORD WEBHOOK
============================================ */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: form.name.value,
            discord: form.discord.value,
            message: form.message.value,
        };

        await fetch("assets/js/webhook.js"); // Yükleme

        sendWebhook(data);

        alert("Mesajınız gönderildi!");
        form.reset();
    });
});


/* ============================================
   ANIMATIONS / SLIDERS / LIGHTBOX
============================================ */
if (typeof initAnimations === "function") initAnimations();
if (typeof initSlider === "function") initSlider();
if (typeof initLightbox === "function") initLightbox();
