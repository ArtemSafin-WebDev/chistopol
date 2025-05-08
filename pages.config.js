import home from "./pages-data/home";
import about from "./pages-data/about";
import team from "./pages-data/team";
import career from "./pages-data/career";
import forPartners from "./pages-data/forPartners";
import news from "./pages-data/newsCatalogIntro";
import newsDetail from "./pages-data/newsDetail";
import newsDetail2 from "./pages-data/newsDetail2";
import contacts from "./pages-data/contacts";
import notFound from "./pages-data/notFound";

const pagesConfig = {
  ...home,
  ...about,
  ...team,
  ...career,
  ...forPartners,
  ...news,
  ...newsDetail,
  ...newsDetail2,
  ...contacts,
  ...notFound,
};

export default pagesConfig;
