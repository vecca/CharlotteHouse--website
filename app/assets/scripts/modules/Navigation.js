class Navigation {
  constructor() {
    this.navLinks = document.querySelector(".nav__links");
    this.events();
  }
  events() {
    this.navLinks.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

export default Navigation;
