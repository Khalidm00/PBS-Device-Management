//in the script.js file
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Your validation and authentication code here

  // Example:
  if (username === "admin" && password === "password") {
    window.location.href = "home.html";
  } else {
    alert("Invalid username or password");
  }
        // JavaScript code goes here
        document.getElementById("createButton").addEventListener("click", function() {
          document.getElementById("createSheetForm").style.display = "block";
        
        document.getElementById("cancelButton").addEventListener("click", function() {
        document.getElementById("createSheetForm").style.display = "none";
      
});
})})
