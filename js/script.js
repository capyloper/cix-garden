// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click outside sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Change color on scroll
const nav = document.querySelector("nav");
const header = document.querySelector("header");

const options = {
  rootMargin: "-12%",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.remove("changeColor");
    } else {
      nav.classList.add("changeColor");
    }
  });
}, options);

observer.observe(header);

// Carousel
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});