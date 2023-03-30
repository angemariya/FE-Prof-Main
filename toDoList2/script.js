//model
const state = [];

const readFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
const writeLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

//view

const createElements = (localState, actions) => {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    
    const inputBtn = document.createElement("input");
    inputBtn.setAttribute("type", "button");
    inputBtn.setAttribute("value", "add");
    
    inputBtn.addEventListener("click", () => actions.addToDo(input.value));
    form.append(input, inputBtn);

    const ul = document.createElement('ul');
    ul.innerHTML = "Your ToDos for today"

    const lis = localState.map(el => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        const text = document.createElement("p");
        text.innerHTML = el.toDo;
        const time = document.createElement("time");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "delete";
        li.append(checkbox, text, time, deleteButton);
        return li;
    })

    ul.append(...lis);
    const arrContainer = [];
    arrContainer.push(form, ul)
    return arrContainer;
}

const render = (localState, root, actions) => {
    const elements = createElements(localState, actions);
    root.replaceChildren();
    root.append(...elements);
}

//controller

const createActions = (localState, root) => {
    const actions = {
    start: () => render(localState, root, actions),
    addToDo: (value) => {
        localState.push({toDo: value})
        render(localState, root, actions);
        //сохраняем в ЛС
    },
    }
    
    return actions;
}

const root = document.querySelector('#root');
const actions = createActions(state, root);
actions.start();