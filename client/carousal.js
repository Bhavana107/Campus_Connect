const track = document.getElementById('carouselTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = 3;

function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;

    track.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle(
            'active-dot',
            i === currentIndex
        );
    });
}

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        showSlide(Number(dot.dataset.index));
    });
});