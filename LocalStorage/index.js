//MODEL
const array = localStorage.getItem("toDo") ? JSON.parse(localStorage.getItem("toDo")) : [];

const createToDoEntity = (text, data) => ({
  text: text,
  isCompleted: false,
  deadLine: data,
});

const save = () =>
  !localStorage.setItem("toDo", JSON.stringify(array)) && array;

const clear = () => 
  array.splice(0, array.length) && save();

const sortUp = () =>
  [...array].sort((a, b) => b.deadLine.localeCompare(a.deadLine));

const sortDown = () =>
  [...array].sort((a, b) => a.deadLine.localeCompare(b.deadLine));

const delDone = () =>
  array.filter((el) => el.isCompleted === false);

const addEntity = (text, data) =>
  array.push(createToDoEntity(text, data)) && save();

const toggleSorting = () => {
  array.
}

//VIEW
datePickerId.min = new Date().toISOString().split("T")[0];

const createToDo = (toDoEntity) => {
  const newToDoContainer = document.createElement("label");
  const paragraph = document.createElement("p");
  const deadLineData = document.createElement("time");
  const buttonDelEl = document.createElement("button");
  const newToDoValue = document.createElement("input");
  newToDoContainer.setAttribute("class", "label");
  newToDoValue.setAttribute("type", "checkbox");
  newToDoValue.checked = toDoEntity.isCompleted;

  paragraph.innerText = toDoEntity.text;
  deadLineData.innerText = toDoEntity.deadLine;
  buttonDelEl.setAttribute("type", "button");
  buttonDelEl.setAttribute("id", "buttonDelEl");

  newToDoContainer.append(newToDoValue, paragraph, deadLineData, buttonDelEl);

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
  return newToDoContainer;
};

const render = (list, sortArray) => {
  list.replaceChildren();
  list.append(...sortArray.map(createToDo));
};

//CONTROLER

const buttonAdd = document.querySelector('input[value="add"]');
const buttonDelAll = document.querySelector('input[value="clear"]');
const newToDoInput = document.querySelector('input[type="text"]');
const newToDoData = document.querySelector('input[type="date"]');
const sortUpBtn = document.querySelector('input[value="up"]');
const sortDownBtn = document.querySelector('input[value="down"]');
const deleteDoneBtn = document.querySelector('input[value="done"]');
const sort = document.querySelector('input[value="sort"]'); //кнопка выключения сортировки
const list = document.querySelector("#list"); 

render(list, array);

const handleAdd = () => {
  if (newToDoInput.value && newToDoData.value) {
    render(list, addEntity(newToDoInput.value, newToDoData.value));
    newToDoInput.value = "";
    newToDoData.value = "";
  } else {
    alert("Input field is empty");
  }
};

const handleClear = () => render(list, clear()); //ф-я очистки

const handleUp = () => render(list, sortUp()); // ф-я сортировки по возрастанию

const handleDown = () => render(list, sortDown()); // ф-я сортировки по убыванию

const handleDelDone = () => render(list, delDone()); //ф-я скрытия выполненных

const toggleSort = () => render(list, toggleSorting());

buttonAdd.addEventListener("click", handleAdd);
buttonDelAll.addEventListener("click", handleClear);
sortUpBtn.addEventListener("click", handleUp);
sortDownBtn.addEventListener("click", handleDown);
deleteDoneBtn.addEventListener("click", handleDelDone);
sort.addEventListener("click", toggleSort)

/*

сделать так, что бы сортировки можно было включать/выключать

при этом две разные нельзя включить одновременно

тоже самое с фильтрацией выполненых

при этом при перезагрузке, включённость/выключенность фильтра и сортировки должна сохраняться

текст вписанные в текстовое поле - тоже должен сохраняться при перезагрузке 

даже, в случае, когда тудушка не была добавлена

*/