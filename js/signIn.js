var passwordInput = document.getElementById("psw");
var eyeIcon = document.getElementById("togglePassword");
var passwordMessage = document.getElementById("passwordMessage");

// Function to toggle password visibility
function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

// Function to validate password strength dynamically
passwordInput.addEventListener("input", function() {
    var password = passwordInput.value;
    var containsLowercase = /[a-z]/.test(password);
    var containsUppercase = /[A-Z]/.test(password);
    var containsNumber = /\d/.test(password);
    var isLengthValid = password.length >= 8;

    if (containsLowercase && containsUppercase && containsNumber && isLengthValid) {
        passwordMessage.textContent = "Password strength: Strong";
        passwordMessage.style.color = "green";
    } else {
        passwordMessage.textContent = "Password must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long.";
        passwordMessage.style.color = "red";
    }
});