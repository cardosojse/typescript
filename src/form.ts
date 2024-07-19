import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;
const checkbox = document.querySelector('.checkbox') as HTMLInputElement;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPasswords(password, password2);
  if (sendForm(this)) console.log('Formulário enviado');
});

checkbox.addEventListener('click', function () {
  showPassword(password, password2);
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'O campo está vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value != password2.value)
    showErrorMessage(password2, 'As senhas não conferem');
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function sendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
  return send;
}

function showPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.type === 'password') {
    password.type = 'text';
    password2.type = 'text';
  } else {
    password.type = 'password';
    password2.type = 'password';
  }
}
