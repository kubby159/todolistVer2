const loginInput = document.querySelector(".login-form input");
const loginForm = document.querySelector(".login-form");
const loginBox = document.querySelector(".login__box");
const greetingBox = document.querySelector(".greeting-box h1");
const greetingBoxParent = document.querySelector(".greeting-box");
const todolistBox = document.querySelector(".todolist-box");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginInput.value = "";
  loginBox.classList.add("hidden");
  localStorage.setItem("USERNAME_KEY", userName);
  paintGreeting(userName);
}

function paintGreeting(userName) {
  greetingBox.innerText = `Nice to Meet you, ${userName}`;
  greetingBoxParent.classList.remove("hidden");
}

const savedUserName = localStorage.getItem("USERNAME_KEY");

if (savedUserName === null) {
  loginBox.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginBox.classList.add("hidden");

  paintGreeting(savedUserName);
}
