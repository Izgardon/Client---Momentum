//Variables for function of log in page
let loginFormBtn = document.querySelector(".login-form-btn");
let registerFormBtn = document.querySelector(".register-form-btn");
let formBtns = document.querySelector(".buttons");
let loginArrow = document.querySelector(".right");
let registerArrow = document.querySelector(".left");
let loginForm = document.querySelector(".login");
let registerForm = document.querySelector(".register");

//Variables that do the log in/register

let loginBtn = document.querySelector(".login-btn");
let registerBtn = document.querySelector(".register-btn");
let loginUsername = document.querySelector("#login-username");
let loginPassword = document.querySelector("#login-password");
let registerUsername = document.querySelector("#register-username");
let registerPassword = document.querySelector("#register-password");

//Log in page

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

//Log in action

loginBtn.addEventListener("click", (e) => {
  //requestLogin()

  if (loginPassword.value != "" && loginUsername != "") {
    window.location.href = "./habits.html";
  }
});

registerBtn.addEventListener("click", (e) => {
  //Check username hasnt been taken etc etc

  if (registerPassword.value != "" && registerUsername != "") {
    formBtns.classList.remove("hidden2");
    registerForm.classList.add("hidden1");
    setTimeout(() => {
      formBtns.classList.add("hidden1");
      loginForm.classList.remove("hidden2");
    }, 150);
  }
});
