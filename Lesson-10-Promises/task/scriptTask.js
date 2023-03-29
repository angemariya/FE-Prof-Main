/*const start = Date.now();

while (true){
    const current =  Date.now();
    if (current - start > 5000){
        break
    }
}


const promise = new Promise((resolve, reject) => {
const randNum = Math.random();
if (randNum<0.5) {
    resolve(randNum)
} else {
    reject(randNum)
}
});

promise.then(result=>console.log(`ALL OK. The value is ${result}`),
            result=>console.log(`ALL BAD. The value is ${result}`));
            
*/

//Date.now() - количество милисекунд

const promise1 = new Promise((resolve, reject) => {
    const date = Date.now();
    setTimeout(() => {
        if (date % 2 === 0) {
            return resolve(date)
        } else {
            return reject(date)
        }  
    }, 1000);
})

const promise2 = new Promise((resolve, reject) => {
    const date = Date.now();
    setTimeout(() => {
        if (date % 2 === 0) {
            return resolve(date)
        } else {
            return reject(date)
        }  
    }, 2000);
})


const promise3 = new Promise((resolve, reject) => {
    const date = Date.now();
    setTimeout(() => {
        if (date % 2 === 0) {
            return resolve(date)
        } else {
            return reject(date)
        }  
    }, 3000);
})


promise1.then(
    () => console.log("promise1 отработал"),
    () => console.log("promise1 не отработал")
)


promise2.then(
    () => console.log("promise2 отработал"),
    () => console.log("promise2 не отработал")
)


promise3.then(
    () => console.log("promise3 отработал"),
    () => console.log("promise3 не отработал")
)

Promise.all ([promise1, promise2, promise3]).then(
    ()=>console.log("Все отработало"),
    ()=>console.log("Есть ошибки")
)

const promise_1 = new Promise((resolve, reject)=>{
    const data = Date.now();
    setTimeout(()=>{return resolve(data)}, 1000)
})

const promise_2 = new Promise((resolve, reject)=>{
    const data = Date.now();
    setTimeout(()=>{return resolve(data)}, 2000)
})

const promise_3 = new Promise((resolve, reject)=>{
    const data = Date.now();
    setTimeout(()=>{return resolve(data)}, 3000)
})

promise_1.then((data)=>{
    console.log('promise_1 отработал')
    return data
});
promise_2.then((data)=>{
    console.log('promise_2 отработал')
    return data
});
promise_3.then((data)=>{
    console.log('promise_3 отработал')
    return data
});


Promise.all([promise_1, promise_2, promise_3])
    .then(
        (data)=>console.log(data),
        ()=>console.log('все не отработало')
    )