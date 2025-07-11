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
import aboutGallery from "./aboutGallery";
import aboutIntro from "./aboutIntro";
import aboutHolding from "./aboutHolding";
import mission from "./mission";
import achievements from "./achivements";
import team from "./team";
import selects from "./selects";
import vacancies from "./vacancies";
import fileUpload from "./fileUpload";
import careerAdvantages from "./careerAdvantages";
import successStories from "./successStories";
import search from "./search";
import fancybox from "./fancybox";
import contacts from "./contacts";
import newsCatalog from "./newsCatalog";
import subjectsCategories from "./subjectsCategories";
import subjectIntro from "./subjectIntro";
import subjectNumbers from "./subjectNumbers";
import subjectDesc from "./subjectDesc";
import fixedHeader from "./fixedHeader";
import loader from "./loader";
import cookies from "./cookies";
import category from "./category";

document.addEventListener("DOMContentLoaded", async () => {
  smoothScrolling();
  modals();
  fileUpload();
  menu();
  fixedHeader();
  search();
  toggleVersions();
  intro();
  news();
  career();
  partners();
  ourProducts();
  geography();
  subjects();
  achievements();
  toggleVersions();
  forms();
  ourTeam();
  values();
  aboutIntro();
  aboutHolding();
  mission();
  aboutGallery();
  team();
  selects();
  vacancies();
  careerAdvantages();
  successStories();
  fancybox();
  contacts();
  newsCatalog();
  subjectsCategories();
  subjectIntro();
  subjectNumbers();
  subjectDesc();
  cookies();
  const categoryTl = category();
  const loaderTl = await loader();
  if (loaderTl) categoryTl?.play();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
