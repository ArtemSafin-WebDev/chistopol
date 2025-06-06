import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { isTouch } from "./utils";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function smoothScrolling() {
  // if (history.scrollRestoration) {
  //   history.scrollRestoration = "manual";
  // }

  const hasLoader = !!document.querySelector<HTMLElement>(".loader");

  let lenis: Lenis | null = null;

  if (!isTouch()) {
    lenis = new Lenis({
      smoothWheel: true,
      prevent: (node) =>
        node.classList.contains("vacancies__filters-modal") &&
        window.matchMedia("(max-width: 640px)").matches,
    });

    if (hasLoader && window.sessionStorage.getItem("loaderShown") !== "Y") {
      lenis.on("scroll", ScrollTrigger.update);
      lenis.stop();
    }

    document.addEventListener("loader:hidden", () => {
      lenis?.start();
    });

    gsap.ticker.add((time) => {
      if (lenis) {
        lenis.raf(time * 1000);
      }
    });

    gsap.ticker.lagSmoothing(0);
  }
}
