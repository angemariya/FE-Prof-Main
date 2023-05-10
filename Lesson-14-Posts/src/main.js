import "./style.css";
import { getPost, getAllPosts } from "./api.js";
import { buttonComponent, postComponent } from "./components.js";

let postId = 1;
let allPosts = await getAllPosts();
const root = document.querySelector("#app");
const btn = document.querySelector("button");

async function handlePrev() {
  postId = postId > 0 && postId - 1;
  await getPost(postId);
  await render(root);
}

async function handleNext() {
  postId = postId <= allPosts.length && postId + 1;
  await getPost(postId);
  await render(root);
}

async function render(root) {
  root.innerHTML = "Loading";

  const post = await getPost(postId);

  root.innerHTML = "";
  root.append(
    buttonComponent("prev", handlePrev),
    postComponent(post),
    buttonComponent("next", handleNext)
  );
}

render(root);
