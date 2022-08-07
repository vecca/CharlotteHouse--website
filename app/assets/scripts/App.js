import "../styles/styles.css";
import Gallery from "./modules/Gallery";
import Navigation from "./modules/Navigation";
import StickyNav from "./modules/StickyNav";

new Gallery();
new Navigation();
new StickyNav();

//closing menu after link is clicked
document.querySelector(".navWrap").addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    document.querySelector(".navToggle").checked = false;
  }
});

if (module.hot) {
  module.hot.accept();
}
