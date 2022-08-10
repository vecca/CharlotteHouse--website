class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.closeIcon = document.querySelector(".btn--close-modal");
    this.overlay = document.querySelector(".overlay");
    this.btnsOpenModal = document.querySelectorAll(".btn--show-modal");
    this.events();
  }

  events() {
    //console.log(this.btnsOpenModal);
    //listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal());
    this.overlay.addEventListener("click", () => this.closeTheModal());
    //this.btnsOpenModal.forEach((btn) => btn.addEventListener("click", this.openTheModal()));
    this.btnsOpenModal.forEach((el) => el.addEventListener("click", (e) => this.openTheModal(e)));
  }

  openTheModal() {
    this.modal.classList.remove("hidden");
    this.overlay.classList.remove("hidden");
  }

  closeTheModal() {
    this.modal.classList.add("hidden");
    this.overlay.classList.add("hidden");
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="modal hidden">
      <button class="btn--close-modal">&times;</button>
      <div class="modal__content">
        <h2 class="modal__header mb-sm">
          Secure your booking today!
        </h2>
        <p><a href="mailto:charlottehousebrisbane@gmail.com">charlottehousebrisbane@gmail.com</a></p>
        <a href="tel:+44 345 678 903">+44 345 678 903</a>
      </div>
    </div>
    <div class="overlay hidden"></div>
    `
    );
  }
}

export default Modal;
