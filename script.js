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
            label: ["Personal"] // Default label
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

        // Add task number, name, and status in the format "Task 1: Task name [status]"
        const taskInfo = document.createElement("span");
        taskInfo.classList.add("task-info-text");
        taskInfo.textContent = `Task ${index + 1}: ${task.name} [${task.status}]`; // Format

        taskInfoDiv.appendChild(taskInfo);

        // Task options
        const taskOptionsDiv = document.createElement("div");
        taskOptionsDiv.classList.add("task-options");

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

        const noteButton = document.createElement("button");
        noteButton.classList.add("note-btn");
        noteButton.textContent = "Note";
        noteButton.onclick = function () {
            const note = prompt("Add a note:", "");
            if (note) {
                alert("Note added: " + note);
            }
        };

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

        taskDiv.appendChild(taskInfoDiv);
        taskDiv.appendChild(taskOptionsDiv);
        taskList.appendChild(taskDiv);
    });
}

function searchTasks() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchInput));
    renderFilteredTasks(filteredTasks);
}

function filterTasks(filter) {
    let filteredTasks = [];

    if (filter === "today") {
        const today = new Date();
        filteredTasks = tasks.filter(task => task.dueDate.toDateString() === today.toDateString());
    } else if (filter === "upcoming") {
        const today = new Date();
        filteredTasks = tasks.filter(task => task.dueDate > today);
    }

    renderFilteredTasks(filteredTasks);
}

function renderFilteredTasks(filteredTasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";  // Clear the current task list

    filteredTasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const taskInfoDiv = document.createElement("div");
        taskInfoDiv.classList.add("task-info");

        // Add task number, name, and status in the format "Task 1: Task name [status]"
        const taskInfo = document.createElement("span");
        taskInfo.classList.add("task-info-text");
        taskInfo.textContent = `Task ${index + 1}: ${task.name} [${task.status}]`; // Format

        taskInfoDiv.appendChild(taskInfo);

        taskDiv.appendChild(taskInfoDiv);
        taskList.appendChild(taskDiv);
    });
}
