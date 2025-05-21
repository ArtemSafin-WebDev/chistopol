import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function subjectNumbers() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".subject-numbers")
  );
  elements.forEach((element) => {
    const items = Array.from(
      element.querySelectorAll<HTMLElement>(".subject-numbers__card-amount")
    );

    let mm = gsap.matchMedia();

    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=20%",
          },
          onComplete: () => {
            element.classList.add("animation-complete");
          },
        });
        tl.from(".subject-numbers__heading", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });
        tl.from(
          ".subject-numbers__learn-more",
          {
            autoAlpha: 0,
            duration: 0.7,
            y: 30,
          },
          ">-=0.3"
        );
        tl.addLabel("countersStart");
        tl.from(
          ".subject-numbers__list",
          {
            autoAlpha: 0,
            duration: 0.7,
            y: 30,
          },
          ">-=0.3"
        );

        items.forEach((item) => {
          const text = item.textContent?.trim() || "";
          const number = parseFloat(text.replace(/[^0-9.]/g, ""));
          const suffix = text.replace(/[0-9.]/g, "").trim();

          item.setAttribute("data-original-value", text);

          item.textContent = `0 ${suffix}`;

          tl.to(
            item,
            {
              duration: 2,
              snap: { textContent: 1 },
              ease: "power3.out",

              onUpdate: function () {
                const progress = this.progress();
                const currentValue = Math.floor(number * progress);
                item.textContent = `${currentValue.toLocaleString(
                  "ru-Ru"
                )} ${suffix}`;
              },
            },
            "countersStart"
          );
        });

        return () => {
          items.forEach((item) => {
            item.textContent = item.getAttribute("data-original-value") || "";
          });
        };
      },
      element
    );
    mm.add(
      "(max-width: 640px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=20%",
          },
          onComplete: () => {
            element.classList.add("animation-complete");
          },
        });
        tl.from(".subject-numbers__heading", {
          autoAlpha: 0,
          duration: 0.7,
          y: 30,
        });

        tl.addLabel("countersStart");
        tl.from(
          ".subject-numbers__list",
          {
            autoAlpha: 0,
            duration: 0.7,
            y: 30,
          },
          ">-=0.3"
        );

        items.forEach((item) => {
          const text = item.textContent?.trim() || "";
          const number = parseFloat(text.replace(/[^0-9.]/g, ""));
          const suffix = text.replace(/[0-9.]/g, "").trim();

          item.setAttribute("data-original-value", text);

          item.textContent = `0 ${suffix}`;

          tl.to(
            item,
            {
              duration: 2,
              snap: { textContent: 1 },
              ease: "power3.out",

              onUpdate: function () {
                const progress = this.progress();
                const currentValue = Math.floor(number * progress);
                item.textContent = `${currentValue.toLocaleString(
                  "ru-Ru"
                )} ${suffix}`;
              },
            },
            "countersStart"
          );
        });

        tl.from(
          ".subject-numbers__learn-more",
          {
            autoAlpha: 0,
            duration: 0.7,
          },
          "countersStart"
        );

        return () => {
          items.forEach((item) => {
            item.textContent = item.getAttribute("data-original-value") || "";
          });
        };
      },
      element
    );
  });
}
