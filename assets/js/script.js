'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * Carousel function
 */

const initializeCarousel = function () {
  const buttons = document.querySelectorAll("[data-carousel-button]");
  let intervalId;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      clearInterval(intervalId); // Clear interval when button is clicked
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;
      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
      // Restart the interval after button click
      intervalId = setInterval(() => {
        const nextButton = document.querySelector("[data-carousel-button='next']");
        nextButton.click();
      }, 3000); // Adjusted back to 3000 milliseconds
    });
  });

  // Start the initial interval
  intervalId = setInterval(() => {
    const nextButton = document.querySelector("[data-carousel-button='next']");
    nextButton.click();
  }, 3000);
}

initializeCarousel(); // Call the function to initialize the carousel
