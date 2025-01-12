// Function to add a new task
function addTask() {
    const taskList = document.getElementById("taskList");
    const newTaskInput = document.getElementById("newTask");

    if (newTaskInput.value.trim() !== "") {
        const newTask = document.createElement("div");
        newTask.classList.add("task");

        // Create task name
        const taskName = document.createElement("span");
        taskName.classList.add("task-name");
        taskName.textContent = newTaskInput.value;

        // Create task status (Pending by default)
        const status = document.createElement("span");
        status.classList.add("status");
        status.textContent = "Pending";

        // Create 'Mark as Done' button
        const markDoneButton = document.createElement("button");
        markDoneButton.textContent = "Done";
        markDoneButton.classList.add("done-btn");
        markDoneButton.onclick = function () {
            if (status.textContent === "Pending") {
                status.textContent = "Completed";
                status.classList.add("completed");
                markDoneButton.disabled = true;
            }
        };

        // Create delete icon
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash");
        deleteIcon.onclick = function () {
            newTask.remove();
        };

        // Append elements to the new task
        newTask.appendChild(taskName);
        newTask.appendChild(status);
        newTask.appendChild(markDoneButton);
        newTask.appendChild(deleteIcon);
        taskList.appendChild(newTask);

        // Clear the input field
        newTaskInput.value = "";
    }
}
