// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

