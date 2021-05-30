gsap.to(".hero-block_title", {
  y: 100,
  duration: 3,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".hero-block_title",
    start: "top center",
  },
});

// gsap.to(".hero-block_title", {
//   y: 200,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".hero-block_title",
//     start: "top top+=100px",
//   },
// });

gsap.to(".menu", {
  duration: 3,
  x: 50,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".menu",
    horizontal: true,
  },
});

gsap.to(".header-block_logo", {
  duration: 3,
  x: -50,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".header-block_logo",
    horizontal: true,
  },
});
