
function forEach(arr, callback) {
   
    for(let i = 0; i<arr.length; i++) {
        callback(arr[i], i, arr)
        }
}

function reduce (arr, callback) {
    
    let accumulator = arr[0];
    let initial = accumulator;
    for(let i = 1; i<arr.length; i++) {
        accumulator = callback(accumulator, arr[i], initial) 
    }
    return accumulator;
}

const result = reduce([1,2,3,4,5], function(x, y) {return x + y}) //x результат предыдущего вызова колбека, y - текущий элемент массива
console.log(result);
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

0 acc = 2 
1 acc = 2 + 2
2 acc =

*/