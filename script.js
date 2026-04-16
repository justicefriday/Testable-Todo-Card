let dueDate = new Date("2026-04-18T18:00:00Z");

const title = document.getElementById("title");
const status = document.getElementById("status");
const checkbox = document.getElementById("completeToggle");
const statusControl = document.getElementById("statusControl");
const timeEl = document.getElementById("timeRemaining");
const overdueIndicator = document.getElementById("overdueIndicator");

const editForm = document.getElementById("editForm");
const editTitle = document.getElementById("editTitle");
const editDesc = document.getElementById("editDesc");
const editPriority = document.getElementById("editPriority");
const editDue = document.getElementById("editDue");

const descBox = document.getElementById("descBox");
const expandBtn = document.getElementById("expandBtn");

function updateTime() {
  if (status.textContent === "Done") {
    timeEl.textContent = "Completed";
    return;
  }

  const now = new Date();
  const diff = dueDate - now;

  const mins = Math.floor(Math.abs(diff) / (1000 * 60));
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);

  let msg = "";

  if (diff > 0) {
    if (days > 0) msg = `Due in ${days} days`;
    else if (hours > 0) msg = `Due in ${hours} hours`;
    else msg = `Due in ${mins} minutes`;
  } else {
    overdueIndicator.textContent = "Overdue";
    overdueIndicator.style.color = "red";

    if (hours > 0) msg = `Overdue by ${hours} hours`;
    else msg = `Overdue by ${mins} minutes`;
  }

  timeEl.textContent = msg;
}

setInterval(updateTime, 60000);
updateTime();

/* Checkbox Sync */
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    status.textContent = "Done";
    statusControl.value = "Done";
    title.classList.add("completed");
  } else {
    status.textContent = "Pending";
    statusControl.value = "Pending";
    title.classList.remove("completed");
  }
});

/* Status Sync */
statusControl.addEventListener("change", () => {
  status.textContent = statusControl.value;

  if (statusControl.value === "Done") {
    checkbox.checked = true;
    title.classList.add("completed");
  } else {
    checkbox.checked = false;
    title.classList.remove("completed");
  }
});

/* Expand */
expandBtn.addEventListener("click", () => {
  descBox.classList.toggle("expanded");

  const expanded = expandBtn.getAttribute("aria-expanded") === "true";
  expandBtn.setAttribute("aria-expanded", !expanded);
});

/* Edit */
function editTask() {
  editForm.hidden = false;

  editTitle.value = title.textContent;
  editDesc.value = document.querySelector('[data-testid="test-todo-description"]').textContent;
}

/* Save */
function saveEdit() {
  title.textContent = editTitle.value;
  document.querySelector('[data-testid="test-todo-description"]').textContent = editDesc.value;

  const priorityEl = document.getElementById("priority");
  priorityEl.textContent = editPriority.value;

  updatePriorityIndicator(editPriority.value);

  if (editDue.value) {
    dueDate = new Date(editDue.value);

    document.getElementById("dueDate").textContent =
      "Due " + new Date(editDue.value).toDateString();
  }

  editForm.hidden = true;
}

/* Cancel */
function cancelEdit() {
  editForm.hidden = true;
}

/* Delete */
function deleteTask() {
  alert("Delete clicked");
}

function updatePriorityIndicator(value) {
  const indicator = document.getElementById("priorityIndicator");

  indicator.className = ""; 

  if (value === "High") indicator.classList.add("high");
  if (value === "Medium") indicator.classList.add("medium");
  if (value === "Low") indicator.classList.add("low");
}

updatePriorityIndicator("High");