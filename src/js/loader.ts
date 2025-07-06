import gsap from "gsap";

export default async function loader() {
  const loader = document.querySelector<HTMLElement>(".loader");

  if (!loader) return;
  const loaderTitle = document.querySelector<HTMLElement>(".loader__title");
  const loaderLogo = document.querySelector<HTMLElement>(".loader__logo");
  const parts = document.querySelectorAll<HTMLElement>(".loader__logo path");

  const loaderAnimation = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        loader.remove();
        document.dispatchEvent(new CustomEvent("loader:hidden"));
        // window.sessionStorage.setItem("loaderShown", "Y");
      },
    });

    tl.to(parts, {
      clipPath: "inset(0% 0 0 0)",
      duration: 0.3,
      stagger: 0.2,
      ease: "power3.out",
    });

    tl.addLabel("logo");

    tl.to(loaderLogo, {
      yPercent: -250,
      duration: 1,
      ease: "power2.out",
      autoAlpha: 0,
    });

    tl.to(
      loaderTitle,
      {
        bottom: "50%",
        // xPercent: -50,
        yPercent: 50,
        ease: "power2.out",
        duration: 1,
      },
      "logo"
    );

    tl.to(loader, {
      clipPath: "inset(0% 0 100% 0)",
      duration: 1,
      ease: "power3.out",
    });

    return tl;
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(loaderAnimation());
    }, 1000);
  });
}
