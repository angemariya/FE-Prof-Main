//model - данные и работа с ними
//состояние
const state = {
  entities: [], //используем, если много обьектов данных
  entity: {}, // используем, если один обьект данных
  viewModel: {}, //записываем свойства, которые мы сами внутри нашего кода контролируем
};

//тут мб функции к-е работают с данными

//view

const calculateElements = (root, localState) => {
    //вычислим, что мы отрисовываем исходя из нашего состояния
    const divArray = [];
    for (let j = 0; j < 10; j++) {        
        for (let i = 0; i < 10; i++) {
            const divRow = document.createElement("div");
            divRow.className = "field";
            divRow.addEventListener("click",()=>{
                console.log([i+1], [j+1]);
            })
            divArray.push(divRow);
        }
    }
    return divArray;
};

const render = (localState, root) => {
  const elements = calculateElements(localState); // вычисляем, что мы рисуем, записываем в переменную elements
  root.replaceChildren();
  root.append(...elements);
};
//controller

const getActions = (localState, root) => ({
  start: () => {
    render(localState, root);
  },
});

const root = document.querySelector("#root");
const actions = getActions(state, root);
actions.start();
