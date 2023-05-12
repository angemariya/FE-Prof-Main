export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}



export function getCounter(label) {
  let counter = 0;
  return () => console.log(`${label}: ${counter += 1}`)
}
    
   
const counter1 = getCounter('name')
counter1() // console.log() name: 1
counter1() // console.log() name: 2 


const counter2 = getCounter("counter2");

counter2() // counter2: 1
counter2() // counter2: 2
counter2() // counter2: 3