let count;/*
setTimeout(()=>{
    count = 1000;
    console.log(count);
},1000);

const countPromise = new Promise((resolve) => {
    
    setTimeout(() => {
        resolve(1000)
    }, 1000)})

countPromise.then((value)=>console.log(value));
*/
//console.log(count);

//отложенное значение, к которому мы обращаемся с помощью
//метода then.
namePromise //результат функции которая возвращает промис

const allPromise = Promise.all([namePromise, agePromise])//принимает массив
allPromise.then(value => console.log(`${value[0]} is ${value[1]} years old`))

//будет готов тогда когда оба промиса будут готовы
 Promise.all([namePromise, agePromise]).then(([name, age]) => console.log(`${name} is ${age} years old`))

 // const onChange = (name, age) => console.log(`${name} is ${age} years old`);

const nameInput = document.querySelector('input[type="text"]');
const ageInput = document.querySelector('input[type="number"]');

function onReady(input) {
  let value;
  const result = new Promise((resolve) => {
    input.addEventListener("change", () => (value = input.value));
    input.addEventListener("focusout", () => resolve(value));
  });

  return result;
}

const namePromise = onReady(nameInput);
const agePromise = onReady(ageInput);

Promise.all([namePromise, agePromise]).then(([name, age]) =>
  console.log(`${name} is ${age} years old`)
);
// namePromise.then((name) => {
//   agePromise.then((age) => onChange(name, age));
// });

// let count;
// setTimeout(() => {
//   count = 1000;
// }, 1000);

// console.log(count);

const countPromise = new Promise((resolve) => {
  resolve(1000);
});

countPromise
  .then((value) => value * 200)
  .then(
    (value) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(value - 300), 1000);
      })
  )
  .then((value) => console.log(value));

countPromise.then((value) => console.log(value));

//console.log(count);