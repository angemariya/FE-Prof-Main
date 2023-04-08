//model
const state = localStorage.getItem("toDo") ? JSON.parse(localStorage.getItem("toDo")) : [];

const createToDoEntity = (text, data) => ({
  text: text,
  isCompleted: false,
  deadLine: data
});

//view --------------------------

const createElements = (localState, actions) => {
    const form = document.createElement("form");
    const inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("placeholder", "Enter your todo")
    
    const addButton = document.createElement("input");
    addButton.setAttribute("type", "button");
    addButton.setAttribute("value", "add");
    addButton.classList.add("add-button");
    
    const inputTime = document.createElement("input");
    inputTime.setAttribute("type", "date");
    inputTime.classList.add("input-time");

    addButton.addEventListener("click", () => actions.addToDo(inputText.value, inputTime.value));
    form.append(inputText, inputTime, addButton);

    const ul = document.createElement('ul');
    ul.classList.add("list");

    const lis = localState.map((el,i) => { //поставить фильтрацию перед map
        const li = document.createElement("li");
        const checkboxWrap = document.createElement("div");
        checkboxWrap.classList.add("checkbox-wrapper-1");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("id", `example-${i}`);
        checkbox.classList.add("substituted");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("aria-hidden", "true");
        const text = document.createElement("label");
        text.classList.add("text");
        text.setAttribute("for", `example-${i}`);
        text.innerHTML = el.text;

        checkboxWrap.append(checkbox, text);

        const time = document.createElement("time");
        time.innerHTML = el.deadLine;
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "delete";
        deleteButton.addEventListener("click", ()=> actions.deleteFn(el));
        deleteButton.classList.add("delete");
        li.append(checkboxWrap, time, deleteButton);
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

//controller -----------

const createActions = (localState, root) => {
    const actions = {
        start: () => render(localState, root, actions),

        save: () => !localStorage.setItem("toDo", JSON.stringify(localState)) && localState,

        addToDo: (text, date) => {
            localState.push(createToDoEntity(text, date));
            render(localState, root, actions);
            actions.save();
        },

        deleteFn: (el) => {
            const index = localState.indexOf(el);
            (index !== -1) && (localState.splice(index, 1));
            render(localState, root, actions);                                  
            actions.save();
            //обновление хранилища
        }

    }
    
    return actions;
}

const root = document.querySelector('#root');
const actions = createActions(state, root);
actions.start();