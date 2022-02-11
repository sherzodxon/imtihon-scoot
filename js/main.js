const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const list = document.querySelector(".header__list");
const itemlink = document.querySelector(".header__item-link");
const item = document.querySelector(".header__item");
const item1 = document.querySelector(".header__item1");
const item2 = document.querySelector(".header__item2");
const yellow = document.querySelector(".yellow-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("header__burger--active");
  nav.classList.toggle("header__nav-active");
  list.classList.toggle("header__list--active");
  itemlink.classList.toggle("header__item-link-active");
  item.classList.toggle("header__item-active");
  item1.classList.toggle("header__item-active1");
  item2.classList.toggle("header__item-active2");
  yellow.classList.toggle("nav__active-link");
})
const first = document.querySelector(".faqs__first-button");
const firstcon = document.querySelector(".faqs__question-content-one")

first.addEventListener("click", function () {
  first.classList.toggle("faqs__first-button-active");
  firstcon.classList.toggle("faqs__question-content-active-one");
})
const second = document.querySelector(".faqs__second-button");
const secondcon = document.querySelector(".faqs__question-content-two")

second.addEventListener("click", function () {
  second.classList.toggle("faqs__second-button-active");
  secondcon.classList.toggle("faqs__question-content-active-two");
})
const three = document.querySelector(".faqs__three-button");
const threecon = document.querySelector(".faqs__question-content-three")

three.addEventListener("click", function () {
  three.classList.toggle("faqs__three-button-active");
  threecon.classList.toggle("faqs__question-content-active-three");
})
const four = document.querySelector(".faqs__four-button");
const fourcon = document.querySelector(".faqs__question-content-four")

four.addEventListener("click", function(){
  four.classList.toggle("faqs__four-button-active");
  fourcon.classList.toggle("faqs__question-content-active-four");
})
const five = document.querySelector(".faqs__five-button");
const fivecon = document.querySelector(".faqs__question-content-five")

five.addEventListener("click", function(){
  five.classList.toggle("faqs__five-button-active");
  fivecon.classList.toggle("faqs__question-content-active-five");
})
const six = document.querySelector(".faqs__six-button");
const sixcon = document.querySelector(".faqs__question-content-six")

six.addEventListener("click", function(){
  six.classList.toggle("faqs__six-button-active");
  sixcon.classList.toggle("faqs__question-content-active-six");
})