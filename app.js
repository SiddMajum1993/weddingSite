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

/**
 * The code below is inspired from (psssttt! cmd+c / cmd+v) : https://codepen.io/KhaledPen/pen/YzXeXLm
 * Thanks to this amazing answer : https://stackoverflow.com/a/60627778
 */
const storyTimeline = document.querySelector('.story-timeline');
const storyTimelineScrollContainer = document.querySelector('.story-timeline-scroll_container');
storyTimeline.style.height = `${calcDynamicHeight(storyTimelineScrollContainer)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh;
}

window.addEventListener('scroll', () => {
  const storyTimelineWrapper = document.querySelector('.story-timeline_wrapper');
  storyTimelineScrollContainer.style.transform = `translateX(-${storyTimelineWrapper.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  storyTimeline.style.height = `${calcDynamicHeight(storyTimelineScrollContainer)}px`;
});
