// ================= FAQ Aç/Kapa =====================

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        const panel = btn.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});


// ================= Smooth Scroll =====================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href").startsWith("#")) {
            e.preventDefault();

            const id = link.getAttribute("href");
            const section = document.querySelector(id);

            if (!section) return;

            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});


// ================= Navbar Scroll Efekti =====================

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.8)";
        navbar.style.backdropFilter = "blur(20px)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.6)";
        navbar.style.backdropFilter = "blur(10px)";
    }
});

