import Swiper from "swiper";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function news() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".news"));
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
        tl.from(".news__heading", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });
        tl.from(
          ".news__more",
          {
            autoAlpha: 0,
            duration: 0.7,
            y: 30,
          },
          ">-=0.3"
        );
        tl.from(
          ".news__card",
          {
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.2,
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
        tl.from(".news__heading", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });
        tl.addLabel("beforeCards");

        tl.from(
          ".news__card",
          {
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.2,
            y: 30,
          },
          ">-=0.3"
        );

        tl.from(
          ".news__more",
          {
            autoAlpha: 0,
            duration: 0.7,
            delay: 0.3,
          },
          "beforeCards"
        );
      },
      element
    );
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      speed: 600,
      slidesPerView: "auto",
    });
  });
}
