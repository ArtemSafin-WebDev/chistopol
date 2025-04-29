export default function search() {
  const search = document.querySelector<HTMLElement>(".page-header__search");
  if (!search) return;

  const btn = search.querySelector<HTMLButtonElement>(
    ".page-header__search-btn"
  );

  const menuSearch = document.querySelector<HTMLButtonElement>(".menu__search");

  console.log("BTN", btn);

  btn?.addEventListener("click", (event) => {
    event.preventDefault();

    document.body.classList.toggle("search-shown");
  });

  menuSearch?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.remove("menu-open");
    document.body.classList.add("search-shown");
    console.log("Removing menu open");
  });

  search.addEventListener("mouseenter", () => {
    if (document.body.classList.contains("menu-open")) return;
    document.body.classList.add("search-shown");
  });
  search.addEventListener("mouseleave", () => {
    if (document.body.classList.contains("menu-open")) return;
    document.body.classList.remove("search-shown");
  });
}
