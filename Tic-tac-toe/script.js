//model

const state = {
  entities: [2,2,2,2,2,2,2,2,2], //используем, если много обьектов данных
  //2-пустое поле, 1-крестики, 0-нолики
  entity: {}, // используем, если один обьект данных
  //текущий ход: 1-крестики, 0-нолики
  viewModel: {
    currentTurn: 1
  } //записываем свойства, которые мы сами внутри нашего кода контролируем
};

//функции к-е работают с данными

//view

const calculateElements = (localState, actions) => {
  //вычислим, что мы отрисовываем исходя из нашего состояния
  const template = localState.entities.map((el,i) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = localState.entities[i] === 0 ? "O" : localState.entities[i] === 1 ? "X" : "";
    square.addEventListener("click", () => {actions.markSquare(i)});
    return square;
  });

  return template;
};

const render = (localState, root, actions) => {
  const elements = calculateElements(localState, actions); // вычисляем, что мы рисуем, записываем в переменную elements
  // elements - массив с данными из calculateElements
  root.replaceChildren();
  root.append(...elements);
};

//controller

const getActions = (localState, root) => ({
  start: () => {
    render(localState, root, actions);
  },
  markSquare: (i) => {
    localState.entities[i] = localState.viewModel.currentTurn;
    if (localState.viewModel.currentTurn === 1) {
      localState.viewModel.currentTurn = 0
    } else {
      localState.viewModel.currentTurn = 1
    }

    render(localState, root, actions);
  },
});

const root = document.querySelector("#root");
const actions = getActions(state, root);
actions.start();
