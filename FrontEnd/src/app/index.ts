import { createTodo } from './todos';

const todosForm: HTMLFormElement = document.querySelector('#todos-form');
const todosContainer: HTMLDivElement = document.querySelector('#todos-container');
const todosFormInput: HTMLInputElement = document.querySelector('#todos-form input');

todosForm.addEventListener('submit', (event) => {
  event.preventDefault();
  createTodo({ title: todosFormInput.value }, todosContainer);
});
