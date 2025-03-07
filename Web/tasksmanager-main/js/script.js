document.addEventListener("DOMContentLoaded", function() {
    const alertMessage = document.querySelector('.alert');
    const noneInputsContainer = document.querySelector('.none-inputs');
    const addTask = document.getElementById("addTask");

    // Input elements
    const addTaskName = document.getElementById("taskName");
    const dateInput = document.getElementById("taskDueDate");

    // Sorting buttons
    const sortTasksButton = document.getElementById("sortTasks");
    const sortTasksByDateButton = document.getElementById("sortTasksByDate");

    // Add task event
    addTask.addEventListener("click", () => {
        // Check if inputs are valid
        if (validateTaskInput()) {
            addTaskToTable();
            noneInputsContainer.style.display = "block";
        } else {
            alertMessage.classList.remove("d-none");
            setTimeout(() => {
                alertMessage.classList.add("d-none");
            }, 2500);
        }
    });

    // Sort by Priority
    sortTasksButton.addEventListener("click", () => {
        sortTasks("priority");
    });

    // Sort by Due Date
    sortTasksByDateButton.addEventListener("click", () => {
        sortTasks("dueDate");
    });

    // Validate Task Input
    function validateTaskInput() {
        const taskName = addTaskName.value.trim();
        const dueDate = dateInput.value;
        const priority = document.getElementById("priority").value;
        return taskName !== "" && dueDate !== "" && priority !== "";
    }

    // Add Task to Table
    function addTaskToTable() {
        const taskName = addTaskName.value;
        const dueDate = dateInput.value;
        const priority = document.getElementById("priority").value;

        if (taskName) {
            const taskRow = createTaskRow(taskName, dueDate, priority);
            document.getElementById("tasksListing").appendChild(taskRow);
            addTaskName.value = "";
            dateInput.value = "";
            document.getElementById("priority").selectedIndex = 0;
            updateStatistics();
        }
    }

    // Create Task Row
    function createTaskRow(taskName, dueDate, priority) {
        const taskRow = document.createElement("tr");

        const statusCell = document.createElement("td");
        statusCell.textContent = "Active";
        statusCell.style.fontWeight = "bold";

        const taskDescription = document.createElement("td");
        taskDescription.textContent = taskName;

        const priorityCell = document.createElement("td");
        priorityCell.textContent = priority;

        const dueDateCell = document.createElement("td");
        const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
        });
        dueDateCell.textContent = formattedDate;

        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        editButton.addEventListener("click", () => {
            taskDescription.setAttribute("contenteditable", "true");
            taskDescription.focus();
        });

        const completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        completeButton.addEventListener("click", () => {
            statusCell.textContent = "Completed";
            taskDescription.style.textDecoration = "line-through";
            updateStatistics();  // Update stats on completion
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.addEventListener("click", () => {
            taskRow.remove();
            updateStatistics(); // Update stats on deletion
        });

        const actionsCell = document.createElement("td");
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(completeButton);
        actionsCell.appendChild(deleteButton);

        taskRow.appendChild(statusCell);
        taskRow.appendChild(taskDescription);
        taskRow.appendChild(priorityCell);
        taskRow.appendChild(dueDateCell);
        taskRow.appendChild(actionsCell);

        return taskRow;
    }

    // Sort tasks by either Priority or Due Date
    function sortTasks(sortBy) {
        const taskList = document.getElementById("tasksListing");
        const rows = Array.from(taskList.getElementsByTagName("tr")).slice(1); // Get all rows excluding the header
        let sortedRows;

        if (sortBy === "priority") {
            sortedRows = rows.sort((rowA, rowB) => {
                const priorityA = rowA.cells[2].textContent;
                const priorityB = rowB.cells[2].textContent;

                return priorityA.localeCompare(priorityB);
            });
        } else if (sortBy === "dueDate") {
            sortedRows = rows.sort((rowA, rowB) => {
                const dateA = new Date(rowA.cells[3].textContent);
                const dateB = new Date(rowB.cells[3].textContent);
                return dateA - dateB;
            });
        }

        // Reattach the sorted rows to the table
        sortedRows.forEach(row => {
            taskList.appendChild(row);
        });
    }

    // Update Statistics
    function updateStatistics() {
        const taskList = document.getElementById("tasksListing");
        const tableRows = taskList.getElementsByTagName("tr");
        const totalTasks = tableRows.length - 1;  // Exclude the header row
        const completedTasks = Array.from(tableRows).filter(row => row.cells[0].textContent === "Completed").length;
        const pendingTasks = totalTasks - completedTasks;

        document.getElementById("totalTasks").textContent = totalTasks;
        document.getElementById("completedTasksCount").textContent = completedTasks;
        document.getElementById("pendingTasksCount").textContent = pendingTasks;
    }

    // Sidebar Button Functionality
    const allTasksButton = document.getElementById("sidebarAllTasks");
    const activeTasksButton = document.getElementById("sidebarActiveTasks");
    const completedTasksButton = document.getElementById("sidebarCompletedTasks");

    // Add event listeners for sidebar buttons
    allTasksButton.addEventListener("click", function() {
        filterTasks("all");
    });

    activeTasksButton.addEventListener("click", function() {
        filterTasks("active");
    });

    completedTasksButton.addEventListener("click", function() {
        filterTasks("completed");
    });

    // Filter Tasks
    function filterTasks(status) {
        const taskList = document.getElementById("tasksListing");
        const rows = taskList.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) {
            const statusCell = rows[i].querySelector("td").textContent.toLowerCase();

            if (status === "all") {
                rows[i].style.display = ""; // Show all tasks
            } else if (status === "active" && statusCell === "active") {
                rows[i].style.display = ""; // Show active tasks
            } else if (status === "completed" && statusCell === "completed") {
                rows[i].style.display = ""; // Show completed tasks
            } else {
                rows[i].style.display = "none"; // Hide other tasks
            }
        }
    }
    
   // Logout Button functionality
   const logoutButton = document.getElementById("logoutButton");

   logoutButton.addEventListener("click", () => {
       // Redirect to login page (index2.html) from main page (index.html)
       window.location.href = "login/index2.html";
   });
    
});

