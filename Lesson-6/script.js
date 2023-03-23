

/*
function forEach(arr, callback) {
   
for(let i = 0; i<arr.length; i++) {
    callback(arr[i])
    }
}

forEach(array, function(element) {
    console.log(element)
})

function num() {
    console.log(1);
}

num()

function num(x) {
 console.log(x)
}

num(9);*/
/*
const array = [1,2,3,4,5,6,7,8,9,10]

function forEach(arr, callback) {
   
    for(let i = 0; i<arr.length; i++) {
        callback(arr[i], i, arr)
        }
    }

let arrNew = [];

forEach(array, function(element, index, arr) {
    arrNew.push(element * 10);
})
console.log(arrNew);
*/
/*
const array = [1,2,3,4,5,1,8,9,1];

function forEach(arr, callback) {
   
    for(let i = 0; i<arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

function map(arr, callback) {

    let newArr = [];
    forEach(arr, function(element, index, arr){
        newArr.push(callback(element, index, arr))
    })
    return newArr;
}

const result = map(array, function(element, index, arr) {
    return arr;
})

console.log(result);


//исправить map чтобы принимал 3 аргумента
//возвращает массив только true

function filter(arr, callback) {

    let newArr = [];
    forEach(arr, function(element, index, arr) {
        if(callback(element, index, arr)) {
            newArr.push(element)
        }
    }); 
    
    return newArr;
}

const filter = filter(array, function(element, index, arr){
    return element === 1;
});

console.log(result);

function map(arr, callback) {

    let newArr = [];
    forEach(arr, function(element, index, arr){
        newArr.push(callback(element, index, arr))
    })
    return newArr;
}

function combineMap (arr, callback1, callback2) {
    const newArr=[];
    for(let i =0; i<arr.length; i++) {
        newArr.push(callback2(callback1(arr[i])));
    }
    return newArr;
}

function square(value) {
    return value ** 2;
}

function addOne(value) {
    return value + 1;
}

const arr = combineMap([1,2,3], square, addOne);
console.log(arr);


function transform(n) {
    return n * (n-1)
}

function transformEven(arr, callback){
    const newArr = [];
    for(i=0; i<arr.length; i++) {
        if(i%2===0){
            newArr.push(callback(arr[i]));
        } else {
            newArr.push(callback(arr[i]));
        }
    }
    return newArr;
}

function transformOdd(arr, callback){

}

const arr = transformEven([1,2,3,4,5], transform)
console.log(arr);

*/


function forEach(arr, callback, condition) {
   
    for(let i = 0; i<arr.length; i++) {
        if (condition(i)) {
            return true;
        }
        callback(arr[i]);
    } 
}

const arr = [1,2,3,4,5];

console.log(forEach(arr, ));