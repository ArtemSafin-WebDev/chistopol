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
