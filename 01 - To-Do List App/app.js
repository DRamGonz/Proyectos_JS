// DOM Elements
let taskInput = document.getElementById("task-input");
let addTaskBtn = document.getElementById("add-task-btn");
let pendingTasksList = document.getElementById("pending-tasks");
let completedTasksList = document.getElementById("completed-tasks");

// Add Task
addTaskBtn.addEventListener("click", () => {
  let taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = "";
  }
});

// Add a new task to the pending list
function addTask(taskText) {
  let li= document.createElement("div");
  li.classList.add("flex", "items-center", "justify-around", "p-3", "rounded-lg", "border-2", "border-gray-200", "text-xl", "hover:bg-gray-100");
  li.textContent = taskText;

  let completeBtn = document.createElement("button");
  completeBtn.classList.add(
  "p-2",  
  "border-2", 
  "mx-5", 
  "border-blue-800", 
  "rounded-lg", 
  "bg-blue-400", 
  "hover:bg-blue-100");
  completeBtn.textContent = "Complete";
  completeBtn.addEventListener("click", () => markAsCompleted(li));

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add(
  "p-2",
  "border-2",
  "mx-1",
  "border-red-800",
  "rounded-lg",
  "bg-red-500",
  "hover:bg-red-100",
  );
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  pendingTasksList.appendChild(li);
}

// Mark task as completed
function markAsCompleted(taskItem) {
  taskItem.classList.add("completed");
  let completeBtn = taskItem.querySelector("button");
  completeBtn.remove();

  completedTasksList.appendChild(taskItem);
}
