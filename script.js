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

//Page Links
document.addEventListener("DOMContentLoaded", function () {
  const scrollDownLink = document.getElementById("scrollDownLink");
  const aboutValhalaSection = document.getElementById("aboutValhala");

  if (scrollDownLink && aboutValhalaSection) {
    scrollDownLink.addEventListener("click", function () {
      aboutValhalaSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navAbout = document.getElementById("aboutt");
  const aboutValhalaSection = document.getElementById("aboutValhala");

  if (navAbout && aboutValhalaSection) {
    navAbout.addEventListener("click", function () {
      aboutValhalaSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

//Reveal Animations
ScrollReveal().reveal(".hero", { delay: 50 });
ScrollReveal().reveal(".mainSec", { delay: 300 });
ScrollReveal().reveal("header", { delay: 300 });
ScrollReveal().reveal(".scroll", { delay: 300 });
ScrollReveal().reveal(".leftContainer", { delay: 500 });
ScrollReveal().reveal(".rightContainer", { delay: 1000 });
ScrollReveal().reveal(".text", { delay: 500 });
ScrollReveal().reveal(".box", { delay: 1000 });


//Slider
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const img1 = document.querySelector(".item");
  const img2 = document.querySelector(".item1");
  const img3 = document.querySelector(".item2");

  let currentIndex = 1;
  let intervalId;

  const slides = [img1, img2, img3];
  const dots = document.querySelectorAll(".dot");

  function showImage(index) {
    slides.forEach((img, i) => {
      img.style.display = i + 1 === index ? "block" : "none";
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    dots[index - 1].classList.add("active");
  }

  function nextImage() {
    currentIndex = currentIndex === 3 ? 1 : currentIndex + 1;
    showImage(currentIndex);
    restartInterval();
  }

  function prevImage() {
    currentIndex = currentIndex === 1 ? 3 : currentIndex - 1;
    showImage(currentIndex);
    restartInterval();
  }

  function restartInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextImage, 3000);
  }

  intervalId = setInterval(nextImage, 3000);

  prevButton.addEventListener("click", function () {
    clearInterval(intervalId);
    prevImage();
  });

  nextButton.addEventListener("click", function () {
    clearInterval(intervalId);
    nextImage();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      clearInterval(intervalId);
      currentIndex = index + 1;
      showImage(currentIndex);
      restartInterval();
    });
  });
});
