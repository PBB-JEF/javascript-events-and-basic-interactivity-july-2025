// 🌗 Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Counter Game
let score = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  score++;
  document.getElementById("score").textContent = score;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  score = 0;
  document.getElementById("score").textContent = score;
});

// ❓ Collapsible FAQ Section
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// 📂 Dropdown Menu
document.getElementById("dropdownToggle").addEventListener("click", () => {
  document.getElementById("dropdownMenu").classList.toggle("hidden");
});

// 🗂️ Tabbed Interface
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.add("hidden");
    });
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  });
});

// 📋 Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let valid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully!";
  }
});