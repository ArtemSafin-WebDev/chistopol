import Swiper from "swiper";
import "swiper/css";

export default function partners() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".partners")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      speed: 600,
      slidesPerView: "auto",
    });
  });
}
