class RevealSection {
  constructor() {
    this.allSections = document.querySelectorAll(".reveal");
    this.events();
    console.log("hello");
  }

  events() {
    const revealSection = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    };
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    this.allSections.forEach((section) => {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });
  }
}

export default RevealSection;
