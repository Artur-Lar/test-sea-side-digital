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
      <span class="task-title">${task.title}</span>
      <div class="btn-group">
      <button class="toggle-btn" onclick="toggleTask(${index})">Сделано</button>
      <button class="delete-btn" onclick="deleteTask(${index})">Удалить</button>
      </div>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const title = taskInput.value.trim();
  if (title) {
    tasks.push({ title, completed: false });
    renderTasks(tasks);
    taskInput.value = "";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks(tasks);
}

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
