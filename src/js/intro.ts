import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";
import gsap from "gsap";

export default function intro() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".intro"));
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    let mm = gsap.matchMedia();
    mm.add("(max-width: 640px)", () => {
      const instance = new Swiper(container, {
        speed: 600,
        slidesPerView: "auto",
        modules: [Pagination],
        pagination: {
          el: element.querySelector<HTMLElement>(".intro__numbers-pagination"),
          clickable: true,
        },
      });
      return () => {
        instance.destroy();
      };
    });
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
        tl.to(".intro__parallax", {
          yPercent: 50,
          duration: 1,
          ease: "none",
        });
      },
      element
    );
  });
}
