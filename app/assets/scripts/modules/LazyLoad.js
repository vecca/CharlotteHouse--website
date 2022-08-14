class LazyLoad {
  constructor() {
    this.imgTargets = document.querySelectorAll("img[data-src]");
    this.events();
  }

  events() {
    const loadImg = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      // Replace src with data-src
      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });

      observer.unobserve(entry.target);
    };
    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: "-100px",
    });

    this.imgTargets.forEach((img) => imgObserver.observe(img));
  }
}

export default LazyLoad;
