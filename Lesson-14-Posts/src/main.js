import "./style.css";
import { getPost, getAllPosts } from "./api.js";
import { buttonComponent, postComponent } from "./components.js";

let postId = 1;
let allPosts = await getAllPosts();
const root = document.querySelector("#app");
const btn = document.querySelector("button");

async function handlePrev() {
  postId--;
  await getPost(postId);
  await render(root);
}

async function handleNext() {
  postId++;
  await getPost(postId);
  await render(root);
}

async function render() {
  root.innerHTML = "Loading";

  try {
    const post = await getPost(postId);
    root.innerHTML = "";
    root.append(
      buttonComponent({
        label: "Prev post",
        onClick: handlePrev,
        disabled: postId === 1,
      }),
      postComponent(post),
      buttonComponent({
        label: "Next post",
        onClick: handleNext,
        disabled: postId === 100,
      })
    );
  } catch (e) {
    root.innerHTML = "";
    root.append(
      e.message,
      buttonComponent({
        label: "Reset",
        onClick: handleReset,
      })
    );
  }
}

render(root);
