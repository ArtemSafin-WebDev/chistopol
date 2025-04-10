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
        speed: 600,
        longSwipesRatio: 0.2,
      });

      return () => swiperInstance.destroy();
    });
    mm.add("(min-width: 641px)", () => {
      const swiperInstance = new Swiper(container, {
        modules: [Autoplay],
        slidesPerView: "auto",
        speed: 3000,
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
