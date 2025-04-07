import "virtual:svg-icons-register";
import "../scss/style.scss";
import career from "./career";
import news from "./news";
import partners from "./partners";
import ourProducts from "./ourProducts";
import subjects from "./subjects";
import intro from "./intro";

document.addEventListener("DOMContentLoaded", () => {
  intro();
  news();
  career();
  partners();
  ourProducts();
  subjects();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
