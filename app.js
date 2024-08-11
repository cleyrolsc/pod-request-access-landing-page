var error = document.querySelector('.error-message');
var emailInput = document.getElementById('email');
var email = emailInput.value;
var btn = document.querySelector('.btn');
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
btn.addEventListener('click', function (e) {
  e.preventDefault();
  if (!validateEmail(email)) {
    // Email is invalid
    error.classList.remove('hidden');
    emailInput.style.border = '0.2em solid red';
  } else {
    error.classList.add('hidden');
  }
});
