const button = document.querySelector(".nav_btn");
const links = document.querySelector(".links");

button.addEventListener("click", () => {
    links.classList.toggle("active");
});
