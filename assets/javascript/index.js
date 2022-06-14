//HTML assets

//User profile
let habitDate = document.querySelector(".date");
let username = document.querySelector(".username");
let bestHabit = document.querySelector(".best-habit");
let worstHabit = document.querySelector(".worst-habit");
let skillLevel = document.querySelector(".skill-level");

//Adding or removing Habits
let codeHabit = document.querySelector(".code");
let waterHabit = document.querySelector(".water");
let outdoorHabit = document.querySelector(".outdoor");
let projectHabit = document.querySelector(".project");
let codeChoiceBtn = document.querySelector(".code-choice");
let waterChoiceBtn = document.querySelector(".water-choice");
let outdoorChoiceBtn = document.querySelector(".outdoor-choice");
let projectChoiceBtn = document.querySelector(".project-choice");

//Habits progress

let incrementBtns = document.querySelectorAll(".habit-plus");
let codeProgress = document.querySelector(".code-progress");
let waterProgress = document.querySelector(".water-progress");
let outdoorsProgress = document.querySelector(".outdoors-progress");
let projectsProgress = document.querySelector(".projects-progress");
let codeText = document.querySelector(".code-text");
let waterText = document.querySelector(".water-text");
let outdoorsText = document.querySelector(".outdoors-text");
let projectsText = document.querySelector(".projects-text");

//Variables

let habitArray = ["code", "water", "outdoors", "projects"];

//Getting current username of logged in

function currentUser() {
  const username = localStorage.getItem("username");
  return username;
}
//Pulling all data of a user

async function getAllData(user) {
  try {
    const response = await fetch(
      `https://momentum-appnodejs.herokuapp.com/habits/${user}`
    );
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

/* window.onbeforeunload = function () {
  logout();
}; */

//Loading all data on page load

window.addEventListener("load", async () => {
  let date = new Date();
  let userData = await getAllData(currentUser());

  /* await checkDate(userData[0].date, date); */
  loadProfile(userData[0]);
  checkForHabits(userData[0]);
  updatingHabits(userData[0], habitArray);
});

//Checking date to refresh or not

async function checkDate(oldDate, currentDate) {
  console.log(`https://momentum-appnodejs.herokuapp.com/habits/date/${user}`);
  let newDate = currentDate.toLocaleDateString("en-GB").toString().slice(0, 10);

  if (oldDate != newDate) {
    let user = currentUser();
    const options = {
      method: "PATCH",
      body: JSON.stringify({
        date: newDate,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    await fetch(
      `https://momentum-appnodejs.herokuapp.com/habits/date/${user}`,
      options
    );
    updatingHabits();
  }
}

//Loading profile

function loadProfile(data) {
  let dateText = new Date();
  let skill = "";
  if (data.habits.code.max == 2) {
    skill = "Noob";
  } else if (data.habits.code.max == 4) {
    skill = "Beginner";
  } else if (data.habits.code.max == 6) {
    skill = "Knowledgeable";
  } else if (data.habits.code.max == 8) {
    skill = "Master";
  }
  username.textContent = data.username;
  habitDate.textContent = dateText.toLocaleDateString("en-GB");
  skillLevel.textContent = skill;
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

  await fetch(
    `https://momentum-appnodejs.herokuapp.com/habits/${user}`,
    options
  );
}

function checkForHabits(data) {
  if (data.habits.code.active == true) {
    showCode();
  }
  if (data.habits.water.active == true) {
    showWater();
  }
  if (data.habits.outdoors.active == true) {
    showOutdoor();
  }
  if (data.habits.projects.active == true) {
    showProject();
  }
}

//Incrementing Habits

//Buttons that work for each depending on ID, calls update function above

incrementBtns.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    let type = e.target.id;
    let user = currentUser();
    const options = {
      method: "PATCH",
      body: JSON.stringify({
        type: type,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    let response = await fetch(
      `https://momentum-appnodejs.herokuapp.com/habits/${user}`,
      options
    );
    const data = await response.json();
    updatingHabits(data, habitArray);
  });
});

//Function that increments habits on the page - either on load or when called

function updatingHabits(data, arr) {
  let ratioArray = [];
  arr.forEach((habit) => {
    //Creating ratio array for profile
    let ratio = `${
      (eval(`data.habits.${habit}`).current /
        eval(`data.habits.${habit}`).max) *
      100
    }%`;
    ratioArray.push(parseInt(ratio));
    //Checks on bar (to see if full/empty/part way (dont want to divide by 0))
    if (eval(`data.habits.${habit}`).current == 0) {
      eval(`${habit}Progress`).style.width = "0";
    }
    //Checking if bar should be full
    else if (
      eval(`data.habits.${habit}`).current >= eval(`data.habits.${habit}`).max
    ) {
      eval(`${habit}Progress`).style.width = "100%";
    }
    //Checking if streak needs to be added, if so only once for that day
    else if (
      eval(`data.habits.${habit}`).max -
        eval(`data.habits.${habit}`).current ===
      1
    ) {
      incrementStreaks(data, habit);
      eval(`${habit}Progress`).style.width = ratio;
    }
    //Adjusting width of bar if not 0 or 100
    else {
      eval(`${habit}Progress`).style.width = ratio;
    }
    updatingHabitText(data, habit);
    updatingStreaks(data, habit);
  });
  updatingProfileHabit(ratioArray);
}

//Updating the text above each habit

function updatingHabitText(data, habit) {
  if (habit == "code") {
    let current = eval(`data.habits.${habit}`).current;
    let max = eval(`data.habits.${habit}`).max;
    codeText.textContent = `You have completed ${current} out of ${max} hours today!`;
  }
  if (habit == "water") {
    let current = eval(`data.habits.${habit}`).current;
    let max = eval(`data.habits.${habit}`).max;
    waterText.textContent = `You have consumed ${current} out of ${max} glasses today!`;
  }
  if (habit == "outdoors") {
    let current = eval(`data.habits.${habit}`).current;
    let max = eval(`data.habits.${habit}`).max;
    outdoorsText.textContent = `You adventured ${current} out of ${max} hours today!`;
  }
  if (habit == "projects") {
    let current = eval(`data.habits.${habit}`).current;
    let max = eval(`data.habits.${habit}`).max;
    projectsText.textContent = `You have completed ${current} out of ${max} projects this week!`;
  }
}

//Updating the best and worst streaks

function updatingProfileHabit(ratioArray) {
  ratioArray.pop();
  let max = Math.max(...ratioArray);
  let min = Math.min(...ratioArray);

  let maxIndex = ratioArray.indexOf(max);
  let minIndex = ratioArray.indexOf(min);
  let returnHabit = (index, zeroCheck) => {
    if (zeroCheck == 0) {
      return "You haven't done anything!";
    } else if (index == 0) {
      return "Coding code";
    } else if (index == 1) {
      return "Drinking water";
    } else if (index == 2) {
      return "Going outside";
    }
  };
  bestHabit.textContent = returnHabit(maxIndex, max);
  worstHabit.textContent = returnHabit(minIndex);
}

//Adding to streaks and other effects

async function incrementStreaks(data, habit) {
  let userData = await getAllData(currentUser());

  if (eval(`userData[0].streaks.${habit}.max`) != true) {
    let user = currentUser();
    const options = {
      method: "PATCH",
      body: JSON.stringify({
        streaks: habit,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    await fetch(
      `https://momentum-appnodejs.herokuapp.com/habits/streaks/${user}`,
      options
    );
  }
}

//Adding streak pictures

function updatingStreaks(data, habit) {
  let streakBox = document.querySelector(`.${habit}-streak-box`);
  streakBox.innerHTML = "";
  let numberOfStreaks = eval(`data.streaks.${habit}`).current;
  let streakStr = `<img
  src="./assets/images/rocket.png"
  alt="Streak symbol"
  class="streak-image"
/>`;
  streakBox.insertAdjacentHTML("afterbegin", streakStr.repeat(numberOfStreaks));
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
