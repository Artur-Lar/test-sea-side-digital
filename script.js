let tasks = [];

function renderTasks(filteredTasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    if (task.completed) {
      taskItem.classList.add("completed");
    }
    taskItem.innerHTML = `
      <div class="task-container">
      <div class="title-and-description">
      <h3 class="task-title">${task.title}</h3>
      <p class="task-description">${task.description}</p>
      </div>
      <div class="btn-group">
      <button class="toggle-btn" onclick="toggleTask(${index})">Сделано</button>
      <button class="delete-btn" onclick="deleteTask(${index})">Удалить</button>
      </div>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
}
//добавление задания
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDescriptionInput = document.getElementById("taskDescription");
  const title = taskInput.value.trim();
  const description = taskDescriptionInput.value.trim();
  if (title) {
    tasks.push({ title, description, completed: false });
    renderTasks(tasks);
    taskInput.value = "";
    taskDescriptionInput.value = "";
  }
}
//удаление задания
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks(tasks);
}
//пометить задание как Сделано
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks(tasks);
}

function filterTasks(filter) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    }
    return true;
  });
  renderTasks(filteredTasks);
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);
renderTasks(tasks);
