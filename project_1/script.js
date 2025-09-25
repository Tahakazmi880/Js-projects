const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  formControl.querySelector('small').textContent = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check if email is valid
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

// Validate each field
function validateFields() {
  let isValid = true;

  // Username
  if (username.value.trim() === '') {
    showError(username, 'Please enter your username');
    isValid = false;
  } else if (username.value.length < 3) {
    showError(username, 'Username must be at least 3 characters');
    isValid = false;
  } else if (username.value.length > 15) {
    showError(username, 'Username must be less than 15 characters');
    isValid = false;
  } else {
    showSuccess(username);
  }

  // Email
  if (email.value.trim() === '') {
    showError(email, 'Please enter your email');
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Please enter a valid email address');
    isValid = false;
  } else {
    showSuccess(email);
  }

  // Password
  if (password1.value.trim() === '') {
    showError(password1, 'Please enter a password');
    isValid = false;
  } else if (password1.value.length < 6) {
    showError(password1, 'Password must be at least 6 characters');
    isValid = false;
  } else {
    showSuccess(password1);
  }

  // Confirm Password
  if (password2.value.trim() === '') {
    showError(password2, 'Please confirm your password');
    isValid = false;
  } else if (password1.value !== password2.value) {
    showError(password2, 'Passwords do not match');
    isValid = false;
  } else {
    showSuccess(password2);
  }

  return isValid;
}

// On form submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const isFormValid = validateFields();

  if (isFormValid) {
    alert('Registration successful!');
    form.reset();

    // Remove success styles
    document.querySelectorAll('.form-control').forEach(ctrl => {
      ctrl.className = 'form-control';
    });
  }
});
