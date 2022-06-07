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
let loginError = document.querySelector(".login-error");
let registerError = document.querySelector(".register-error");

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

//login function

loginBtn.addEventListener("click", (e) => {
  loginError.textContent = "";
  if (loginPassword.value != "" && loginUsername.value != "") {
    let userDetails = {
      username: loginUsername.value,
      password: loginPassword.value,
    };

    requestLogin(userDetails);
  }
});

registerBtn.addEventListener("click", (e) => {
  registerError.textContent = "";

  if (registerPassword.value != "" && registerUsername != "") {
    let registerDetails = {
      username: registerUsername.value,
      password: registerPassword.value,
    };
    requestReg(registerDetails);
  }
});

async function requestLogin(userDetails) {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    };
    const r = await fetch(`http://localhost:5005/auth/login`, options);
    const data = await r.json();
    if (data.err) {
      loginError.textContent = "Incorrect username or password";
      throw Error(data.err);
    }
    login(data);
    loginUsername.value = "";
    loginPassword.value = "";

    window.location.href = "./habits.html";
  } catch (err) {
    console.warn(`Error: ${err}`);
  }
}

//If user attempts login without reg
async function requestReg(registerDetails) {
  try {
    const options = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(registerDetails),
    };
    const r = await fetch(`http://localhost:5005/auth/register`, options);
    const data = await r.json();
    if (data.err) {
      registerError.textContent = "Username already exists";
      throw Error(data.err);
    }
    registerUsername.value = "";
    registerPassword.value = "";
    moveToLogin();
  } catch (err) {
    console.warn(err);
  }
}

function login(data) {
  localStorage.setItem("username", data);
  location.hash = "";
}

//Helpers

function moveToLogin() {
  formBtns.classList.remove("hidden2");
  registerForm.classList.add("hidden1");
  setTimeout(() => {
    formBtns.classList.add("hidden1");
    loginForm.classList.remove("hidden2");
  }, 150);
}
