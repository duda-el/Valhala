$(document).ready(function () {
  const signInLink = $(".reg .lang:eq(1) a");
  const signInContainer = $(".singContainer");
  const closeButton = $(".singContainer .close1");

  const signUpLink = $(".lang:eq(0) a");
  const signUpContainer = $(".singUpContainer");
  const closeButtonSignUp = $(".singUpContainer .closeSignUp");

  const toggleLinks = $(".links a");

  function openSignInContainer(event) {
    event.preventDefault();
    signUpContainer.css("display", "none");
    signInContainer.css("display", "flex");
    $("body").addClass("no-scroll");
  }

  function closeSignInContainer() {
    signInContainer.css("display", "none");
    $("body").removeClass("no-scroll");
  }

  function openSignUpContainer(event) {
    event.preventDefault();
    signInContainer.css("display", "none");
    signUpContainer.css("display", "flex");
    $("body").addClass("no-scroll");
  }

  function closeSignUpContainer() {
    signUpContainer.css("display", "none");
    $("body").removeClass("no-scroll");
  }

  function toggleContainers(event) {
    event.preventDefault();
    if (signInContainer.css("display") === "flex") {
      signUpContainer.css("display", "flex");
      signInContainer.css("display", "none");
    } else {
      signInContainer.css("display", "flex");
      signUpContainer.css("display", "none");
    }
    $("body").addClass("no-scroll");
  }

  signInLink.on("click", openSignInContainer);
  closeButton.on("click", closeSignInContainer);

  signUpLink.on("click", openSignUpContainer);
  closeButtonSignUp.on("click", closeSignUpContainer);

  toggleLinks.on("click", toggleContainers);
});
