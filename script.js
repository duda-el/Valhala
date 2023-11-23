//navBar
const menuOpen = document.querySelector(".men");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});



document.addEventListener('DOMContentLoaded', function() {
  const scrollDownLink = document.getElementById('scrollDownLink');
  const aboutValhalaSection = document.getElementById('aboutValhala');

  if (scrollDownLink && aboutValhalaSection) {
    scrollDownLink.addEventListener('click', function() {
      aboutValhalaSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

ScrollReveal().reveal('.mainSec', { delay: 300 });
ScrollReveal().reveal('header', { delay: 300 });
ScrollReveal().reveal('.scroll', { delay: 300 });
ScrollReveal().reveal('.hero', { delay: 50 });
