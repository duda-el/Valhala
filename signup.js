const userName = document.getElementById("username");
const email = document.querySelector("#signup");
const password = document.querySelector("#password");
const button = document.querySelector(".btn");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");


function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (email.value.length === 0) {
    emailError.style.display = "block";
    emailError.innerHTML = "Input can't be empty";
    email.style.border = "1px solid red";
  } else if (!validateEmail(email.value)) {
    emailError.style.display = "block";
    emailError.innerHTML = "Invalid email format";
    email.style.border = "1px solid red";
  } else {
    emailError.style.display = "none";
    email.style.border = "1px solid white";
  }

  if (password.value.length === 0) {
    passwordError.style.display = "block";
    passwordError.innerHTML = "Input can't be empty";
    password.style.border = "1px solid red";
  } else if (password.value.length > 0 && password.value.length < 8) {
    passwordError.style.display = "block";
    passwordError.innerHTML = "Password must have at least 8 characters";
    password.style.border = "1px solid red";
  } else {
    passwordError.style.display = "none";
    password.style.border = "1px solid white";
  }

  if (userName.value.length === 0) {
    usernameError.style.display = "block";
    usernameError.innerHTML = "Input can't be empty";
    userName.style.border = "1px solid red";
  } else {
    usernameError.style.display = "none";
    userName.style.border = "1px solid white";
  }
});
