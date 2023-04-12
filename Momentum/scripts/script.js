//model
const state = localStorage.getItem("username") || "";
//view

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
  const text = document.createElement("input");
  text.setAttribute("type", "text");
  text.classList.add("username-input");

  form.addEventListener("submit", (event)=>actions.addUserName(event, text.value));
  form.append(text);

  const greeting = document.createElement("h2");
  greeting.classList.add("js-greeting", "greeting");
  
  localState === "" && form.classList.remove("close");
  localState !== "" && form.classList.add("close");
  if (!localState) {
    text.setAttribute("placeholder", "Enter your name");
  } else {
    greeting.innerHTML = `Hello, ${localState}!`;
  }

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

  save: (text) => {
    localStorage.setItem("username", text);
  },

  getName:() => {
    localStorage.getItem("username");
  },

  addUserName: (event, text) => {
    event.preventDefault();
    localState = text;
    actions.save(text);
    render(localState, root, actions);
  },

});

const root = document.querySelector("#root");
const actions = getActions(state, root);
actions.start();
