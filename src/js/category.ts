import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function category() {
  const category = document.querySelector<HTMLElement>(".category");
  if (!category) return;
  const listItems = category.querySelectorAll<HTMLElement>(
    ".category__results-list-item"
  );
  const tl = gsap.timeline();
  tl.from(listItems, {
    autoAlpha: 0,
    duration: 0.7,
    stagger: 0.2,
    y: 30,
  });
  tl.pause();
  return tl;
}
