let totalTasks = 0;
let pendingTasks = 0;
let completedTasks = 0;
let tasks = [];

function updateTaskCounts() {
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    const circle = document.getElementById("progressCircle");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    circle.style.strokeDashoffset = offset;
    document.getElementById("taskProgressText").textContent = `${completedTasks}/${totalTasks} Tasks`;
}

function addTask() {
    const newTaskInput = document.getElementById("newTask");

    if (newTaskInput.value.trim() !== "") {
        const newTask = {
            name: newTaskInput.value.trim(),
            status: "Pending",
            dueDate: new Date(),
            label: ["Personal"], // Default label
            priority: "Priority" // Default priority
        };

        tasks.push(newTask);
        totalTasks++;
        pendingTasks++;

        // Clear the input field after adding the task
        newTaskInput.value = "";

        updateTaskCounts();
        renderTasks();
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
        taskInfo.textContent = `Task ${index + 1}: ${task.name} [${task.status}] - Priority: ${task.priority}`;

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
            const newName = prompt("Edit task name:", task.name);
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
            const newNote = prompt("Add a note for the task:");
            if (newNote) {
                task.note = newNote;
            }
        };

        // Priority selector
        const prioritySelect = document.createElement("select");
        prioritySelect.classList.add("priority-select");

        const priorityOptions = ["Priority", "Low", "Medium", "High"];
        priorityOptions.forEach((priority) => {
            const option = document.createElement("option");
            option.value = priority;
            option.textContent = priority;
            if (task.priority === priority) {
                option.selected = true;
            }
            prioritySelect.appendChild(option);
        });

        prioritySelect.onchange = function () {
            task.priority = prioritySelect.value;
            renderTasks();
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
            } else {
                completedTasks--;
            }
            updateTaskCounts();
            renderTasks();
        };

        taskOptionsDiv.appendChild(markDoneButton);
        taskOptionsDiv.appendChild(editButton);
        taskOptionsDiv.appendChild(noteButton);
        taskOptionsDiv.appendChild(prioritySelect); // Added priority selector
        taskOptionsDiv.appendChild(deleteButton);

        taskDiv.appendChild(taskInfoDiv);
        taskDiv.appendChild(taskOptionsDiv);

        // Add priority class for styling
        taskDiv.classList.add(`priority-${task.priority.toLowerCase()}`);

        taskList.appendChild(taskDiv);
    });
}

function goHome() {
    renderTasks();
    updateTaskCounts();
}
