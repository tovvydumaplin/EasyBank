const btnNavEl = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".header");
const btnNavX = document.querySelector(".btn-nav-close");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

btnNavX.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
