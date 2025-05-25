import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function values() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".values")
  );

  elements.forEach((element) => {
    const accordions = Array.from(
      element.querySelectorAll<HTMLElement>(".values__accordion")
    );

    accordions.forEach((accordion) => {
      const clickableArea = accordion.querySelector<HTMLElement>(
        ".values__accordion-clickable-area"
      );

      if (!clickableArea) return;

      clickableArea.addEventListener("click", (event) => {
        window.leaveButtonsAtTheSameState = true;
        event.preventDefault();
        accordions.forEach((otherAccordion) => {
          if (otherAccordion !== accordion)
            otherAccordion.classList.remove("active");
        });
        accordion.classList.toggle("active");
      });

      const dropdown = accordion.querySelector<HTMLElement>(
        ".values__accordion-dropdown"
      );
      if (!dropdown) return;
      dropdown.addEventListener("transitionend", () => {
        ScrollTrigger.refresh();
        window.leaveButtonsAtTheSameState = false;
      });
    });
  });
}
