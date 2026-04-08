function scrollToGames() {
  document.getElementById('popular-games').scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const successDiv = document.getElementById("successMessage");


  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (username.length < 3) {
      successDiv.textContent = "Username must be at least 3 characters long.";
      successDiv.className = "error-message";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      successDiv.textContent = "Please enter a valid email address.";
      successDiv.className = "error-message";
      return;
    }

    if (password.length < 6) {
      successDiv.textContent = "Password must be at least 6 characters long.";
      successDiv.className = "error-message";
      return;
    }

    if (password !== confirm) {
      successDiv.textContent = "Passwords do not match.";
      successDiv.className = "error-message";
      return;
    }

    // Success message inside the page
    successDiv.textContent = "✅ Sign up successful! Redirecting to homepage...";
    successDiv.className = "success-message";
    form.reset();

    // Redirect after 2 seconds
    setTimeout(() => {
      window.location.href = "homepage.html";
    }, 2000);
  });
});

