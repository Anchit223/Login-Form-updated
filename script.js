// Toggle password visibility
const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");

toggle.addEventListener("click", () => {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  toggle.textContent = type === "password" ? "👁️" : "🙈";
});

// Form validation
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const pass = password.value.trim();

  if (username === "" || pass === "") {
    message.style.color = "orange";
    message.textContent = "Please fill in all fields.";
  } else if (username === "admin" && pass === "1234") {
    message.style.color = "lightgreen";
    message.textContent = "Login successful!";
    // You can redirect here: window.location.href = "dashboard.html";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid credentials!";
  }
});
