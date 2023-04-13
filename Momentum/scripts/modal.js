//model

const stateModal = [];


const createEntities = (text) => ({
    text: text,
    isChecked: false
})

//view

const calculateElementsModal = (localState, actionsModal) => {
    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modal-wrapper");
    const modalHeader = document.createElement("span");
    modalHeader.innerHTML = "Today";
    modalHeader.classList.add("modal-header")
    const form = document.createElement("form");
    form.classList.add("modal-form");
    const textToDo = document.createElement("input");
    textToDo.setAttribute("type", "text");
    textToDo.setAttribute("placeholder", "enter your todo")
    textToDo.classList.add("to-do-input")

    
    const listToDo = document.createElement("ul");
    listToDo.classList.add("to-do-list");
    
    
    form.addEventListener("submit", (event)=>actionsModal.submitForm(event, textToDo.value));
    
    const lis = localState.map(el=> {
        const li = document.createElement("li");
        li.classList.add("li-todo")
        li.innerHTML = el.text;
        return li;
    })
    
    form.append(textToDo);
    listToDo.append(...lis);
    modalWrapper.append(modalHeader, form, listToDo);
    
    return [modalWrapper];
};

const renderModal = (localState, root, actionsModal) => { 
    const elements = calculateElementsModal(localState, actionsModal); 
    root.replaceChildren();
    root.append(...elements);
}

//controller

const getActionsModal = (localState, rootModal) => ({
    start: () => {
        renderModal(localState, rootModal, actionsModal);
    },
    submitForm: (event, text) => {
        event.preventDefault();
        localState.push(createEntities(text));
        renderModal(localState, rootModal, actionsModal);
    }, 
    
})

const rootModal = document.querySelector('#modal');
const actionsModal = getActionsModal(stateModal, rootModal);
actionsModal.start();