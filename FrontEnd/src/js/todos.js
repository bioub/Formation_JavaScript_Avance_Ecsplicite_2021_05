export function createTodo(todo, containerEl) {
  const divEl = document.createElement('div');
  divEl.className = 'todo-item';

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;
  divEl.appendChild(spanEl);

  containerEl.appendChild(divEl);
}
