const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
  burger.classList.toggle("header__burger--active");
  nav.classList.toggle("nav--opened");
  body.classList.toggle("freez");
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