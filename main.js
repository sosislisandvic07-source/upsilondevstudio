// Mobil menü
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });

    mobileNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
}

// Scroll reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
},{ threshold:0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
