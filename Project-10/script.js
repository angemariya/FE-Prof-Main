//model
const state = {
  array: [
    "https://fastly.picsum.photos/id/282/200/300.jpg?hmac=CVnHWoW4uSir_3zYiJzNPVs8XMSyf968WjkWvPlwu3g", //доменная модель
    "https://fastly.picsum.photos/id/663/200/300.jpg?hmac=OYPBwsRmaygvAiTN0M4ZNNWBZqgbTGuH2aXkJ4FLX_M",
    "https://fastly.picsum.photos/id/1035/200/300.jpg?hmac=744aBtkMLjfDyn2TzkMxsFzw2T0L57TMlNGFlX-Qgq0",
    "https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE",
    "https://fastly.picsum.photos/id/841/200/300.jpg?hmac=G9hBg_h2jvXDwBgnqCm8LO9PXRrPRWbz1xgdUrMf1Y8",
  ],
  idEl: 0,
};

const state2 = {
    array: [
      "https://fastly.picsum.photos/id/282/200/300.jpg?hmac=CVnHWoW4uSir_3zYiJzNPVs8XMSyf968WjkWvPlwu3g", //доменная модель
      "https://fastly.picsum.photos/id/663/200/300.jpg?hmac=OYPBwsRmaygvAiTN0M4ZNNWBZqgbTGuH2aXkJ4FLX_M",
      "https://fastly.picsum.photos/id/1035/200/300.jpg?hmac=744aBtkMLjfDyn2TzkMxsFzw2T0L57TMlNGFlX-Qgq0",
      "https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE",
      "https://fastly.picsum.photos/id/841/200/300.jpg?hmac=G9hBg_h2jvXDwBgnqCm8LO9PXRrPRWbz1xgdUrMf1Y8",
    ],
    idEl: 0,
  };

//view

const render = (root, localState) => {
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", localState.array[localState.idEl]);
  root.replaceChildren();
  root.append(imageElement);
};

//controller
const findElements = (suffix) = {
    triangleLeft: document.querySelector(".triangle`${suffix}`.left"),
    triangleRight: document.querySelector(".triangle`${suffix}`.right"),
    boxForImage: document.querySelector(".boxForImage`${suffix}`")       //root
}

const createActions = (box, localState) => ({
  start: () => render(box, state),

  moveLeft: () => {
    localState.idEl = localState.idEl === 0 ? localState.array.length - 1 : localState.idEl - 1;
    render(box, state);
  },

  moveRight: () => {
    localState.idEl = localState.idEl === localState.array.length - 1 ? 0 : localState.idEl + 1;
    render(box, state);
  },
});

const sliderComponate = (state, suffix) => {
    const actions = createActions(elements.boxForImage, state);
    const elements = findElements(suffix);
    elements.triangleLeft.addEventListener("click", actions.moveLeft);
    elements.triangleRight.addEventListener("click", actions.moveRight);
    actions.start();
}

sliderComponate(state, "")
sliderComponate(state2, "2")

//localState - объект состояния
