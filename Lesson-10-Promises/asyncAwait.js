/*function someAsyncFn() {
    return new Promise(resolve => resolve(1));
}

const a = someAsyncFn();

//async отмечаем функцию как асинхронную

async function someAsyncFnA() { //аналогично создает промис
    return 1; //внутри работаем как с синхронной функцией
}

const aa = someAsyncFnA()

//await ключевое слово используется вместо then
//раскрывает Promise
//async используется перед промисами/вызовом функции которая возвращает промис

function someSyncFn(){
    return 2;
}

async function someAsyncFnB() {
    //const a = await someAsyncFnA(); //ждет сихронное значение от функции 
    //const b = await someAsyncFnB();
    const [a, b] = await Promise.all([someAsyncFnA(), someAsyncFnB()]); //деструктуризация массива, тоже самое что наверху
    const e = someSyncFn();
    const d = new Promise(resolve => resolve(10));
    const eD = await d;
    return b + a + e;
}

function someAsyncFnB() {
    return someAsyncFnA.then(a=> someAsyncFnB().then(b => b + a))
}

async function myAge() {
    return 32
}

const myObj = async()=>{
    const me = {
    name: "Maria",
    age: await myAge()
}
return me
}


const childAge = async()=>{
    return (await myObj()).age - 20
}

const title = async() => {
    let myTitle = "mother";
    const myOldAge = 2100 - 2023 + (await myObj()).age;
    const numberofGrands = Math.floor(myOldAge/20)
   for(let i = 1; i<=numberofGrands; i++){
    myTitle = "grand " + myTitle;
   }
    return myTitle
}

console.log(title())
*/
//result = "grand".repeat(countAge/20) + "mother" -- метод строк