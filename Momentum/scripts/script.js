//model

const state = JSON.parse(localStorage.getItem("user")) || {};
//view

const createObj = (name) => ({
  username: name
})

const createElements = (localState, actions) => {
  const clockWrap = document.createElement("div");
  clockWrap.classList.add("js-clock");
  const clockTitle = document.createElement("h1");
  clockTitle.classList.add("js-clock-title");

  actions.updateDate(() => {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  });

  const form = document.createElement("form");
  form.classList.add("form");
  const usernameInput = document.createElement("input");
  usernameInput.setAttribute("type", "text");
  usernameInput.classList.add("username-input");

  form.addEventListener("submit", (event)=>actions.addUserName(event, usernameInput.value));
  form.append(usernameInput);

  const greeting = document.createElement("h2");
  greeting.classList.add("js-greeting", "greeting");
  
 localState["username"] === undefined && form.classList.remove("close");

  if (localState["username"] !== undefined) {
    form.classList.add("close") 
    greeting.innerHTML = `Hello, ${localState["username"]}!`}
  
  usernameInput.setAttribute("placeholder", "Enter your name");
  

  clockWrap.append(clockTitle, form, greeting);

  return [clockWrap]
};

const render = (localState, root, actions) => {
  const elements = createElements(localState, actions); 
  root.replaceChildren();
  root.append(...elements);
};

//controller

const getActions = (localState, root) => ({
  start: () => {
    render(localState, root, actions);
  },

  updateDate: (fn) => {
    setInterval(fn, 1000);
  },

  save: () => {
    localStorage.setItem("user", JSON.stringify(localState));
  },

  addUserName: (event, name) => {
    event.preventDefault();
    localState = createObj(name); //нет сохранения в state ?
    actions.save();
    render(localState, root, actions);
  },
});

const root = document.querySelector("#root");
const actions = getActions(state, root);
actions.start();
