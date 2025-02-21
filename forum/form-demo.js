// form-demo.js

function validateForm(event) {
    // get a reference to the form (accessible via event.target)
    const theForm = event.target;
    // Array to hold error messages
    const errors = [];
    // Assume the form is valid at first
    let isValid = true;
    
    // Validation: Only allow full name "Bob"
    if (theForm.fullName.value !== "Bob") {
      isValid = false;
      errors.push("Your name is not Bob");
    }
    
    // Validation: If paying by credit card, only allow one valid number
    if (theForm.paymentMethod.value === "creditCard") {
      if (theForm.creditCardNumber.value !== "1234123412341234") {
        isValid = false;
        errors.push("Invalid Credit Card Number");
      }
    }
    
    // If any validations failed, prevent form submission and display errors
    if (!isValid) {
      event.preventDefault();
      showErrors(errors);
      return false;
    }
  }
  
  function togglePaymentDetails(e) {
    // Get the form and necessary containers
    const theForm = document.querySelector("#checkoutForm");
    const creditCardContainer = document.getElementById("creditCardNumberContainer");
    const paypalContainer = document.getElementById("paypalUsernameContainer");
  
    // Hide both payment details sections and remove required attributes
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
    theForm.creditCardNumber.required = false;
    theForm.paypalUsername.required = false;
  
    // Show the appropriate container and add required attribute back based on selection
    if (theForm.paymentMethod.value === "creditCard") {
      creditCardContainer.classList.remove("hide");
      theForm.creditCardNumber.required = true;
    } else if (theForm.paymentMethod.value === "paypal") {
      paypalContainer.classList.remove("hide");
      theForm.paypalUsername.required = true;
    }
  }
  
  // Helper function to display error messages in the .errors section
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  
  // Attach event listeners
  document.querySelector("#paymentMethod").addEventListener("change", togglePaymentDetails);
  document.querySelector("#checkoutForm").addEventListener("submit", validateForm);
  