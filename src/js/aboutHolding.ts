import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function aboutHolding() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".about-holding")
  );
  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=20%",
        },
        onComplete: () => {
          element.classList.add("animation-complete");
        },
      });
      tl.from(".about-holding__heading", {
        autoAlpha: 0,
        duration: 0.7,
        y: 30,
      });
      tl.from(
        ".about-holding__secondary-heading",
        {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        },
        ">-=0.3"
      );
      tl.from(
        ".about-holding__text",
        {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        },
        ">-=0.3"
      );
      tl.from(".about-holding__numbers-list-item", {
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.2,
        y: 30,
      });
    }, element);
  });
}
