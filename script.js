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

document.addEventListener("DOMContentLoaded", function () {
  const navAbout = document.getElementById("assasin");
  const aboutValhalaSection = document.getElementById("asShow");

  if (navAbout && aboutValhalaSection) {
    navAbout.addEventListener("click", function () {
      aboutValhalaSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navAbout = document.getElementById("systems");
  const aboutValhalaSection = document.getElementById("reques");

  if (navAbout && aboutValhalaSection) {
    navAbout.addEventListener("click", function () {
      aboutValhalaSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navAbout = document.getElementById("sub");
  const aboutValhalaSection = document.getElementById("foot");

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
ScrollReveal().reveal(".inputContainer", { delay: 500 });
ScrollReveal().reveal(".emailBtn", { delay: 500 });
ScrollReveal().reveal(".item", { delay: 500 });


//Slider
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const img1 = document.querySelector(".item01");
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



//SlideShow
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next2");
let prev = document.getElementById("prev2");
let thumbnails = document.querySelectorAll(".thumbnail .item");

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};

prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 5000);
function showSlider() {
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");

  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

