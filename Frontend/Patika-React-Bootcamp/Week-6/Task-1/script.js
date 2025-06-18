// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const toastMessage = document.getElementById("toastMessage");
const toast = new bootstrap.Toast(document.getElementById("liveToast"));

// Load tasks from Local Storage on page load
window.addEventListener("DOMContentLoaded", loadTasksFromStorage);

// Add task on button click
addTaskButton.addEventListener("click", addTask);

// Add task function
function addTask() {
    const taskValue = taskInput.value.trim();

    if (!taskValue) {
        showToast("Task cannot be empty!");
        return;
    }

    createTaskElement(taskValue);
    saveTaskToStorage(taskValue);
    showToast("Task added successfully!");

    taskInput.value = ""; // Clear input
}

// Create task element
function createTaskElement(taskValue) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Task text
    const taskText = document.createElement("span");
    taskText.textContent = taskValue;

    // Done button
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.className = "btn btn-success btn-sm";
    doneButton.addEventListener("click", () => {
        taskText.style.textDecoration = "line-through";
        showToast("Task marked as done!");
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger btn-sm ms-2";
    deleteButton.addEventListener("click", () => {
        li.remove();
        removeTaskFromStorage(taskValue);
        showToast("Task deleted successfully!");
    });

    li.append(taskText, doneButton, deleteButton);
    taskList.appendChild(li);
}

// Show toast notification
function showToast(message) {
    toastMessage.textContent = message;
    toast.show();
}

// Local Storage: Save task
function saveTaskToStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Local Storage: Load tasks
function loadTasksFromStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
}

// Local Storage: Remove task
function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
