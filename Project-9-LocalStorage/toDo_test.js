const store = JSON.parse(localStorage.getItem("store") || "[]");

function createNewItem(title) {
  store.push({
    title: title,
    isChecked: false,
  });
  onChange();
}
function setIsChecked(value, ind) {
  store[ind].isChecked = value;
  onChange();
}
//Model

function draw() {
  const html = [];

  store.forEach(function (item, ind) {
    const label = document.createElement("Lable");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.isChecked;
    checkbox.addEventListener("change", function () {
      onCheckboxChanged(ind);
    });

    const text = document.createElement("span");
    text.innerHTML = item.title;

    label.append(checkbox, text);
    html.push(label);
  });

  const form = document.createElement("div");

  const input = document.createElement("input");
  input.placeholder = "Введите текст";

  const button = document.createElement("button");
  button.innerHTML = "Создать новый элемент";
  button.addEventListener("click", function () {
    onButtonClicked(input.value);
  });

  form.append(input, button);

  html.push(form);

  const container = document.getElementById("container");
  container.innerHTML = "";
  html.forEach(function (htmlItem) {
    container.append(htmlItem);
  });
}
// <Controller>
function onChange() {
  localStorage.setItem("store", JSON.stringify(store));
  draw();
}
function onCheckboxChanged(ind) {
  setIsChecked(!store[ind].isChecked, ind);
}
function onButtonClicked(inputValue) {
  createNewItem(inputValue);
}
// </Controller>
draw();
