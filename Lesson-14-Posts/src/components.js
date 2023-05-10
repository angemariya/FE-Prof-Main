export function postComponent(post) {
  const div = document.createElement("div");
  div.innerText = post.title;
  return div;
}

export function buttonComponent(label, onClick) {
  const button = document.createElement("button");
  button.innerText = label;
  button.addEventListener("click", onClick);
  return button;
}
