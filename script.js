
// Select Elements

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

// Update Statistics

function updateStats() {

    const tasks = document.querySelectorAll(".task");
    const completed = document.querySelectorAll(".completed");

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completed.length;
    pendingTasks.textContent = tasks.length - completed.length;

}

// Create New Task

function createTask(taskText) {

    // Create List Item

    const task = document.createElement("li");
    task.classList.add("task");

    task.innerHTML = `

        <div class="task-left">

            <input type="checkbox" class="checkTask">

            <span>${taskText}</span>

        </div>

        <button class="delete-btn">
            Delete
        </button>

    `;

    // Add Task to List

    taskList.appendChild(task);

    // Complete Task


    const checkbox = task.querySelector(".checkTask");
    const taskName = task.querySelector("span");

    checkbox.addEventListener("change", function () {

        taskName.classList.toggle("completed");

        updateStats();

    });


    // Delete Task


    const deleteBtn = task.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {

        task.remove();

        updateStats();

    });

    updateStats();

}

// Add Task Button


addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;

    }

    createTask(taskText);

    taskInput.value = "";

    taskInput.focus();

});

// Press Enter to Add Task

taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        addTaskBtn.click();

    }

});

// Initialize

updateStats();