const sliderContainer = document.querySelector('.slider__container');
const slides = document.querySelector('.slider__slides');
const arrowLeft = document.querySelector('.arrow--left');
const arrowRight = document.querySelector('.arrow--right');

const totalSlides = document.querySelectorAll('.slider__slide').length;
let slideWidth = window.innerWidth >= 513 ? 480 : 348;

let currentIndex = 0;
const controls = document.querySelectorAll('.controls__control');


/*
* Manual slider functions
*/

let position = 0; // offset from left side

function updateSlideWidth() {
  slideWidth = window.innerWidth >= 513 ? 480 : 348;
  position = -slideWidth * currentIndex;
  slides.style.transform = `translateX(${position}px)`;
}


// Resize event listener
window.addEventListener('resize', () => {
  updateSlideWidth();
});

// Initial setup
updateSlideWidth();


/*
* Change slides
*/

function nextSlide() {
  // console.log('Start nextSlide');
  position = position - slideWidth;
  if (position < -slideWidth * (totalSlides - 1)) {
    position = 0;
  }
  slides.style.transform = `translateX(${position}px)`;

  currentIndex = (currentIndex + 1) % controls.length;
  updateIndicators();
}

function prevSlide() {
  position = position + slideWidth;
  if (position > 0) {
    position = -slideWidth * (totalSlides - 1);
  }
  slides.style.transform = `translateX(${position}px)`;

  currentIndex = (currentIndex - 1 + controls.length) % controls.length;
  updateIndicators();
}


/*
* Right arrow
*/
arrowRight.addEventListener('click', function () {
  nextSlide();
});


/* 
* Left arrow
*/

arrowLeft.addEventListener('click', function () {
  prevSlide();
});


/*
* Swipe sliders by touching and stop animation during touch-and-hold
*/

let touchstartX = 0;
let touchendX = 0;
let isFirstTouch = true;

function checkDirection() {
  if (touchendX > touchstartX) {
    prevSlide();
  }
  if (touchendX < touchstartX) {
    nextSlide();
  }
}

slides.addEventListener('touchstart', (e) => {
  // console.log('Touch Start');
  animationPaused();
  touchstartX = e.changedTouches[0].screenX;
  isFirstTouch = true;
});

slides.addEventListener('touchend', (e) => {
  // console.log('Touch End');

  if (isFirstTouch) {
    requestAnimationFrame(() => {
      animationRunning();
      touchendX = e.changedTouches[0].screenX;
      checkDirection();
    });

    isFirstTouch = false;
  } else {
    animationRunning();
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  }
});


/*
* Automatic slider scrolling depending on the location of the mouse
*/

// Stop the animation of the active indicator on mouseover
sliderContainer.addEventListener('mouseover', function () {
  animationPaused();  
});

// Resume the animation of the active indicator, when mouse is out of slider
sliderContainer.addEventListener('mouseout', function () {
  animationRunning();
});


/*
* Slides Indicators Animation
*/

function updateIndicators() {
  controls.forEach((control, index) => {
    const activeIndicator = control.querySelector('.control--active');
    if (index === currentIndex) {
      activeIndicator.classList.add('active-animation');
      activeIndicator.addEventListener('animationend', nextSlide);
    } else {
      activeIndicator.classList.remove('active-animation');
      activeIndicator.removeEventListener('animationend', nextSlide);
    }
  });
}


// Launch indicators
updateIndicators();


/*
* Animation Running and Paused
*/

function animationPaused() {
  const activeIndicator = controls[currentIndex].querySelector('.control--active');
  activeIndicator.style.animationPlayState = 'paused';
}

function animationRunning() {
  const activeIndicator = controls[currentIndex].querySelector('.control--active');
  activeIndicator.style.animationPlayState = 'running';
}
