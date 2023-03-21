//model
const arrImage =  [
    "https://fastly.picsum.photos/id/282/200/300.jpg?hmac=CVnHWoW4uSir_3zYiJzNPVs8XMSyf968WjkWvPlwu3g", //доменная модель
    "https://fastly.picsum.photos/id/663/200/300.jpg?hmac=OYPBwsRmaygvAiTN0M4ZNNWBZqgbTGuH2aXkJ4FLX_M",
    "https://fastly.picsum.photos/id/1035/200/300.jpg?hmac=744aBtkMLjfDyn2TzkMxsFzw2T0L57TMlNGFlX-Qgq0",
    "https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE",
    "https://fastly.picsum.photos/id/841/200/300.jpg?hmac=G9hBg_h2jvXDwBgnqCm8LO9PXRrPRWbz1xgdUrMf1Y8",
  ]

  const arrImage2 =  [
    "https://fastly.picsum.photos/id/282/200/300.jpg?hmac=CVnHWoW4uSir_3zYiJzNPVs8XMSyf968WjkWvPlwu3g", //доменная модель
    "https://fastly.picsum.photos/id/663/200/300.jpg?hmac=OYPBwsRmaygvAiTN0M4ZNNWBZqgbTGuH2aXkJ4FLX_M",
    "https://fastly.picsum.photos/id/1035/200/300.jpg?hmac=744aBtkMLjfDyn2TzkMxsFzw2T0L57TMlNGFlX-Qgq0",
    "https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE",
    "https://fastly.picsum.photos/id/841/200/300.jpg?hmac=G9hBg_h2jvXDwBgnqCm8LO9PXRrPRWbz1xgdUrMf1Y8",
  ]

  const arrImage3 =  [
    "https://fastly.picsum.photos/id/282/200/300.jpg?hmac=CVnHWoW4uSir_3zYiJzNPVs8XMSyf968WjkWvPlwu3g", //доменная модель
    "https://fastly.picsum.photos/id/663/200/300.jpg?hmac=OYPBwsRmaygvAiTN0M4ZNNWBZqgbTGuH2aXkJ4FLX_M",
    "https://fastly.picsum.photos/id/1035/200/300.jpg?hmac=744aBtkMLjfDyn2TzkMxsFzw2T0L57TMlNGFlX-Qgq0",
    "https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE",
    "https://fastly.picsum.photos/id/841/200/300.jpg?hmac=G9hBg_h2jvXDwBgnqCm8LO9PXRrPRWbz1xgdUrMf1Y8",
  ]

function createState (arr, idEl = 0) {
  const state = {
    array: arr,
    idEl: idEl
  }
  return state;
}

//view

const render = (root, localState, elements) => {

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", localState.array[localState.idEl])
  elements.triangleLeft.innerText = "left";
  elements.triangleRight.innerText = "right";

  elements.boxForImage.replaceChildren();
  elements.boxForImage.append(imageElement);

  root.replaceChildren();
  root.append(elements.triangleLeft, elements.boxForImage, elements.triangleRight);
};

//controller

const createElements = () => ({
  triangleLeft: document.createElement("button"),
  triangleRight: document.createElement("button"),
  boxForImage: document.createElement("div")
});

const createActions = (box, localState, elements) => ({
  start: () => render(box, localState, elements),

  moveLeft: () => {
    localState.idEl =
      localState.idEl === 0 ? localState.array.length - 1 : localState.idEl - 1;
    render(box, localState, elements);
  },

  moveRight: () => {
    localState.idEl =
      localState.idEl === localState.array.length - 1 ? 0 : localState.idEl + 1;
    render(box, localState, elements);
  },
});

const sliderComponate = (state) => {
  const elements = createElements();
  const root = document.createElement('div');
  root.classList.add("root")
  document.body.append(root);

  const actions = createActions(root, state, elements);
  elements.triangleLeft.addEventListener("click", actions.moveLeft);
  elements.triangleRight.addEventListener("click", actions.moveRight);
  actions.start();
};

const finish = (arr) => {
  sliderComponate(createState(arr))
}

finish(arrImage);
finish(arrImage2);
finish(arrImage3);

//localState - объект состояния
