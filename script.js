let totalTasks = 0;
let pendingTasks = 0;
let completedTasks = 0;
let tasks = [];

function updateTaskCounts() {
    document.getElementById("totalTasks").textContent = totalTasks;
    document.getElementById("pendingTasks").textContent = pendingTasks;
    document.getElementById("completedTasks").textContent = completedTasks;
}

function addTask() {
    const newTaskInput = document.getElementById("newTask");

    if (newTaskInput.value.trim() !== "") {
        const newTask = {
            name: newTaskInput.value,
            status: "Pending",
            dueDate: new Date(),
            label: ["Personal"], // Default label
            priority: "Priority" // Default priority
        };

        tasks.push(newTask);
        renderTasks();
        totalTasks++;
        pendingTasks++;
        updateTaskCounts();

        newTaskInput.value = "";
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";  // Clear the current task list

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const taskInfoDiv = document.createElement("div");
        taskInfoDiv.classList.add("task-info");

        // Add task number, name, and status
        const taskInfo = document.createElement("span");
        taskInfo.classList.add("task-info-text");
        taskInfo.textContent = `Task ${index + 1}: ${task.name} [${task.status}]`;

        taskInfoDiv.appendChild(taskInfo);

        // Task options
        const taskOptionsDiv = document.createElement("div");
        taskOptionsDiv.classList.add("task-options");

        // Mark as Done button
        const markDoneButton = document.createElement("button");
        markDoneButton.classList.add("done-btn");
        markDoneButton.textContent = "Done";
        markDoneButton.onclick = function () {
            if (task.status === "Pending") {
                task.status = "Completed";
                completedTasks++;
                pendingTasks--;
                updateTaskCounts();
                renderTasks();
            }
        };

        // Edit button
        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            const newName = prompt("Edit task:", task.name);
            if (newName) {
                task.name = newName;
                renderTasks();
            }
        };

        // Note button
        const noteButton = document.createElement("button");
        noteButton.classList.add("note-btn");
        noteButton.textContent = "Note";
        noteButton.onclick = function () {
            const note = prompt("Add a note:", "");
            if (note) {
                alert("Note added: " + note);
            }
        };

        // Priority button
        const priorityButton = document.createElement("button");
        priorityButton.classList.add("priority-btn");
        priorityButton.textContent = task.priority;  // Show current priority or default text
        const priorityDropdown = document.createElement("div");
        priorityDropdown.classList.add("priority-dropdown");

        const lowOption = document.createElement("button");
        lowOption.textContent = "Low";  // Change to Low
        lowOption.onclick = function () {
            task.priority = "Low";  // Update the task's priority to Low
            priorityButton.textContent = "Low";  // Change the button text to Low
            priorityDropdown.style.display = "none";  // Hide the dropdown
        };

        const mediumOption = document.createElement("button");
        mediumOption.textContent = "Medium";  // Medium option remains the same
        mediumOption.onclick = function () {
            task.priority = "Medium";  // Update the task's priority to Medium
            priorityButton.textContent = "Medium";  // Change the button text to Medium
            priorityDropdown.style.display = "none";  // Hide the dropdown
        };

        const highOption = document.createElement("button");
        highOption.textContent = "High";  // High option remains the same
        highOption.onclick = function () {
            task.priority = "High";  // Update the task's priority to High
            priorityButton.textContent = "High";  // Change the button text to High
            priorityDropdown.style.display = "none";  // Hide the dropdown
        };

        priorityDropdown.appendChild(lowOption);  // Append Low first
        priorityDropdown.appendChild(mediumOption);  // Then Medium
        priorityDropdown.appendChild(highOption);  // Then High

        priorityButton.onclick = function () {
            priorityDropdown.style.display = priorityDropdown.style.display === "none" ? "flex" : "none";
        };

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            tasks.splice(index, 1);
            totalTasks--;
            if (task.status === "Pending") {
                pendingTasks--;
            } else if (task.status === "Completed") {
                completedTasks--;
            }
            updateTaskCounts();
            renderTasks();
        };

        taskOptionsDiv.appendChild(markDoneButton);
        taskOptionsDiv.appendChild(editButton);
        taskOptionsDiv.appendChild(noteButton);
        taskOptionsDiv.appendChild(deleteButton);
        taskOptionsDiv.appendChild(priorityButton);
        taskOptionsDiv.appendChild(priorityDropdown);  // Add priority dropdown

        taskDiv.appendChild(taskInfoDiv);
        taskDiv.appendChild(taskOptionsDiv);
        taskList.appendChild(taskDiv);
    });
}

function goHome() {
    renderTasks();  // Show all tasks
    updateTaskCounts();  // Update task counts (total, pending, completed)
}
