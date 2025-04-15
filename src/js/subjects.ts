import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function subjects() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".subjects")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
          },
        });
        tl.from(".subjects__heading", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });
        tl.from(
          ".subjects__row",
          {
            autoAlpha: 0,
            duration: 1.2,
            y: 50,
            ease: "power3.out",
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
            start: "top bottom-=30%",
          },
        });
        tl.from(".subjects__heading", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });
        tl.from(
          ".subjects__row",
          {
            autoAlpha: 0,
            duration: 1,
            y: 30,
            ease: "power3.out",
          },
          ">-=0.3"
        );
      },
      element
    );
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
        numbersItems.forEach((item) => item.classList.remove("prev"));
        const activeItem = numbersItems.find((item) =>
          item.classList.contains("active")
        );
        activeItem?.classList.add("prev");
        numbersItems.forEach((item) => item.classList.remove("active"));
        numbersItems[accordionIndex]?.classList.add("active");
      });

      content?.addEventListener("transitionend", () => {
        ScrollTrigger.refresh();
      });
    });
  });
}
