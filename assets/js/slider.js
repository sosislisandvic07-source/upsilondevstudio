function initSlider() {
    const slider = document.getElementById("portfolioSlider");

    const images = [
        "portfolio1.jpg",
        "portfolio2.jpg",
        "portfolio3.jpg",
        "portfolio4.jpg",
        "portfolio5.jpg"
    ];

    slider.innerHTML = `
        <div class="slider-track" id="sliderTrack">
            ${images
                .map(
                    (img) => `
                <div class="slide">
                    <img src="assets/images/portfolio/${img}" class="slide-img">
                </div>
            `
                )
                .join("")}
        </div>

        <button class="slider-btn left" id="slideLeft">❮</button>
        <button class="slider-btn right" id="slideRight">❯</button>
    `;

    const track = document.getElementById("sliderTrack");
    const btnLeft = document.getElementById("slideLeft");
    const btnRight = document.getElementById("slideRight");

    let index = 0;

    function updateSlider() {
        track.style.transform = `translateX(-${index * 320}px)`;
    }

    btnRight.addEventListener("click", () => {
        if (index < images.length - 1) index++;
        updateSlider();
    });

    btnLeft.addEventListener("click", () => {
        if (index > 0) index--;
        updateSlider();
    });

    // Touch swipe
    let startX = 0;

    track.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;

        if (startX - endX > 40 && index < images.length - 1) index++;
        if (endX - startX > 40 && index > 0) index--;

        updateSlider();
    });
}

