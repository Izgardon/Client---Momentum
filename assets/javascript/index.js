let loginFormBtn = document.querySelector(".login-form-btn");
let registerFormBtn = document.querySelector(".register-form-btn");
let formBtns = document.querySelector(".buttons");
let loginArrow = document.querySelector(".right");
let registerArrow = document.querySelector(".left");

let loginForm = document.querySelector(".login");
let registerForm = document.querySelector(".register");

loginFormBtn.addEventListener("click", () => {
  formBtns.classList.add("hidden1");
  loginForm.classList.remove("hidden2");
});
registerFormBtn.addEventListener("click", () => {
  formBtns.classList.add("hidden2");
  registerForm.classList.remove("hidden1");
});
loginArrow.addEventListener("click", () => {
  formBtns.classList.remove("hidden1");
  loginForm.classList.add("hidden2");
});
registerArrow.addEventListener("click", () => {
  formBtns.classList.remove("hidden2");
  registerForm.classList.add("hidden1");
});
