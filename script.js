// PHOTO SLIDER

let slideIndex = 0;
let slideTimer;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  clearTimeout(slideTimer);
  slideTimer = setTimeout(showSlides, 3000);
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

function moveSlide(n) {
  slideIndex += n - 1;
  showSlides();
}

showSlides();



//PRODUCTS CAROUSEL

function setupCarousel(carouselSelector, leftClickSelector, rightClickSelector, itemWidth, gapWidth, shownItems) {
  const items = document.querySelectorAll(carouselSelector);
  const leftClick = document.querySelector(leftClickSelector);
  const rightClick = document.querySelector(rightClickSelector);

  const shiftWidth = itemWidth + gapWidth;
  let currentTranslateX = 0;

  function updateItemPositions() {
      items.forEach(item => {
          item.style.transform = `translateX(${currentTranslateX}px)`;
      });
  }

  leftClick.addEventListener('click', () => {
      if (currentTranslateX + shiftWidth <= 0) {
          currentTranslateX += shiftWidth;
          updateItemPositions();
      }
  });

  rightClick.addEventListener('click', () => {
      const maxShift = -(items.length - shownItems) * shiftWidth;
      if (currentTranslateX - shiftWidth >= maxShift) {
          currentTranslateX -= shiftWidth;
          updateItemPositions();
      }
  });
}

setupCarousel('.carousel .product', '.carousel__left', '.carousel__right', 340, 25, 4);

setupCarousel('.companies__logos img', '.companies__left', '.companies__right', 100, 70, 10);

setupCarousel('.blog__single', '.blog__left', '.blog__right', 525, 50, 2.5);


