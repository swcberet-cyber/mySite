'use strict';
const form = document.querySelector('#welcome-form');
const nameInput = document.querySelector('#name');
const error = document.querySelector('#name-error');
const greeting = document.querySelector('#greeting');
const greetingText = document.querySelector('#greeting-text');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (!name) {
    error.hidden = false;
    nameInput.setAttribute('aria-invalid', 'true');
    nameInput.focus();
    return;
  }
  error.hidden = true;
  nameInput.removeAttribute('aria-invalid');
  greetingText.textContent = `${name} 님 어서오세요`;
  greeting.classList.add('is-ready');
});
nameInput.addEventListener('input', () => {
  error.hidden = true;
  nameInput.removeAttribute('aria-invalid');
});
