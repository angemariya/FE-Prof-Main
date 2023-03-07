function createEmptyArray(length = 0) {
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(undefined);
    }
    return result;
  }
  
  const fibonacci = n =>  createEmptyArray(n + 1).map((el, index) => index).reduce((result, current, index) =>result.push(index < 2 ? current : result[index - 1] + result[index - 2]) && result,[])[n];
  
  const fibonacci2 = n => createEmptyArray(n+1).map((el, index) => index).reduce([...result, index < 2 ? current : result[index - 1] + result[index - 2]], [])[n];