function loadLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    const taskText = localStorage.getItem(localStorage.key(i));
    console.log(taskText);

    const li = document.createElement("li");
    const textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.innerText = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Delete";
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    const taskList = document.getElementById("taskList");
    taskList.appendChild(li);
    deleteBtn.addEventListener("click", function (e) {
      // console.log(e.target.previousElementSibling.textContent);
      taskList.removeChild(li);

      localStorage.removeItem(e.target.previousElementSibling.textContent);
    });
  }
}
loadLocalStorage();
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.innerText = taskText;

  textSpan.addEventListener("click", function () {
    textSpan.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", function (e) {
    // console.log(e.target.previousElementSibling.textContent);
    taskList.removeChild(li);

    localStorage.removeItem(e.target.previousElementSibling.textContent);
  });

  li.appendChild(textSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  // console.log(taskList);
  localStorage.setItem(taskInput.value, taskInput.value);
  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
