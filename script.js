const dueDate = new Date("2026-04-17T18:00:00Z");

const timeEl = document.getElementById("timeRemaining");
const checkbox = document.getElementById("completeToggle");
const title = document.getElementById("title");
const status = document.getElementById("status");

// Time remaining functions
function updateTimeRemaining() {
  const now = new Date();
  const diff = dueDate - now;

  const absDiff = Math.abs(diff);
  const hours = Math.floor(absDiff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;

  let message = "";

  if (diff > 0) {
    if (days > 0) {
      message = `Due in ${days} day(s)`;
    } else if (hours > 0) {
      message = `Due in ${hours} hour(s)`;
    } else {
      message = "Due now!";
    }
  } else {
    if (hours > 0) {
      message = `Overdue by ${hours} hour(s)`;
    } else {
      message = "Overdue now!";
    }
  }

  timeEl.textContent = message;
}

// for Checkbox toggle
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    title.classList.add("completed");
    status.textContent = "Done";
  } else {
    title.classList.remove("completed");
    status.textContent = "Pending";
  }
});

// delete & edit functionality
function editTask() {
  console.log("edit clicked");
  alert("Edit clicked");
}

function deleteTask() {
  console.log("delete clicked");
  alert("Delete clicked");
}

// Initial + interval update

updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);