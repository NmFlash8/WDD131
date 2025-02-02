let tasks = [];

function taskTemplate(task) {
  return `
    <li>
      <p class="${task.completed ? 'strike' : ''}">${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks() {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = tasks.map(taskTemplate).join("");
}

function newTask() {
  const taskInput = document.querySelector("#todo");
  if (taskInput.value.trim() !== "") {
    tasks.push({ detail: taskInput.value.trim(), completed: false });
    taskInput.value = ""; // Clear input field after adding task
    renderTasks();
  }
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail !== taskElement.querySelector('p').innerText
  );
  renderTasks();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  renderTasks();
}

function manageTasks(event) {
  const parent = event.target.closest("li");
  if (event.target.dataset.action === "delete") {
    removeTask(parent);
  } else if (event.target.dataset.action === "complete") {
    completeTask(parent);
  }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks();
