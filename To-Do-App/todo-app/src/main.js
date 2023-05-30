import './style.css'
import { createTodo } from "./api.js";

document.querySelector('#app').innerHTML = `HELLO WORLD`;

(async () => {
    const todos  = await createTodo(2, "Todo");
    document.write(JSON.stringify(todos));
})()


// Задание:
// обработчик формы
// отправить запрос используя createTodo
// результат вывести в консоль
// доп. добавить элемент на страницу
