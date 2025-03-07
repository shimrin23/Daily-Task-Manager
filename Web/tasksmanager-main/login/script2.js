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
        window.location.href = "../index.html";  // Adjust the path as needed
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Toggle Forgot Password Form
document.getElementById("forgotPasswordLink").addEventListener("click", function() {
    document.getElementById("forgotPasswordForm").classList.remove("d-none");
    document.getElementById("loginForm").classList.add("d-none");
});

// Cancel Forgot Password
document.getElementById("cancelResetLink").addEventListener("click", function() {
    document.getElementById("forgotPasswordForm").classList.add("d-none");
    document.getElementById("loginForm").classList.remove("d-none");
});

// Reset Password Form Submission
document.getElementById("resetPasswordForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const resetEmail = document.getElementById("resetEmail").value;

    // Sample logic for resetting password (this should be connected to a backend)
    if (resetEmail) {
        alert("Password reset link sent to " + resetEmail);
        document.getElementById("forgotPasswordForm").classList.add("d-none");
        document.getElementById("loginForm").classList.remove("d-none");
    } else {
        alert("Please enter a valid email.");
    }
});
