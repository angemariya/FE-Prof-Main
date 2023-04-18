function x() {
    const result = doSomething();
  
    return Promise.resolve(result);
  }
  
  async function y() {
    const result = doSomething();
  
    return result;
  }
  
  async function main() {
    const xResult = x();
    const yResult = y();
  
    console.log(xResult, yResult);
  }
  
  function doSomething() {
    throw "something went wrong";
  }
  
  main();
  
  function assert(condition, errorMessage) {
    if (!!condition) throw new Error(errorMessage);
  }
  
  const creditCardInput = document.querySelector("input#creditCard");
  
  function buy(creditCardNumber) {
    assert(isNaN(creditCardNumber), "credit card input must have valid value");
    assert(creditCardNumber > 0, "credit card input must have valid value");
  
    fetch("bank.com", {
      method: "POST",
      body: JSON.stringify({
        creditCard: creditCardInput.value,
      }),
    });
  }
  
  function divide(a, b) {
    assert(!isNaN(a), "a must be number");
    assert(!isNaN(b), "b must be number");
    assert(b !== 0, "b can't be zero");
  
    return a / b;
  }
  
  const promiseResults = new WeakMap();
  function makeSync(somePromise) {
    if (promiseResults.has(somePromise)) return promiseResults.get(somePromise);
  
    throw somePromise.then((result) => promiseResults.set(somePromise, result));
  }
  
  function a() {
    b();
  
    console.log("a");
  }
  function b() {
    try {
      c();
    } catch (err) {
      console.log("catched in b");
    }
  
    console.log("b");
  }
  function c() {
    d();
  
    console.log("c");
  }
  function d() {
    throw "err";
  }
  
  try {
    a();
  } catch (err) {
    console.log(err);
  }