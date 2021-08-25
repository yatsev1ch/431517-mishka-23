const menuToggle = document.querySelector(".page-header__menu-toggle");
const menuContainer = document.querySelector(".page-header__main-menu-container");

menuToggle.classList.add("page-header__menu-toggle--closed");
menuContainer.classList.add("page-header__main-menu-container--closed");

menuToggle.addEventListener("click", (evt) => {
  let isOpened = menuToggle.classList.contains("page-header__menu-toggle--opened");
  if (!isOpened) {
    menuToggle.classList.remove("page-header__menu-toggle--closed");
    menuContainer.classList.remove("page-header__main-menu-container--closed");
    menuToggle.classList.add("page-header__menu-toggle--opened");
    menuContainer.classList.add("page-header__main-menu-container--opened");
  } else if (isOpened) {
    // menuToggle.classList.remove("page-header__menu-toggle--opened");
    // menuContainer.classList.remove("page-header__main-menu-container--opened");

    menuToggle.classList.remove("page-header__menu-toggle--opened");
    menuContainer.classList.remove("page-header__main-menu-container--opened");
    menuToggle.classList.add("page-header__menu-toggle--closed");
    menuContainer.classList.add("page-header__main-menu-container--closed");
  }
});
