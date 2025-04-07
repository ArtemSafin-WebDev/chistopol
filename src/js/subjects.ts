import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function subjects() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".subjects")
  );
  elements.forEach((element) => {
    const numbersItems = Array.from(
      element.querySelectorAll<HTMLElement>(".subjects__numbers-item")
    );
    const numbersItemsWrapper = element.querySelector<HTMLElement>(
      ".subjects__numbers-items"
    );
    const accordions = Array.from(
      element.querySelectorAll<HTMLElement>(".subjects__accordion")
    );
    const mql = window.matchMedia("(max-width: 640px)");
    let moved = false;

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && !moved) {
        numbersItems.forEach((item, itemIndex) => {
          const accordion = accordions[itemIndex];
          if (!accordion) return;
          const wrapper = accordion.querySelector<HTMLElement>(
            ".subjects__accordion-wrapper"
          );
          wrapper?.appendChild(item);
        });
        moved = true;
      } else if (moved) {
        numbersItemsWrapper?.append(...numbersItems);
        moved = false;
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);

    accordions.forEach((accordion, accordionIndex) => {
      const btn = accordion.querySelector<HTMLButtonElement>(
        ".subjects__accordion-btn"
      );
      const content = accordion.querySelector<HTMLElement>(
        ".subjects__accordion-content"
      );

      btn?.addEventListener("click", (event) => {
        event.preventDefault();
        accordions.forEach((accordion) => accordion.classList.remove("active"));
        accordion.classList.add("active");
        numbersItems.forEach((item) => item.classList.remove("active"));
        numbersItems[accordionIndex]?.classList.add("active");
      });

      content?.addEventListener("transitionend", () => {
        ScrollTrigger.refresh();
      });
    });
  });
}
