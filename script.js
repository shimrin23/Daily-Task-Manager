// Variables to track task counts
let totalTasks = 0;
let pendingTasks = 0;
let completedTasks = 0;

// Function to update task counts
function updateTaskCounts() {
    document.getElementById("totalTasks").textContent = totalTasks;
    document.getElementById("pendingTasks").textContent = pendingTasks;
    document.getElementById("completedTasks").textContent = completedTasks;
}

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
                
                // Update task counts when marked as completed
                completedTasks++;
                pendingTasks--;
                updateTaskCounts();
            }
        };

        // Create delete icon
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash");
        deleteIcon.onclick = function () {
            newTask.remove();
            // Update task counts when deleted
            totalTasks--;
            if (status.textContent === "Pending") {
                pendingTasks--;
            } else if (status.textContent === "Completed") {
                completedTasks--;
            }
            updateTaskCounts();
        };

        // Append elements to the new task
        newTask.appendChild(taskName);
        newTask.appendChild(status);
        newTask.appendChild(markDoneButton);
        newTask.appendChild(deleteIcon);
        taskList.appendChild(newTask);

        // Update task counts after adding a new task
        totalTasks++;
        pendingTasks++;
        updateTaskCounts();

        // Clear the input field
        newTaskInput.value = "";
    }
}
