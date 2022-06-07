//All things habits

function currentUser() {
  const username = localStorage.getItem("username");
  console.log(username);
}

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
