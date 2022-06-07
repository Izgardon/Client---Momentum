//All things habits

function currentUser() {
  const username = localStorage.getItem("username");
  console.log(username);
}


//logout of page
const logoutBtn = document.querySelector("#logout-btn")
logoutBtn.addEventListener("click", logout, (e) => {
  console.log("button clicked")
})
function logout() {
  localStorage.clear();
  location.hash = "";
  location.href="index.html";
}

currentUser();

async function getAllHabits() {
  try {
    const response = await fetch("");
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
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
