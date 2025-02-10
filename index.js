{
    alert("this page is not secure");
}
function authenticateUser() {
    // Prompt the user for a username and password
    const username = prompt("Please enter your username:");
    const password = prompt("Please enter your password:");
  
    // Define the valid credentials (for demo purposes only)
    const validUsername = "reis";
    const validPassword = "12345";
  
    // Check if the entered credentials match
    if (username === validUsername && password === validPassword) {
      alert("Access granted!");
    } else {
      alert("Access denied! Incorrect username or password.");
      // Optionally, you can call authenticateUser() again to re-prompt the user.
      // For example:
      // authenticateUser();
    }
  }
  
  // Call the authentication function when the page loads
  window.onload = authenticateUser;
  