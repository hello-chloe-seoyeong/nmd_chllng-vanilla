const form = document.querySelector('#login-form');
const loginName = form.querySelector('#login-name');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function handleLogin(e) {
  e.preventDefault();
  const usernameValue = loginName.value;
  form.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, usernameValue)

  paintingGreeting(usernameValue);
}

function paintingGreeting(username) {
  greeting.innerHTML = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
  form.classList.remove(HIDDEN_CLASSNAME)
  form.addEventListener('submit', handleLogin);
} else {
  paintingGreeting(savedUsername)
}

