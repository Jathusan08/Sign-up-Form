const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const message = document.querySelector(".message");
const button = document.querySelector(".btn");

// Error labels
const firstNameError = document.querySelector(".first-name > .error");
const lastNameError = document.querySelector(".last-name > .error");
const emailError = document.querySelector(".email > .error");
const phoneError = document.querySelector(".phone > .error");

function checkPasswords() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === "" || confirmPassword === "") {
    message.textContent = ""; // Clear error message if any field is empty
  } else if (password !== confirmPassword) {
    message.textContent = "* Passwords do not match";
    message.style.color = "red";
  } else {
    message.textContent = "✓ Passwords match"; // Display a success message
    message.style.color = "green";
  }
}
console.log(passwordInput.value);

// const handleErrorMessage =(label, errorMessage)

// firstName.addEventListener("input", () => {
//   if (firstName.value != "") {
//     firstNameError.textContent = "";
//   } else {
//     firstNameError.textContent = "First name required";
//   }
// });

passwordInput.addEventListener("input", checkPasswords);
confirmPasswordInput.addEventListener("input", checkPasswords);

button.addEventListener("click", () => {
  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    email.value !== "" &&
    phone.value !== "" &&
    passwordInput.value !== "" &&
    confirmPasswordInput.value !== "" &&
    passwordInput.value === confirmPasswordInput.value
  ) {
    console.log("test");
    console.log(passwordInput.value === confirmPasswordInput.value);
    //location.reload();
  }
});
