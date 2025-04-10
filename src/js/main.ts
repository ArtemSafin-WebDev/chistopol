import "virtual:svg-icons-register";
import "../scss/style.scss";
import career from "./career";
import news from "./news";
import partners from "./partners";
import ourProducts from "./ourProducts";
import subjects from "./subjects";
import intro from "./intro";
import menu from "./menu";
import smoothScrolling from "./smoothScrolling";
import geography from "./geography";
import toggleVersions from "./toggleVersions";
import modals from "./modals";
import forms from "./forms";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
  modals();
  menu();
  toggleVersions();
  intro();
  news();
  career();
  partners();
  ourProducts();
  subjects();
  geography();
  toggleVersions();
  forms();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
