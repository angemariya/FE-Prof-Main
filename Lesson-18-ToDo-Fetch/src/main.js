import "./style.css";
import { getTodo, markDone } from "./api";

const sectionTodos = document.getElementById("todos");

const todos = await getTodo(1);
const todosElements = todos.map(todoComponent);
sectionTodos.append(...todosElements);

function todoComponent(todo) {
  const div = document.createElement("div");
  div.classList.add("todo");

  const span = document.createElement("span");
  span.classList.add("title");
  span.innerText = todo.title;

  const button = document.createElement("button");
  button.innerText = "Done";
  button.disabled = todo.completed;
  button.addEventListener("click", async () => {
    button.innerText = "Loading...";
    await markDone(todo.id);
    button.disabled = true;
    button.innerText = "Done";
  });

  div.append(span, button);

  return div;
}

// Задание:
// обработчик формы
// отправить запрос используя createTodo
// результат вывести в консоль
// доп. добавить элемент на страницу
