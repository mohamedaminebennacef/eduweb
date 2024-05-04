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
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

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
    }, 2000);
  });
});

// Start the initial interval
intervalId = setInterval(() => {
  const nextButton = document.querySelector("[data-carousel-button='next']");
  nextButton.click();
}, 3000);
window.onload = function() {
  window.scrollTo(0, 0);
};
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    console.log(rect); // Check the bounding rectangle values
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function addAnimationClass() {
    var element = document.getElementById('animation-container');
    if (isInViewport(element)) {
      console.log('Element is in viewport');
      var paragraph = element.querySelector('.carousel-paragraph');
      console.log(paragraph); // Check if the paragraph element is found
      paragraph.classList.add('animate__bounceInLeft');
    }
  }

  window.addEventListener('scroll', function() {
    addAnimationClass();
  });

  addAnimationClass(); // Trigger animation on initial load
