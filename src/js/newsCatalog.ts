import gsap from "gsap";

import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default function newsCatalog() {
  const elements = document.querySelectorAll<HTMLElement>(".news-catalog");
  elements.forEach((element) => {
    const modalInner = element.querySelector<HTMLElement>(
      ".news-catalog__filters-modal-inner"
    );
    const modal = element.querySelector<HTMLElement>(
      ".news-catalog__filters-modal"
    );
    const draggableArea = element.querySelector<HTMLElement>(
      ".news-catalog__filters-modal-draggable-area"
    );
    const dragWrapper = element.querySelector<HTMLElement>(
      ".news-catalog__filters-modal-drag-wrapper"
    );
    const selectDropdowns = Array.from(
      document.querySelectorAll<HTMLElement>(".news-catalog__select-dropdown")
    );
    if (!modalInner || !draggableArea || !modal || !dragWrapper) return;

    let instance: Draggable | null = null;
    function reset() {
      gsap.set(dragWrapper, { y: 0, yPercent: 0 });
      instance?.enable();
    }

    function animateOut() {
      instance?.disable();
      const tl = gsap.timeline();
      tl.to(dragWrapper, {
        yPercent: 100,
        duration: 1,
        ease: "circ",
      })
        .add(() => {
          modal?.classList.remove("active");
          document.body.classList.remove("modal-open");
        }, "<+=0.5")
        .then(reset);
    }

    function restore() {
      instance?.disable();
      const tl = gsap.timeline();
      tl.to(dragWrapper, {
        y: 0,
        yPercent: 0,
        duration: 0.4,
        ease: "circ",
      }).then(() => {
        instance?.enable();
      });
    }

    instance = new Draggable(dragWrapper, {
      axis: "y",
      //   bounds: modalInner,
      edgeResistance: 0.3,
      trigger: draggableArea,
      type: "y",
      liveSnap: {
        y: function (y) {
          if (y < 0) return 0; // Restricts dragging to down
          return y;
        },
      },
      onDrag: function () {
        if (this.y > 120) {
          animateOut();
        }
      },
      //   onRelease: function () {
      //     if (this.y <= 120) {
      //       restore();
      //     }
      //   },
      onDragEnd: function () {
        if (this.y > 120) {
          animateOut();
        } else {
          restore();
        }
      },
    });

    selectDropdowns.forEach((dropdown) => {
      dropdown.addEventListener("transitionend", () => {
        instance?.update();
      });
    });
  });
}
