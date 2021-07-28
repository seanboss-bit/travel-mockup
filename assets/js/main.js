const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar-container");
const formBtn = document.querySelector("#login-btn");
const closeForm = document.querySelector("#form-close");
const form = document.querySelector(".login-form-container");
const menuBar = document.querySelector("#menu-bar");
const nav = document.querySelector(".navbar");
const videoBtn = document.querySelectorAll(".vid-btn");
window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menuBar.classList.remove("fa-times");
  nav.classList.remove("active");
  form.classList.add("activenot");
};
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  form.classList.add("active");
});
closeForm.addEventListener("click", () => {
  form.classList.remove("active");
});

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  nav.classList.toggle("active");
});
videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    const src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
