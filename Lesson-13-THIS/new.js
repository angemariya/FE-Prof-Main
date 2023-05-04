const data = [{ id: 'qwe' , name: 'Mark'}, 
            {id: 'abc', name: 'Alex'}]

            /*
const obj= {
  'qwe': { id: 'qwe' , name: 'Mark'},
  'abc': {id: 'abc', name: 'Alex'}
}*/
// 10

const a = data.reduce((acc, el)=> acc[el.id] = e, {})

console.log(a);