import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function careerAdvantages() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".career-advantages__card")
  );

  elements.forEach((element, elementIndex) => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 640px)", () => {
      const btn = element.querySelector<HTMLButtonElement>(
        ".career-advantages__card-title"
      );
      const dropdown = element.querySelector<HTMLElement>(
        ".career-advantages__card-dropdown"
      );
      const handleClick = (event: MouseEvent) => {
        window.leaveButtonsAtTheSameState = true;
        event.preventDefault();
        elements.forEach((otherElement) => {
          if (otherElement === element) return;
          otherElement.classList.remove("active");
        });
        element.classList.toggle("active");
      };

      const handleLayoutChange = () => {
        ScrollTrigger.refresh();
        window.leaveButtonsAtTheSameState = false;
      };

      btn?.addEventListener("click", handleClick);
      dropdown?.addEventListener("transitionend", handleLayoutChange);
      if (elementIndex === 0) element.classList.add("active");

      return () => {
        btn?.removeEventListener("click", handleClick);
        dropdown?.removeEventListener("transitionend", handleLayoutChange);
        element.classList.remove("active");
      };
    });
  });
}
