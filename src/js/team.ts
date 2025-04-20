import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function team() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".team"));
  elements.forEach((element) => {
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
