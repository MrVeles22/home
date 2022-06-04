"use strict";

// burger menu
const burgerIcon = document.querySelector(".burger__icon");
const menuBody = document.querySelector(".header__menu");
if (burgerIcon) {
  burgerIcon.addEventListener("click", function (e) {
    document.body.classList.toggle("--locked");
    burgerIcon.classList.toggle("--active");
    menuBody.classList.toggle("--active");
  });
}
