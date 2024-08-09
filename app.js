'use strict';

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  if (email === '') {
    console.error('Oops! Please add your email');
  } else if (!validateEmail(email)) {
    console.error('Oops! Please check your email');
  } else {
    console.log('Email is valid:', email);
  }
}

// Assuming you have a form with an id of 'myForm' and an email input with id 'email'
const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);
