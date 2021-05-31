gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-block_title", {
  y: 100,
  duration: 3,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".hero-block_title",
    start: "top center",
  },
});

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

const tl = gsap.timeline();
tl.from(".block-one_image", {
  duration:2,
  xPercent: -100,
}).from(".block-two_image",{
  duration:2,
  yPercent: 50,
});


// const sections = gsap.utils.toArray(".story-container");
// let maxWidth = 0;

// const getMaxWidth = () => {
//   maxWidth = 0;
//   sections.forEach((section) => {
//     maxWidth += section.offsetWidth;
//   });
// };

// getMaxWidth();
// ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

// gsap.to(sections, {
//   x: () => `-${maxWidth - window.innerWidth}`,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".story-timeline_wrapper",
//     pin: true,
//     scrub: true,
//     end: () => `+=${maxWidth}`,
//     invalidateOnRefresh: true
//   }
// });

// sections.forEach((sct, i) => {
//   ScrollTrigger.create({
//     trigger: sct,
//     start: () =>
//       "top top-=" +
//       (sct.offsetLeft - window.innerWidth / 2) *
//         (maxWidth / (maxWidth - window.innerWidth)),
//     end: () =>
//       "+=" + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth))
//   });
// });
