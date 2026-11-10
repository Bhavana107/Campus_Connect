const track = document.querySelector('#carouselTrack');
const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.carousel-dots .dot'));
const previousButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

if (track && slides.length > 1 && dots.length === slides.length) {
  let activeIndex = 0;
  let autoSlideTimer;
  let isHovered = false;
  let isFocused = false;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active-slide', slideIndex === activeIndex);
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle('active-dot', isActive);
      dot.setAttribute('aria-pressed', String(isActive));
    });
  };

  const startAutoSlide = () => {
    window.clearInterval(autoSlideTimer);
    if (!isHovered && !isFocused) {
      autoSlideTimer = window.setInterval(() => {
        showSlide(activeIndex + 1);
      }, 5000);
    }
  };

  previousButton?.addEventListener('click', () => {
    showSlide(activeIndex - 1);
    startAutoSlide();
  });

  nextButton?.addEventListener('click', () => {
    showSlide(activeIndex + 1);
    startAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startAutoSlide();
    });
  });

  const carousel = track.closest('.carousel-wrapper');
  carousel?.addEventListener('mouseenter', () => {
    isHovered = true;
    startAutoSlide();
  });
  carousel?.addEventListener('mouseleave', () => {
    isHovered = false;
    startAutoSlide();
  });
  carousel?.addEventListener('focusin', () => {
    isFocused = true;
    startAutoSlide();
  });
  carousel?.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) {
      isFocused = false;
      startAutoSlide();
    }
  });

  showSlide(activeIndex);
  startAutoSlide();
}
