// USE STRICT MODE

"use strict";

// GRAB DOM ELEMENTS

const burgerBoxContainer = document.querySelector(".burger-box-container");
const mainNav = document.querySelector(".section-header-nav");
const topBurger = document.querySelector(".top");
const middleBurger = document.querySelectorAll(".middle");
const bottomBurger = document.querySelector(".bottom");
const headerLinks = document.querySelectorAll(".section-header-nav-li");

// Open Nav Menu Function
const openNavMenu = () => {
  mainNav.classList.toggle("showNav");
  topBurger.classList.toggle("removeTopBottom");
  bottomBurger.classList.toggle("removeTopBottom");
  middleBurger[0].classList.toggle("rotateMiddleOne");
  middleBurger[1].classList.toggle("rotateMiddleTwo");
};

// Close Nav Menu Function
const closeNavMenu = () => {
  mainNav.classList.toggle("showNav");
  topBurger.classList.remove("removeTopBottom");
  bottomBurger.classList.remove("removeTopBottom");
  middleBurger[0].classList.remove("rotateMiddleOne");
  middleBurger[1].classList.remove("rotateMiddleTwo");
};

// click Event to Toggle Nav
burgerBoxContainer.addEventListener("click", () => {
  openNavMenu();
});

//Close Nav after Links Clicked
headerLinks.forEach((l) => {
  l.addEventListener("click", () => {
    if (!mainNav.classList.contains("hidden")) {
      closeNavMenu();
    }
  });
});

//Media Queries
const mediaQueryDesktopMin = window.matchMedia("(min-width: 1280px)");

// Observer Callback Function

// const fixedBackgroundFunction = function (entries) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (entry.isIntersecting && entry.target.classList.contains("fixed")) {
//     bg.classList.add("fixedPosition");
//   } else {
//     bg.classList.remove("fixedPosition");
//   }

//   // Stop Observer after Intersecting

//   if (entry.isIntersecting) fixedBackgroundObserver.unobserve(entry.target);
// };

// // Observer Options

// const fixedBackgroundOptions = {
//   root: null,
//   threshold: 0,
//   rootMargin: "-100px",
// };

// const fixedBackgroundObserver = new IntersectionObserver(
//   fixedBackgroundFunction,
//   fixedBackgroundOptions
// );

// sections.forEach((s) => {
//   fixedBackgroundObserver.observe(s);
// });
