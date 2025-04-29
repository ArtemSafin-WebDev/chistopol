import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function team() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".team__tabs")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=10%",
          },
        });
        tl.from(".team__tabs-nav", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });
        tl.from(
          ".team__list-item",
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
    const btns = Array.from(
      element.querySelectorAll<HTMLButtonElement>(".team__tabs-nav-btn")
    );
    const items = Array.from(
      element.querySelectorAll<HTMLElement>(".team__tabs-item")
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
  });
}
