//  localStorage.getItem(key, value)


const button = document.querySelector(".add");                      // кнопка добавления
const clearButton = document.querySelector(".clear")                // кнопка удаления
const newToDoInput = document.querySelector('input[type="text"]');  // текстовое поле
const list = document.querySelector("#list");                       // форма со списком todo

const array = localStorage.getItem("toDo") ? localStorage.getItem("toDo").split(",") : []; //state

const createToDo = (text) => {   //функция создания туду в разметке
    const newToDoContainer = document.createElement("label");   // создание лейбла 
    const newToDoValue = document.createElement("input");       // создания инпута для чекбокса
    const paragraph = document.createElement("p");              // создание p для текста
    const deleteButton = document.createElement("input");       // создание инпута для кнопки удаления
    
    const dlt = event => {                                      // функция удаления элемента
        newToDoContainer.remove();                              //удаление элемента
        localStorage.setItem("toDo", array.filter(el => el !== paragraph.innerText).join(",")); //обновление хранилища
        localStorage.removeItem(paragraph.innerText)
    };

    const changeHandler = event => {        //функция сохранения состояния чекбоксов
        if (newToDoValue.checked) {
            localStorage.setItem(paragraph.innerText, JSON.stringify(newToDoValue.checked)) //newToDoValue.checked  - true !!
        } else {
            localStorage.setItem(paragraph.innerText, false)
        }
    }

    function winOnload() {                  // функция добавления сохраненных чекбоксов при загрузке страницы
        newToDoValue.checked = localStorage.getItem(paragraph.innerText) === 'true' 
    }

    window.addEventListener("load", winOnload)

    paragraph.innerText = text;    // добавление текста внутрь элемента p ч/з переменную        
    
    deleteButton.addEventListener("click", dlt);    // доб слушатель кнопке удаления с функцией удаления элемента
    deleteButton.setAttribute("type", "button");    // доб атрибуты тип 
    deleteButton.setAttribute("value", "delete");            // и значение
    
    newToDoContainer.append(newToDoValue, paragraph, deleteButton);// добавляем checkbox и p внутрь label-контейнер
    newToDoValue.setAttribute("type", "checkbox");  // добавление атрибутов у инпутов
    newToDoValue.addEventListener("change", changeHandler);

    return newToDoContainer; // возвращаем готовый label-контейнер;
}

const handleAdd = event => { //функция добавления туду
    list.append(createToDo(newToDoInput.value));    // добавляем в форму новый toDo, аргумент - то что ввели в поле текстового импута
    array.push(newToDoInput.value);                 // добавляем в массив текстовые значения toDo
    localStorage.setItem("toDo", array.join(","));   // добавление в хранилище массива, преобразованного в строку (записываем массив в строку - serialisation)
    newToDoInput.value = "";                        // очищение текстового поля 
}

const clear = event => {    //функция очистки формы
    list.remove();                                              // очищает форму
    localStorage.clear();                // очищает хранилище
    location.reload();
}

//array.map(el=>createToDo(el)).forEach(el=>list.append(el));
list.append(...array.map(createToDo))               // добавляет в форму элемент(ы) из массива array, который(-ые) проходят преобразование функцией создания todo

button.addEventListener("click", handleAdd);        // слушатель для кнопки добавить
clearButton.addEventListener("click", clear);       // слушатель для кнопки удалить


/*
1. v прокомментировать 
2. v добавьте удаление всех элементов одной кнопкой (добавить ее в разметку "Очистить")
3. v добавить к каждому элементу кнопку "удалить", которая удаляет элемент
4.***** сохранять состояние чекбоксов (JSON.stringify, JSON.parse)

JSON.stringify - civilization
*/