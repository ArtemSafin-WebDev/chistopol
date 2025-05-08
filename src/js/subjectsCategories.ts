import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function subjectsCategories() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".subjects-categories")
  );
  elements.forEach((element) => {
    const accordions = Array.from(
      element.querySelectorAll<HTMLElement>(".subjects-categories__card")
    );
    accordions.forEach((accordion) => {
      const clickableArea = accordion.querySelector<HTMLButtonElement>(
        ".subjects-categories__card-clickable-area"
      );
      const dropdown = accordion.querySelector<HTMLElement>(
        ".subjects-categories__card-dropdown"
      );
      clickableArea?.addEventListener("click", (event) => {
        event.preventDefault();
        accordions.forEach((someAccordion) => {
          if (someAccordion === accordion) return;
          someAccordion.classList.remove("active");
        });
        accordion.classList.toggle("active");
      });

      dropdown?.addEventListener("transitionend", () => {
        ScrollTrigger.refresh();
      });
    });
  });
}
