const showFormButton = document.getElementById('showFormButton');
const popupForm = document.getElementById('popupForm');
const closeButton = document.getElementById('closeButton');
const myForm = document.getElementById('myForm');

showFormButton.addEventListener('click', () => {
  popupForm.style.display = 'block'; // Show the popup

  // Add form elements dynamically
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.placeholder = 'Enter your name';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Enter your email';

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';

  myForm.appendChild(nameInput);
  myForm.appendChild(emailInput);
  myForm.appendChild(submitButton);
});

closeButton.addEventListener('click', () => {
  popupForm.style.display = 'none'; // Hide the popup
});