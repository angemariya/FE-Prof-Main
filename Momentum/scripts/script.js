//model

const state = {
  userName: "Maria"
};

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

  form.append(text);
  form.addEventListener("submit", (event)=>{
    event.preventDefault();
  })

  const greeting = document.createElement("h2");
  greeting.classList.add("js-greeting", "greeting");
  greeting.innerHTML = `Hello, ${localState.userName}`;

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
    localStorage.setItem("username")
  }, 

});

const root = document.querySelector("#root");
const actions = getActions(state, root);
actions.start();
