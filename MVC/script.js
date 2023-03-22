//model

const state = {
    entities: [] , //используем, если много обьектов данных
    entity: {}, // используем, если один обьект данных
    viewModel: {}, //записываем свойства, котрые мы сами внутри нашего кода контролируем
}

//функции к-е работают с данными

//view

const calculateElements = (localState) => {
    //вычислим, что мы отрисовываем исходя из нашего состояния
    
    return [];
};

const render = (localState, root) => { 
    const elements = calculateElements(localState);  // вычисляем, что мы рисуем, записываем в переменную elements
    root.replaceChildren();
    root.append(...elements);
}

//controller

const getActions = (localState, root) => ({
    start: () => {
        render(localState, root);
    },
})

const root = document.querySelector('#root');
const actions = getActions(state, root);
actions.start();