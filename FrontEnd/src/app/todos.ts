interface Todo {
  title: string;
}

export function createTodo(todo: Todo, containerEl: HTMLElement) {
  const divEl = document.createElement('div');
  divEl.className = 'todo-item';

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;
  divEl.appendChild(spanEl);

  containerEl.appendChild(divEl);
}
