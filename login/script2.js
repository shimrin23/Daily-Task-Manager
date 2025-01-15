document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Sample username and password for demonstration
    const correctUsername = "user";
    const correctPassword = "pass";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate username and password
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the Task Manager page
        window.location.href = "../main/index.html";  // Adjust the path as needed
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
