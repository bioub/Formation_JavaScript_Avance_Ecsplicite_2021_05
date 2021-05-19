import { createTodo } from "./todos.js";

const todosForm = document.querySelector('#todos-form');
const todosContainer = document.querySelector('#todos-container');
const todosFormInput = document.querySelector('#todos-form input');

todosForm.addEventListener('submit', (event) => {
  event.preventDefault();
  createTodo({title: todosFormInput.value}, todosContainer);
});
