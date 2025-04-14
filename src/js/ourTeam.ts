import Swiper from "swiper";
import gsap from "gsap";
import "swiper/css";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function ourTeam() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".our-team")
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
        tl.from(".our-team__heading", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });
        tl.from(
          ".our-team__row",
          {
            autoAlpha: 0,
            duration: 0.7,
            y: 30,
          },
          ">-=0.3"
        );
        tl.from(
          ".our-team__slider-card",
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
        tl.from(".our-team__heading", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });
        tl.from(
          ".our-team__nav",
          {
            autoAlpha: 0,
            duration: 0.7,
            y: 30,
          },
          ">-=0.3"
        );
        tl.addLabel("beforeCards");

        tl.from(
          ".our-team__slider-card",
          {
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.2,
            y: 30,
          },
          ">-=0.3"
        );

        tl.from(
          ".our-team__more",
          {
            autoAlpha: 0,
            duration: 0.7,
            y: 30,
            delay: 0.3,
          },
          "beforeCards"
        );
      },
      element
    );

    const btns = Array.from(
      element.querySelectorAll<HTMLButtonElement>(".our-team__nav-btn")
    );
    const items = Array.from(
      element.querySelectorAll<HTMLElement>(".our-team__tabs-item")
    );
    const setActive = (index: number, refresh = true) => {
      btns.forEach((btn) => btn.classList.remove("active"));
      items.forEach((item) => item.classList.remove("active"));
      btns[index]?.classList.add("active");
      items[index]?.classList.add("active");
      if (refresh) {
        ScrollTrigger.refresh();
      }
    };

    setActive(0, false);

    btns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", setActive.bind(btn, btnIndex, true));
    });

    items.forEach((item) => {
      const container = item.querySelector<HTMLElement>(".swiper");
      if (!container) return;
      new Swiper(container, {
        speed: 600,
        slidesPerView: "auto",
      });
    });
  });
}
