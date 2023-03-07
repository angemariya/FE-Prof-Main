/*function lS() {
        for(let i = 0; i<localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            console.log(key, value)
    }
}
*/

const button = document.querySelector('input[type="button"]');
const newToDoInput = document.querySelector('input[type="text"]');
const list = document.querySelector("#list");
const array = localStorage.getItem("toDo") ? localStorage.getItem("toDo").split(",") : []; //state


const createToDo = (text) => {
    const newToDoContainer = document.createElement("label");
    const newToDoValue = document.createElement("input");
    const paragraph = document.createElement("p");

    newToDoValue.setAttribute("type", "checkbox");
    paragraph.innerText = text;
    newToDoContainer.append(newToDoValue, paragraph);
    return newToDoContainer;
}

const handleAdd = event => {
    list.append(createToDo(newToDoInput.value));
    array.push(newToDoInput.value);
    localStorage.setItem("toDo",array.join(",")); // записываем массив в строку - serialisation
    newToDoInput.value = "";
}

//array.map(createToDo).forEach(el=>list.append(el));
list.append(...array.map(createToDo))

button.addEventListener("click", handleAdd);


/*
1. прокомментировать
2. добавьте удаление всех элементов одной кнопкой (добавить ее в разметку "Очистить")
3. добавить к каждому элементу кнопку "удалить", которая удаляет элемент
4.***** сохранять состояние чекбоксов (JSON.stringify, JSON.parse)
*/