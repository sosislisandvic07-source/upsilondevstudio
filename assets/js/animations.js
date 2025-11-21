/* ============================================
   REVEAL on Scroll
============================================ */

function reveal() {
    const reveals = document.querySelectorAll(".section, .service-box, .why-box, .timeline-item");

    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

/* ============================================
   COUNTERS (Stats)
============================================ */

const counters = document.querySelectorAll(".stat-number");
let started = false;

function startCounters() {
    if (started) return;

    const sectionPos = document.getElementById("stats").getBoundingClientRect().top;

    if (sectionPos < window.innerHeight - 100) {
        started = true;

        counters.forEach((counter) => {
            counter.innerText = "0";
            const target = +counter.getAttribute("data-target");

            const update = () => {
                const current = +counter.innerText;
                const increment = target / 100;

                if (current < target) {
                    counter.innerText = `${Math.ceil(current + increment)}`;
                    setTimeout(update, 20);
                } else {
                    counter.innerText = target;
                }
            };

            update();
        });
    }
}

window.addEventListener("scroll", startCounters);

/* ============================================
   FAQ
============================================ */

document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        const isOpen = answer.style.display === "block";

        document.querySelectorAll(".faq-answer").forEach((a) => (a.style.display = "none"));

        answer.style.display = isOpen ? "none" : "block";
    });
});
