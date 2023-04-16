//MODEL
const array = localStorage.getItem("toDo")
  ? JSON.parse(localStorage.getItem("toDo"))
  : [];
//Создание нового объкта
const createToDoEntity = (text, data) => ({
  text: text, //Задаем параметр текст
  isCompleted: false, //Задаем дефолтное значение. Пустой чекбокс.
  deadLine: data, //Задаем значение конечная дата исполнения
});

const save = () =>
  !localStorage.setItem("toDo", JSON.stringify(array)) && array; // Преаброзовали массив в строку - serialisation

const clear = () => array.splice(0, array.length) && save();

const sortUp = () =>
  array.map((el) => el).sort((a, b) => b.deadLine.localeCompare(a.deadLine));

const sortDown = () =>
  array.map((el) => el).sort((a, b) => a.deadLine.localeCompare(b.deadLine));

const delDone = () =>
  array.map((el) => el).filter((el) => el.isCompleted === false);

const addEntity = (text, data) =>
  array.push(createToDoEntity(text, data)) && save();

//VIEW
datePickerId.min = new Date().toISOString().split("T")[0]; // Ограничивает выбор даты от текущего времени

//Вызов функции при нажатии кнопки ADD. Отрисовывает блок кода
const createToDo = (toDoEntity) => {
  const newToDoContainer = document.createElement("label"); //Создает блок
  const paragraph = document.createElement("p"); //Создаем параграф. Выводит текст с поля newToDoInput
  const deadLineData = document.createElement("time"); //Поле ввода даты
  const buttonDelEl = document.createElement("button"); //Создает кнопку удаления задачи
  const newToDoValue = document.createElement("input"); //Чекбокс
  newToDoContainer.setAttribute("class", "label");
  newToDoValue.setAttribute("type", "checkbox"); //Задает атрибут чекбокс для инпута.
  newToDoValue.checked = toDoEntity.isCompleted;

  paragraph.innerText = toDoEntity.text; //Задаем текст в тег Р
  deadLineData.innerText = toDoEntity.deadLine;
  buttonDelEl.setAttribute("type", "button"); //Задает атрибут кнопка для инпута.
  buttonDelEl.setAttribute("id", "buttonDelEl");
  buttonDelEl.setAttribute("class", "fa-solid fa-xmark"); //Отрисовываем крестик на кнопке удалить

  newToDoContainer.append(newToDoValue, paragraph, deadLineData, buttonDelEl); //Создаем всю разметку для label

  const deleteEl = () => {
    newToDoContainer.remove();
    const index = array.indexOf(toDoEntity);
    array.splice(index, 1);
    localStorage.setItem("toDo", JSON.stringify(array));
  };

  buttonDelEl.addEventListener("click", deleteEl);
  newToDoValue.addEventListener("change", () => {
    toDoEntity.isCompleted = !toDoEntity.isCompleted;
    localStorage.setItem("toDo", JSON.stringify(array));
  });
  return newToDoContainer; //возвращаем весь контейнер туду
};

const render = (list, sortArray) => {
  list.replaceChildren();
  list.append(...sortArray.map(createToDo));
};

//CONTROLER

const buttonAdd = document.querySelector('input[value="add"]'); // Кнопка Добавить
const buttonDelAll = document.querySelector('input[value="clear"]'); //Кнопка СтеретьВсе
const newToDoInput = document.querySelector('input[type="text"]'); //Поле ввода данных
const newToDoData = document.querySelector('input[type="date"]'); //Поле ввода даты
const sortUpBtn = document.querySelector('input[value="up"]');
const sortDownBtn = document.querySelector('input[value="down"]');
const deleteDoneBtn = document.querySelector('input[value="done"]');
const list = document.querySelector("#list"); //Список ТуДу
render(list, array);

const handleAdd = () => {
  if (newToDoInput.value && newToDoData.value) {
    render(list, addEntity(newToDoInput.value, newToDoData.value));
    newToDoInput.value = ""; //Очищаем поле ввода текста
    newToDoData.value = ""; //Очищаем дату
  } else {
    alert("Поле ввода или поле даты не заполненно");
  }
};

const handleClear = () => render(list, clear());

const handleUp = () => render(list, sortUp());

const handleDown = () => render(list, sortDown());

const handleDelDone = () => render(list, delDone());

buttonAdd.addEventListener("click", handleAdd);
buttonDelAll.addEventListener("click", handleClear);
sortUpBtn.addEventListener("click", handleUp);
sortDownBtn.addEventListener("click", handleDown);
deleteDoneBtn.addEventListener("click", handleDelDone);

/*
1. прокомментировать
2. добавьте удаление всех элементов одной кнопкой (добавить ее в разметку "Очистить")
3. добавить к каждому элементу кнопку "удалить", которая удаляет элемент
4.** сохранять состояние чекбоксов (JSON.stringify, JSON.parse)
5.** при значении чекбокса TRUE перемещать таску в список ВЫПОЛНЕННО  

BAG При вводе в инпуте и нажатии ENTER скидывает на пустую строку. 

Какая разница между записью 
newToDoValue.setAttribute("type", "checkbox");
и
checkbox.type = "checkbox";
*/

