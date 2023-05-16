const wrapper = document.querySelector(".wrapper");
const [left, right] = document.querySelectorAll("button");

let currentPhoto = 0;

function getOffsetFromPhotoIndex(i) {
  return `${i * -400 + 10}px`;
}

left.addEventListener("click", () => {
  if (currentPhoto === 0) return;

  currentPhoto--;
  wrapper.style.left = getOffsetFromPhotoIndex(currentPhoto);
});
right.addEventListener("click", () => {
  if (currentPhoto === wrapper.children.length - 1) return;

  currentPhoto++;
  wrapper.style.left = getOffsetFromPhotoIndex(currentPhoto);
});
