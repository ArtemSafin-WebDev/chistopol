import gsap from "gsap";
import { ScrollTrigger, Draggable, Flip, InertiaPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, Flip);

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

    const popoverContainer = element.querySelector<HTMLElement>(
      ".geography__popovers"
    );

    popoverContainer?.addEventListener("transitionend", () => {
      ScrollTrigger.refresh();
    });

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

        const pointWasActive = point.classList.contains("active");

        point.classList.toggle("active");
        if (!point.hasAttribute("data-open-info")) return;
        const selector = point.getAttribute("data-open-info");
        if (!selector) return;
        const matchingPopover = document.querySelector<HTMLElement>(selector);

        if (matchingPopover) {
          popovers.forEach((otherPopover) => {
            if (otherPopover !== matchingPopover)
              otherPopover.classList.remove("active");
            if (pointWasActive) {
              matchingPopover.classList.remove("active");
            } else {
              matchingPopover.classList.add("active");
            }
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
      const activePopover = popovers.find((popover) =>
        popover.classList.contains("active")
      );
      if (activePopover) {
        points.forEach((point) => point.classList.remove("active"));
        activePopover.classList.remove("active");
      } else {
        points.forEach((point) => point.classList.remove("active"));
      }
    });

    const mapWrapper = element.querySelector<HTMLElement>(
      ".geography__map-wrapper"
    );
    if (!mapWrapper) return;

    let mm = gsap.matchMedia();
    mm.add("(max-width: 640px)", () => {
      Draggable.create(mapWrapper, {
        type: "x",
        bounds: mapWrapper.parentElement,
        inertia: true,
        allowContextMenu: true,
      });
    });
    mm.add("(min-width: 641px)", () => {
      const products = document.querySelector<HTMLElement>(".our-products");
      if (!products) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".our-products",
          start: "bottom bottom",
          scrub: true,
          end: "bottom top+=30%",
        },
      });

      tl.from(".geography", {
        y: () => -1 * products.offsetHeight * 0.4,
        duration: 1,
        ease: "none",
      });
    });
  });
}
