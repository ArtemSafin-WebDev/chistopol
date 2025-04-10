import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function geography() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".geography")
  );
  elements.forEach((element) => {
    const points = Array.from(
      element.querySelectorAll(".geography__point-item")
    );
    const popovers = Array.from(
      element.querySelectorAll<HTMLElement>(".geography__popover")
    );
    points.forEach((point) => {
      const button = point.querySelector<HTMLButtonElement>(
        ".geography__point-icon"
      );

      button?.addEventListener("click", (event) => {
        console.log("Clicked on the point");
        event.preventDefault();
        points.forEach((otherPoint) => {
          if (otherPoint !== point) otherPoint.classList.remove("active");
        });

        point.classList.toggle("active");
        if (!point.hasAttribute("data-open-info")) return;
        const selector = point.getAttribute("data-open-info");
        if (!selector) return;
        const matchingPopover = document.querySelector<HTMLElement>(selector);
        if (matchingPopover) {
          popovers.forEach((otherPopover) => {
            if (otherPopover !== matchingPopover)
              otherPopover.classList.remove("active");
            matchingPopover.classList.add("active");
          });
        } else {
          popovers.forEach((popover) => popover.classList.remove("active"));
        }
      });
    });

    element.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (
        target.matches(".geography__point-item") ||
        target.closest(".geography__point-item")
      )
        return;
      points.forEach((point) => point.classList.remove("active"));
      popovers.forEach((popover) => popover.classList.remove("active"));
    });
  });
}
