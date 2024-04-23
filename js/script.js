document.addEventListener("DOMContentLoaded", displayTasks);

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    displayTasks();
    input.value = "";
  }
}

function displayTasks() {
  const tasksList = document.getElementById("tasksList");
  tasksList.textContent = "";
  const tasks = getTasks();
  tasks.forEach(task => {
    tasksList.appendChild(createTaskElement(task));
  });
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task;
  li.addEventListener('click', () => removeTask(task));
  return li;
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(taskToRemove) {
  const tasks = getTasks();
  const filteredTasks = tasks.filter(task => task !== taskToRemove);
  saveTasks(filteredTasks);
  displayTasks();
}
