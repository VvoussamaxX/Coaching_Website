// Function to show the sign-up form and hide the login form
function showSignupForm() {
  document.getElementById("signup").style.display = "block";
  document.getElementById("login").style.display = "none";
}

// Function to show the login form and hide the sign-up form
function showLoginForm() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("login").style.display = "block";
}

// Function to save sign-up data to localStorage
function saveSignupData() {
  var username = document.getElementById("signup-username").value;
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;

  var userData = {
    username: username,
    email: email,
    password: password
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  showLoginForm(); // Show the login form after signing up
}

// Function to retrieve sign-up data from localStorage and populate the sign-up form
function loadSignupData() {
  var userData = localStorage.getItem("userData");

  if (userData) {
    userData = JSON.parse(userData);

    document.getElementById("signup-username").value = userData.username;
    document.getElementById("signup-email").value = userData.email;
    document.getElementById("signup-password").value = userData.password;
  }
}

// Function to handle sign-up form submission
document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault();
  saveSignupData();
  alert("Sign up successful!");
});

// Function to handle login form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  var enteredUsername = document.getElementById("login-username").value;
  var enteredPassword = document.getElementById("login-password").value;

  var userData = localStorage.getItem("userData");

  if (userData) {
    userData = JSON.parse(userData);

    var savedUsername = userData.username;
    var savedPassword = userData.password;

    if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
      alert("Login successful!");
      window.location.href = "Features.html"; // Redirect to Features.html after successful login
    } else {
      alert("Invalid username or password. Please try again.");
    }
  } else {
    alert("No user data found. Please sign up first.");
  }
});

// Load sign-up data when the page loads
loadSignupData();
