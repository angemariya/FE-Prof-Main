
function forEach(arr, callback) {
   
    for(let i = 0; i<arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

function reduce (arr, callback, startValue) {
    
    if (startValue !== underfined) {
        let accumulator = startValue;
        for(let i = 0; i<arr.length; i++) {
            accumulator = callback(accumulator, arr[i])}
        return accumulator;
    }
        else {
        let accumulator = arr[0];
        for(let i = 1; i<arr.length; i++) {
            accumulator = callback(accumulator, arr[i]) 
        }
        return accumulator;
    }
}

const result = reduce([1,1,1,1,1], function(x, y){return x + y}, 10) //x результат предыдущего вызова колбека, y - текущий элемент массива
console.log(result);

/*
function reduce(arr, callback) {
    let accumulator;
    forEach(arr, (el, i, arr) => {
      accumulator = i === 0
        ? el
        : callback(accumulator, el);
    });
    return accumulator;
  }

function reduce(arr, callback, initial) { // Правильная функция
  let accumulator = initial;
  forEach(arr, (el, i, arr) => accumulator = 
    accumulator === undefined
    ? el
    : callback(accumulator, el, i, arr));
  return accumulator;


*/

/*
Ihor Chulinda, [24.02.2023, 11:09:51]:
...нужно реализовать функцию reduce
она принимает 2 аргумента
первый - массив
второй - колбек
колбек вызывается с двумя аргументами
результат предыдущего вызова колбека, и текущий элемент массива
результат самой функции редюс - это результат последнего вызова колбека
при первом вызове колбека, ему в качестве предыдущего значения передаётся то стартовое, 
что мы задали третьим аргументом при вызове reduce


function map(arr, callback) {

    let newArr = [];
    forEach(arr, function(element, index, arr){
        newArr.push(callback(element, index, arr))
    })
    return newArr;
}

const resultMap = map([1,2,3,4,5], function(element, index, arr) {
    return element + 1 ;
})

console.log(resultMap)
*/