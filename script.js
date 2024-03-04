// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section
let sections = document.querySelector("section");
let navLinks = document.querySelector("header nav a");

// nav bar active

navbar.addEventListener("click", () => {
  document.querySelector("a[href*=home]").classList.remove("active");
  document.querySelector("a[href*=" + id + "]").classList.add("active");
});

// scroll section

window.onscroll = () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
