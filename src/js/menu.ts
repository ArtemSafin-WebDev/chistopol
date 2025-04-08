export default function menu() {
  const menu = document.querySelector(".page-header");
  if (!menu) return;

  const open = document.querySelector<HTMLButtonElement>(
    ".page-header__menu-btn"
  );
  const close = document.querySelector<HTMLButtonElement>(".menu__close");

  const openMenu = () => {
    document.body.classList.add("menu-open");
  };
  const closeMenu = () => {
    document.body.classList.remove("menu-open");
  };

  open?.addEventListener("click", (event) => {
    event.preventDefault();
    openMenu();
  });

  close?.addEventListener("click", (event) => {
    event.preventDefault();
    closeMenu();
  });
}
