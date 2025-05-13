import gsap from "gsap";
import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);

type Version = "clear" | "decorated";

export default function toggleVersions() {
  const btns = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".page-header__toggle-btn")
  );

  let version: Version = "clear";
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
        version = "decorated";
        document.body.classList.add("decorated");
        window.localStorage.setItem("page_version", "decorated");
      } else {
        btns[0].classList.remove("active");
        version = "clear";
        document.body.classList.remove("decorated");
        window.localStorage.setItem("page_version", "clear");
      }
      btn.classList.add("active");

      Flip.from(state, {
        ease: "power1.inOut",
        duration: 0.2,
      });
    });
  });

  const versionPreference = window.localStorage.getItem(
    "page_version"
  ) as Version | null;

  if (versionPreference && versionPreference === "decorated") {
    btns[0]?.click();
  }
}
