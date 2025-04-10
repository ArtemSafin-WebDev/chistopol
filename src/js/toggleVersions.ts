import gsap from "gsap";
import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);

export default function toggleVersions() {
  const btns = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".page-header__toggle-btn")
  );

  let version: "clear" | "decored" = "clear";
  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      if (btn.classList.contains("active")) return;
      const state = Flip.getState(
        ".page-header__toggle-marker, .page-header__toggle",
        {
          props: "backgroundColor",
        }
      );
      if (version === "clear") {
        btns[1].classList.remove("active");
        version = "decored";
      } else {
        btns[0].classList.remove("active");
        version = "clear";
      }
      btn.classList.add("active");

      Flip.from(state, {
        ease: "power1.inOut",
        duration: 0.2,
      });
    });
  });
}
