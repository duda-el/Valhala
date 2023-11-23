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

ScrollReveal().reveal('.hero', { delay: 50 });
ScrollReveal().reveal('.mainSec', { delay: 300 });
ScrollReveal().reveal('header', { delay: 300 });
ScrollReveal().reveal('.scroll', { delay: 300 });
ScrollReveal().reveal('.leftContainer', { delay: 1000 });
ScrollReveal().reveal('.rightContainer', { delay: 2000 });


document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const img1 = document.querySelector(".item");
  const img2 = document.querySelector(".item1");
  const img3 = document.querySelector(".item2");

  let currentIndex = 1; // 

  prevButton.addEventListener("click", function() {
    if (currentIndex === 2) {
      img2.style.display = "none";
      img1.style.display = "block";
      currentIndex = 1;
    } else if (currentIndex === 3) {
      img3.style.display = "none";
      img2.style.display = "block";
      currentIndex = 2;
    }
  });

  nextButton.addEventListener("click", function() {
    if (currentIndex === 1) {
      img1.style.display = "none";
      img2.style.display = "block";
      currentIndex = 2;
    } else if (currentIndex === 2) {
      img2.style.display = "none";
      img3.style.display = "block";
      currentIndex = 3;
    }
  });
});


