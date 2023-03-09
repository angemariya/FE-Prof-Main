//  localStorage.getItem(key, value)


const button = document.querySelector(".add");                      // кнопка добавления
const clearButton = document.querySelector(".clear")                // кнопка удаления
const newToDoInput = document.querySelector('input[type="text"]');  // текстовое поле
const list = document.querySelector("#list");                       // форма со списком todo

const array = localStorage.getItem("toDo") ? JSON.parse(localStorage.getItem("toDo")) : []; //state
const createToDoEntity = (textToDo) => ({ text: textToDo, isCompleted: false })


const createToDo = (toDoEntity) => {   //функция создания туду в разметке
    const newToDoContainer = document.createElement("label");   // создание лейбла 
    const newToDoValue = document.createElement("input");       // создания инпута для чекбокса
    const paragraph = document.createElement("p");              // создание p для текста
    const deleteButton = document.createElement("input");       // создание инпута для кнопки удаления
    
    const dlt = event => {                                     // функция удаления элемента
         
        newToDoContainer.remove();                             //удаление элемента
        // array.splice(0, array.length, ...array.filter(el => el !== paragraph.innerText));
        const index = array.indexOf(toDoEntity);
        (index !== -1) && (array.splice(index, 1));                                  
        localStorage.setItem("toDo", JSON.stringify(array));     //обновление хранилища
    };

    const handleChange = () => {                                //функция сохранения состояния чекбоксов
        toDoEntity.isCompleted = !toDoEntity.isCompleted;
        localStorage.setItem("toDo", JSON.stringify(array));
    }

    paragraph.innerText = toDoEntity.text;      
    
    deleteButton.addEventListener("click", dlt);            // доб слушатель кнопке удаления с функцией удаления элемента
    deleteButton.setAttribute("type", "button");            // доб атрибуты тип 
    deleteButton.setAttribute("value", "delete");                  // и значение
    
    newToDoContainer.append(newToDoValue, paragraph, deleteButton); // добавляем checkbox и p внутрь label-контейнер
    newToDoValue.setAttribute("type", "checkbox");                  // добавление атрибутов у инпутов
    newToDoValue.checked = toDoEntity.isCompleted;
    newToDoValue.addEventListener("change", handleChange);         //слушатель на событие change

    return newToDoContainer;                        // возвращает готовый label-контейнер;
}

const handleAdd = event => { //функция добавления туду
    const toDoEntity = createToDoEntity(newToDoInput.value);
    array.push(toDoEntity);
    list.append(createToDo(toDoEntity));     // добавляем в форму новый toDo, аргумент - то что ввели в поле текстового импута
    localStorage.setItem("toDo", JSON.stringify(array));   
    newToDoInput.value = "";                         // очищение текстового поля 
}

const clear = event => {    //функция очистки формы
    
    // Первый вариант
    /*
    const collChildren = []
    for(let i = 0; i < list.children.length; i++){
        collChildren.push(list.children.item(i));
    }
    collChildren.forEach(e => e.remove())
    */

    //Второй вариант
    /*
    list.replaceChildren(); 
    */
   
    while (list.firstChild) list.firstChild.remove(); /*list.removeChild(list.firstChild); */

    array.splice(0,array.length);
    localStorage.removeItem("toDo");                           // очищает хранилище
    //location.reload();
}

//array.map(el=>createToDo(el)).forEach(el=>list.append(el));
list.append(...array.map(createToDo))            // добавляет в форму элемент(ы) из массива array, который(-ые) проходят преобразование функцией создания todo

button.addEventListener("click", handleAdd);     // слушатель для кнопки добавить
clearButton.addEventListener("click", clear);    // слушатель для кнопки удалить

/*const toDoEntity = {
    text: "some to do",
    isCompleted: false
}

*/
/*

1. v прокомментировать 
2. v добавьте удаление всех элементов одной кнопкой (добавить ее в разметку "Очистить")
3. v добавить к каждому элементу кнопку "удалить", которая удаляет элемент
4. v сохранять состояние чекбоксов (JSON.stringify, JSON.parse)

*/