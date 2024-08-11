const error = document.querySelector('.error-message')!;
const emailInput = document.getElementById('email') as HTMLInputElement;
const email = emailInput.value;
const btn = document.querySelector('.btn')!;

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

btn.addEventListener('click', () => {
  if (!validateEmail(email)) {
    // Email is invalid
    error.classList.remove('hidden');
    emailInput.style.border = 'em solid red';
  } else {
    error.classList.add('hidden');
  }
});
