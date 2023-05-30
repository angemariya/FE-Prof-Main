//model - данные и работа с ними
//состояние
const state = {
  entities: [], //используем, если много обьектов данных
  entity: {}, // используем, если один обьект данных
  viewModel: {}, //записываем свойства, которые мы сами внутри нашего кода контролируем
};


const createState = () => {
  const createSquare = (x,y) => ({
    x: x,
    y: y,
    status: false
  })
    for (let j = 1; j <= 10; j++) {        
        for (let i = 1; i <= 10; i++) {
            state.entities.push(createSquare(i,j))
        }
    }
    return state;
}
createState();

//view

const calculateElements = (localState, actions) => {
    //вычислим, что мы отрисовываем исходя из нашего состоянии
    const template = localState.entities.map(el=>{
      const div = document.createElement("div");
      div.classList.add("field");
      div.addEventListener("click", ()=>actions.getCoordinate(el))
      div.addEventListener("click", ()=>actions.changeStatus(el))
      if (el.status) {
        div.style.backgroundColor = "green";
      }
      return div;
    })
    return template;
}

const render = (localState, root, actions) => {  // вычисляем, что мы рисуем, записываем в переменную elements
  const elements = calculateElements(localState, actions);
  root.replaceChildren();
  root.append(...elements);

};
//controller

const getActions = (localState, root) => {
  const card = {
  start: () => {render(localState, root, card)},
  
  getCoordinate:(x) => {console.table([x])},
  
  changeStatus: (square) => {
    square.status = !square.status;
    render(localState, root, card);
  }
  }
  return card;
};

const root = document.querySelector("#root");
const actions = getActions(state, root);
actions.start();



// сделать отрисовку из модели
// хранить в модели состояние клеточек "нажата" "не нажата"
// нажатую выделять цветом в отрисовке
// при нажатии менять состояние клетки