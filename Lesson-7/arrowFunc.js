/*

() => { //стрелочная функция не может быть именованной

}

const forEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }
  
  function map(arr, callback) {
    let newArr = [];
    forEach(arr, (el, i, arr) => newArr.push(callback(el, i, arr)));
    return newArr;
  }

*/
 /* 

console.log([1,2,3,4,5,6,7,8,9,10].reduce((prev, el) => prev + el))
console.log([1,2,3,4,5,6,7,8,9,10].filter(el => el%2===0))


function fib(n) {
  const fibonacci = [0, 1];
  for (let i = 2; i <= n; i++){ 
  fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
}
console.log(fibonacci[n])
}

fib(77);

*/
const first = [1,2,3,4,5]
const second = [0,0,0,0,0];
const third = [0,0,0,0,0];

function move(arr1, arr2, arr3) {
  for (i=0; i<arr1.length; i++) {
    if(arr1[i]<arr2[i]) {
      arr2[i] = arr1[i];
      arr1[i] = 0;
    } else if (arr1[i]>arr2[i]){
      arr3[i] = arr1[i];
      arr1[i] = 0;
    } else 
        return arr3;
  }
    
    move(first, second, third)   
}

console.log(move(first, second, third))