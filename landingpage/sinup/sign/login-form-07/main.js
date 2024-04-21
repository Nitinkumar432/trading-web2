// Add JavaScript for sign up functionality
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById("signupName").value;
    var phone = document.getElementById("signupPhone").value;
    
    // Basic validation (you can add more as needed)
    if (name.trim() === "" || phone.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    
    // Generate and send OTP (for demonstration purposes)
    var fixedOTP = "123456"; // Fixed OTP for demonstration
    var enteredOTP = prompt("Enter OTP sent to your phone:");
    
    // Validate OTP
    if (enteredOTP === fixedOTP) {
      // Proceed to next page
      alert("Sign up successful! Proceeding to next page...");
      // Redirect or perform any other action here
    } else {
      alert("Invalid OTP. Please try again.");
    }
  });
  var inputs = document.querySelectorAll('.form-group input');
  inputs.forEach(function(input) {
      input.addEventListener('input', function() {
          var label = this.nextElementSibling;
          if (this.value.trim() !== '') {
              label.style.opacity = 0;
          } else {
              label.style.opacity = 1;
          }
      });
  });

  // Show labels for empty inputs
  var labels = document.querySelectorAll('.form-group label');
  labels.forEach(function(label) {
      var input = label.previousElementSibling;
      if (input.value.trim() === '') {
          label.style.opacity = 1;
      }
  });
