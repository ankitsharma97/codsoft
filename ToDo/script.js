const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearCompletedButton = document.getElementById("clear-completed");

addButton.addEventListener("click", addTask);
clearCompletedButton.addEventListener("click", clearCompletedTasks);

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.classList.add("task");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("complete-checkbox");
        li.appendChild(checkbox);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

taskList.addEventListener("change", (event) => {
    if (event.target.classList.contains("complete-checkbox")) {
        const task = event.target.parentElement;
        if (event.target.checked) {
            task.classList.add("completed");
        } else {
            task.classList.remove("completed");
        }
    }
});

function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach((task) => {
        task.remove();
    });
}