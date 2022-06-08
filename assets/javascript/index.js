//Getting current username of logged in

function currentUser() {
  const username = localStorage.getItem("username");
  return username;
}

//logout of page
const logoutBtn = document.querySelector("#logout-btn");
logoutBtn.addEventListener("click", logout, (e) => {
  console.log("button clicked");
});

function logout() {
  localStorage.clear();
  location.hash = "";
  location.href = "index.html";
}

//Pulling all data of a user

async function getAllHabits(user) {
  try {
    const response = await fetch(`http://localhost:5005/habits/${user}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.warn(err);
  }
}

window.addEventListener("load", () => {
  let userData = getAllHabits(currentUser());
  loadProfile(userData);
});

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
