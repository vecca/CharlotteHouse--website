import "../styles/styles.css";
import Gallery from "./modules/Gallery";
import Navigation from "./modules/Navigation";
import StickyNav from "./modules/StickyNav";
import Modal from "./modules/Modal";
import LazyLoad from "./modules/LazyLoad";
import RevealSection from "./modules/RevealSection";

new Gallery();
new Navigation();
new StickyNav();
new Modal();
new LazyLoad();
new RevealSection();

//closing menu after link is clicked
document.querySelector(".navWrap").addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    document.querySelector(".navToggle").checked = false;
  }
});

if (module.hot) {
  module.hot.accept();
}
