import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function aboutIntro() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".about-intro")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: "bottom top",
            markers: false,
            scrub: true,
          },
        });

        tl.addLabel("parallaxStart");
        tl.to(".about-intro__bg", {
          yPercent: 50,
          duration: 1,
          ease: "none",
        });
      },
      element
    );
  });
}
