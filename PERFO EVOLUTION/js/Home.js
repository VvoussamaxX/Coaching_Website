function showSignupForm() {
  document.getElementById("signup").style.display = "block";
  document.getElementById("login").style.display = "none";
}

function showLoginForm() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("login").style.display = "block";
}

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
  showLoginForm(); 
}

function loadSignupData() {
  var userData = localStorage.getItem("userData");

  if (userData) {
    userData = JSON.parse(userData);

    document.getElementById("signup-username").value = userData.username;
    document.getElementById("signup-email").value = userData.email;
    document.getElementById("signup-password").value = userData.password;
  }
}

document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault();
  saveSignupData();
  alert("Sign up successful!");
});

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
      window.location.href = "Features.html"; 
    } else {
      alert("Invalid username or password. Please try again.");
    }
  } else {
    alert("No user data found. Please sign up first.");
  }
});

loadSignupData();
