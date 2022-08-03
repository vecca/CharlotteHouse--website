import "../styles/styles.css";
import Gallery from "./modules/Gallery";

new Gallery();

if (module.hot) {
  module.hot.accept();
}
