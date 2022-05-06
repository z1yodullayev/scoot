const elHamburgerBtn = document.querySelector(".hamburger")
let classe = document.querySelector('.header__list')
const elHeader = document.querySelector(".header")

elHamburgerBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header-open")
})
