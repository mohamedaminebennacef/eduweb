'use strict';

AOS.init();
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

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
      intervalId = setInterval(() => {
        const nextButton = document.querySelector("[data-carousel-button='next']");
        nextButton.click();
      }, 3000);
    });
  });

  intervalId = setInterval(() => {
    const nextButton = document.querySelector("[data-carousel-button='next']");
    nextButton.click();
  }, 3000);
}

initializeCarousel(); 






let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



document.addEventListener("DOMContentLoaded", function() {
  var notSection = document.querySelector(".not");

  setTimeout(function() {
    notSection.classList.add("active");
  }, 800); // Delay of 2000 milliseconds (2 seconds)
});

document.addEventListener("DOMContentLoaded", function() {
  var closeButton = document.querySelector(".close-btn");
  var notSection = document.querySelector(".not");

  closeButton.addEventListener("click", function() {
    notSection.classList.remove("active");
  });
});
document.getElementById("signupForm").addEventListener("submit", function(event) {
  // Prevent default form submission
  event.preventDefault();
  // Redirect to formulaire.html
  window.location.href = "formulaire.html";
});

document.getElementById("closeButton").addEventListener("click", function() {
  // Redirect to formulaire.html when close button is clicked
  window.location.href = "formulaire.html";
});