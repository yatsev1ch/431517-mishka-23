const menuToggle = document.querySelector(".page-header__menu-toggle");
const menuContainer = document.querySelector(".page-header__main-menu-container");

menuToggle.addEventListener("click", (evt) => {
  if (!menuToggle.classList.contains("page-header__menu-toggle--active")) {
    menuToggle.classList.add("page-header__menu-toggle--active");
    menuContainer.classList.add("page-header__main-menu-container--active");
  } else if (menuToggle.classList.contains("page-header__menu-toggle--active")) {
    menuToggle.classList.remove("page-header__menu-toggle--active");
    menuContainer.classList.remove("page-header__main-menu-container--active");
  }
});
