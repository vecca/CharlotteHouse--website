import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

class Gallery {
  constructor() {
    this.litegallery = document.getElementById("lightgallery");
    this.events();
  }

  events() {
    lightGallery(this.litegallery, {
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
    });
  }
}

export default Gallery;
