import Swiper from "swiper";
import { Navigation, Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

export default function aboutGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".about-gallery")
  );
  elements.forEach((element) => {
    const thumbsSlider = element.querySelector<HTMLElement>(
      ".about-gallery__thumbs-slider"
    );
    const mainSlider = element.querySelector<HTMLElement>(
      ".about-gallery__main-slider"
    );

    if (!thumbsSlider || !mainSlider) return;

    const mainContainer = mainSlider.querySelector<HTMLElement>(".swiper");
    const thumbsContainer = thumbsSlider.querySelector<HTMLElement>(".swiper");

    if (!mainContainer || !thumbsContainer) return;

    const thumbsSwiper = new Swiper(thumbsContainer, {
      modules: [Navigation, Thumbs],
      slidesPerView: "auto",
      centeredSlides: false,
      centerInsufficientSlides: true,
    });

    new Swiper(mainContainer, {
      modules: [Navigation, Thumbs, Pagination],
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 700,
      thumbs: {
        swiper: thumbsSwiper,
      },
      pagination: {
        type: "bullets",
        el: element.querySelector<HTMLElement>(".about-gallery__pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: element.querySelector<HTMLElement>(
          ".about-gallery__arrow--next"
        ),
        prevEl: element.querySelector<HTMLElement>(
          ".about-gallery__arrow--prev"
        ),
      },
    });
  });
}
