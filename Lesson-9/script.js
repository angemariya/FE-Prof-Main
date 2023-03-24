const root = document.querySelector("#root");
const card = document.createElement("div");
card.classList.add("card");

root.append(card);

const img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/seed/picsum/300");

const p = document.createElement("p");
p.innerText = "Some text";

card.append(img, p);

const arr = [];

for(let i = 1; i<=10; i++) {
    arr.push(i)
}

const arr2 = arr.filter(el=>el%2===0)

const arr3 = arr2.reduce((acc, el) => acc += el**2, 0)

console.log(arr3);