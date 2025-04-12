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
import ourTeam from "./ourTeam";
import values from "./values";

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
  geography();
  subjects();

  toggleVersions();
  forms();
  ourTeam();
  values();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
