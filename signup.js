$(document).ready(function () {
  const userName = $("#username");
  const email = $("#signup");
  const password = $("#password");
  const button = $(".btn");
  const emailError = $("#emailError");
  const passwordError = $("#passwordError");
  const usernameError = $("#usernameError");

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function saveUserData() {
    const userData = {
      username: userName.val(),
      email: email.val(),
      password: password.val(),
    };

    localStorage.setItem("userData", JSON.stringify(userData));
  }

  function displayStoredUserData() {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      console.log(storedUserData);
    }
  }

  displayStoredUserData();

  button.on("click", function (event) {
    event.preventDefault();

    emailError.css("display", "none");
    passwordError.css("display", "none");
    usernameError.css("display", "none");

    if (email.val().length === 0) {
      emailError.css("display", "block");
      emailError.html("Input can't be empty");
      email.css("border", "1px solid red");
    } else if (!validateEmail(email.val())) {
      emailError.css("display", "block");
      emailError.html("Invalid email format");
      email.css("border", "1px solid red");
    }
    else{
      emailError.css("display", "none");
      email.css("border", "1px solid white");
    }

    if (password.val().length === 0) {
      passwordError.css("display", "block");
      passwordError.html("Input can't be empty");
      password.css("border", "1px solid red");
    } else if (password.val().length > 0 && password.val().length < 8) {
      passwordError.css("display", "block");
      passwordError.html("Password must have at least 8 characters");
      password.css("border", "1px solid red");
    }
    else{
      passwordError.css("display", "none");
      password.css("border", "1px solid white");
    }

    if (userName.val().length === 0) {
      usernameError.css("display", "block");
      usernameError.html("Input can't be empty");
      userName.css("border", "1px solid red");
    }
    else{
      usernameError.css("display", "none");
      userName.css("border", "1px solid white");
    }

    if (
      email.val().length > 0 &&
      validateEmail(email.val()) &&
      password.val().length >= 8 &&
      userName.val().length > 0
    ) {
      saveUserData();
      alert("Congratulations! You've successfully registered.");
      displayStoredUserData();
      window.location.href = "index.html";
    }
  });
});

$(document).ready(function () {
  const signInEmail = $("#signin");
  const signInPassword = $("#password");
  const signInButton = $(".btn01");

  signInButton.on("click", function (event) {
    event.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!storedUserData) {
      alert("No registered users found. Please sign up first.");
      return;
    }

    if (
      storedUserData.email === signInEmail.val() &&
      storedUserData.password === signInPassword.val()
    ) {
      alert("Successfully logged in!");

      window.location.href = "index.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});
