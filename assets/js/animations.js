/* ============================================
   ANIMASYON MOTORU (AAA)
   Fade-In, Scroll Trigger, Glow, Reveal
============================================ */

function initAnimations() {

    /* ----------------------------
       Hero Fade-In
    ----------------------------- */
    const heroContent = document.querySelector(".hero-content");
    setTimeout(() => {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 300);


    /* ----------------------------
       Scroll Fade-In Animations
    ----------------------------- */
    const revealElements = document.querySelectorAll(".section, .service-box, .timeline-item");

    function checkReveal() {
        const triggerPoint = window.innerHeight * 0.85;

        revealElements.forEach((el) => {
            const rect = el.getBoundingClientRect();

            if (rect.top < triggerPoint) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkReveal);
    checkReveal();


    /* ----------------------------
       Neon Hover Glow
    ----------------------------- */
    const glowTargets = document.querySelectorAll(".service-box, .team-card, .btn");

    glowTargets.forEach((el) => {
        el.addEventListener("mousemove", function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.style.setProperty("--x", `${x}px`);
            this.style.setProperty("--y", `${y}px`);
        });
    });

}

