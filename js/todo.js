const todo = document.querySelector("#todo");
const todoForm = todo.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = todo.querySelector(".todo-list")

const TODOS_KEY = "todos";

let todos = [];

function savedTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();

  todos = todos.filter(todo => todo.id !== parseInt(li.id));

  savedTodo();
}

function paintTodo(todo) {
  const li = document.createElement('li');
  li.id = todo.id;
  const span = document.createElement('span');
  span.innerText = todo.text;
  const button = document.createElement('button');
  button.innerText = "❌"

  li.appendChild(span);
  li.appendChild(button)

  button.addEventListener("click", deleteTodo)

  todoList.appendChild(li)
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo
  }
  todos.push(newTodoObj);
  paintTodo(newTodoObj)
  savedTodo()
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos) {
  const parsedTodo = JSON.parse(savedTodos)
  todos = parsedTodo;
  parsedTodo.forEach(paintTodo)
}
