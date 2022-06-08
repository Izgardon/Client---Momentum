//HTML assets

//User profile
let habitDate = document.querySelector(".date");
let username = document.querySelector(".username");
let bestHabit = document.querySelector(".best-habit");
let worstHabit = document.querySelector(".worst-habit");

//Habits
let codeHabit = document.querySelector(".code");
let waterHabit = document.querySelector(".water");
let outdoorHabit = document.querySelector(".outdoor");
let projectHabit = document.querySelector(".project");
let codeChoiceBtn = document.querySelector(".code-choice");
let waterChoiceBtn = document.querySelector(".water-choice");
let outdoorChoiceBtn = document.querySelector(".outdoor-choice");
let projectChoiceBtn = document.querySelector(".project-choice");

//Getting current username of logged in

function currentUser() {
  const username = localStorage.getItem("username");
  return username;
}
//Pulling all data of a user

async function getAllData(user) {
  try {
    const response = await fetch(`http://localhost:5005/habits/${user}`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.warn(err);
  }
}

//logout of page
const logoutBtn = document.querySelector("#logout-btn");
logoutBtn.addEventListener("click", logout, (e) => {});

function logout() {
  localStorage.clear();
  location.hash = "";
  location.href = "index.html";
}

//Loading all data on page load

window.addEventListener("load", async () => {
  let userData = await getAllData(currentUser());
  loadProfile(userData[0]);
  console.log(userData[0]);
  if (userData[0].habits.code.active == true) {
    showCode();
  }
  if (userData[0].habits.water.active == true) {
    showWater();
  }
  if (userData[0].habits.outdoors.active == true) {
    showOutdoor();
  }
  if (userData[0].habits.projects.active == true) {
    showProject();
  }
});

function loadProfile(data) {
  let date = new Date();
  username.textContent = data.username;
  habitDate.textContent = date.toLocaleDateString("en-GB");
}

//Adding event listeners to new habit buttons

codeChoiceBtn.addEventListener("click", (e) => {
  addHabit("code");
  showCode();
});

waterChoiceBtn.addEventListener("click", () => {
  addHabit("water");
  showWater();
});
outdoorChoiceBtn.addEventListener("click", () => {
  addHabit("outdoors");
  showOutdoor();
});
projectChoiceBtn.addEventListener("click", () => {
  addHabit("projects");
  showProject();
});

function showCode() {
  codeHabit.classList.remove("hidden");
  setTimeout(() => {
    codeHabit.classList.remove("left");
  }, 1);
}
function showWater() {
  waterHabit.classList.remove("hidden");
  setTimeout(() => {
    waterHabit.classList.remove("left");
  }, 1);
}
function showOutdoor() {
  outdoorHabit.classList.remove("hidden");
  setTimeout(() => {
    outdoorHabit.classList.remove("left");
  }, 1);
}
function showProject() {
  projectHabit.classList.remove("hidden");
  setTimeout(() => {
    projectHabit.classList.remove("left");
  }, 1);
}

//Adding a habit permanently on screen

async function addHabit(habit) {
  let user = currentUser();
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      habit: habit,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch(`http://localhost:5005/habits/${user}`, options);
}

//All moving parts

const dailyBtn = document.querySelector(".new-daily-btn");
const newDailyLine = document.querySelector(".new-daily-habit-line");
const newDailySelection = document.querySelector(".new-daily-habit-selection");
const weeklyBtn = document.querySelector(".new-weekly-btn");
const newWeeklyLine = document.querySelector(".new-weekly-habit-line");
const newWeeklySelection = document.querySelector(
  ".new-weekly-habit-selection"
);

dailyBtn.addEventListener("click", () => {
  if (newDailyLine.classList.contains("out-wide-line")) {
    dailyBtn.classList.remove("spin-reverse");
    dailyBtn.classList.add("spin");
    newDailyLine.classList.remove("out-wide-line");
    newDailySelection.classList.remove("out-wide");
  } else {
    dailyBtn.classList.remove("spin");
    dailyBtn.classList.add("spin-reverse");
    newDailyLine.classList.add("out-wide-line");
    newDailySelection.classList.add("out-wide");
  }
});

weeklyBtn.addEventListener("click", () => {
  if (newWeeklyLine.classList.contains("out-wide-line")) {
    weeklyBtn.classList.remove("spin-reverse");
    weeklyBtn.classList.add("spin");
    newWeeklyLine.classList.remove("out-wide-line");
    newWeeklySelection.classList.remove("out-wide");
  } else {
    weeklyBtn.classList.remove("spin");
    weeklyBtn.classList.add("spin-reverse");
    newWeeklyLine.classList.add("out-wide-line");
    newWeeklySelection.classList.add("out-wide");
  }
});
