// document.addEventListener("scroll", () => {
//   let scrolled = window.scrollY;
//   let currentScale = 1;
//   let scrollingScale = currentScale + scrolled * 0.005;
//   let currentOpacity = 1;
//   let opacityRate = currentOpacity + scrolled * -0.0001;
//   let opacityRateFaster = currentOpacity + scrolled * -0.0005;

//   logoCutout.style.transform = `scale(${scrollingScale})`;
//   logoCutout.style.opacity = `${opacityRate}`;

//   if (scrollingScale > 8) {
//     overlay.classList.add("overlayAppear");
//     logoCutout.style.opacity = `${opacityRateFaster}`;
//     heroLogoContainer.classList.add("showHeroLogo");
//     ctaButtonsContainer.classList.add("showButtons");
//   } else {
//     overlay.classList.remove("overlayAppear");
//     logoCutout.style.opacity = `${opacityRate}`;
//     heroLogoContainer.classList.remove("showHeroLogo");
//     ctaButtonsContainer.classList.remove("showButtons");
//   }

//   if (scrollingScale > 9) {
//     logoCutout.style.display = "none";
//   } else {
//     logoCutout.style.display = "block";
//   }
// });

// const mainContainer = document.querySelector(".main");
// const sectionTitleBox = document.querySelector(".section-title-box");
// const sectionTitle = document.querySelector(".section-title");
// const sections = document.querySelectorAll(".sections");
// const heroContainer = document.querySelector(".hero-container");
// const ctaButtonsContainer = document.querySelector(".cta-buttons-container");

// let firstSection = sections[0];

// const observerOptions = {
//   root: null,
//   threshold: 0,
//   rootMargin: "-150px",
// };

// Observer for SectionTitle

// const titleObserver = new IntersectionObserver((entries) => {
//   const [entry] = entries;
//   // console.log(entry);

//   if (entry.isIntersecting) {
//     sectionTitle.classList.add("slideInLeft");
//   } else {
//     sectionTitle.classList.remove("slideInLeft");
//   }
// }, observerOptions);

// Observer Watch

// titleObserver.observe(mainContainer);

// Observer for Sections

// const intersectObserver = new IntersectionObserver((entries) => {
//   const [entry] = entries;
//   //   console.log(entry);

//   if (entry.isIntersecting) {
//     let newTitle = entry.target.getAttribute("id");
//     sectionTitleBox.textContent = newTitle;
//   }
// }, observerOptions);

// Observer Watch

// sections.forEach((s) => {
//   intersectObserver.observe(s);
// });

// window.addEventListener("load", () => {
//   ctaButtonsContainer.classList.add("showButtons");
//   heroContainer.classList.add("showHero");
// });
