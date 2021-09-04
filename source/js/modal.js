const openBtns = document.querySelectorAll(".modal-button");
const modalContainer = document.querySelector(".modal-container");
const modal = modalContainer.querySelector(".modal-container__modal");
const page = document.querySelector(".page");

openBtns.forEach( (btn) => {
  btn.addEventListener("click", (evt) => {
      evt.preventDefault();
      page.classList.add("page--with-modal");
      modalContainer.classList.add("modal-container--opened");
  });
});

modalContainer.addEventListener("click", (evt) => {
    if (evt.target == modalContainer) {
      page.classList.remove("page--with-modal");
      modalContainer.classList.remove("modal-container--opened");
    }
});


document.addEventListener("keydown", (evt) => {
    if (evt.key === "esc" || evt.key === "Escape") {
      page.classList.remove("page--with-modal");
      modalContainer.classList.remove("modal-container--opened");
    }
});
