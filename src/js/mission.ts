import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function mission() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".mission")
  );

  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 641px)",
      () => {
        gsap.to(".mission__bg-image-wrapper", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      },
      element
    );
  });
}
