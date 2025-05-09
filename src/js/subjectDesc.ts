import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function subjectDesc() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".subject-desc")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=20%",
          },
        });
        tl.from(".subject-desc__heading", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });
        tl.from(
          ".subject-desc__row",
          {
            autoAlpha: 0,
            duration: 0.7,
            y: 30,
          },
          ">-=0.3"
        );
      },
      element
    );
    mm.add(
      "(max-width: 640px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=20%",
          },
        });
        tl.from(".subject-desc__heading", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });
        tl.from(
          ".subject-desc__secondary-heading",
          {
            autoAlpha: 0,
            duration: 0.7,
            y: 30,
          },
          ">-=0.3"
        );
        tl.from(
          ".subject-desc__text-content",
          {
            autoAlpha: 0,
            duration: 0.7,
            y: 30,
          },
          ">-=0.3"
        );
      },
      element
    );
  });
}
