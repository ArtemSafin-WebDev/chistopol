import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";

export default function ourProducts() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".our-products")
  );
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    mm.add("(max-width: 640px)", () => {
      const swiperInstance = new Swiper(container, {
        slidesPerView: "auto",
        speed: 400,
        longSwipesRatio: 0.2,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=20%",
        },
      });

      tl.from(".our-products__heading", {
        autoAlpha: 0,
        duration: 0.7,
        y: 30,
      });
      tl.addLabel("beforeCards");
      tl.from(
        ".our-products__slider-card",
        {
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.2,
          y: 30,
        },
        ">-=0.3"
      );
      tl.from(
        ".our-products__catalog",
        {
          autoAlpha: 0,
          duration: 0.7,
        },
        "beforeCards"
      );

      return () => swiperInstance.destroy();
    });
    mm.add("(min-width: 641px)", () => {
      const swiperInstance = new Swiper(container, {
        modules: [Autoplay],
        slidesPerView: "auto",
        speed: 5000,
        longSwipesRatio: 0.2,
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
        },

        loop: true,
        on: {
          autoplayStop: () => {
            swiperInstance.params.speed = 600;
            swiperInstance.update();
          },
        },
      });

      return () => swiperInstance.destroy();
    });
  });
}
