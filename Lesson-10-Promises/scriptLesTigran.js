let promise = new Promise((res, rej) => {
    setTimeout(() => {
        let a = 100
        // res(a)
        rej('Error!')
    }, 500)
})

async function asyncFunc(){
    try {
      let a = await promise;
    } catch {
        console.log("Error!");
    }   
}

asyncFunc();

let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then(res=>res.json()
    .then(data=>{
        console.log(data);
        render(data)
    }))

const render = (state) => {
    const root = document.querySelector("#root");
    const render = state.map(el=>{
        const name = document.createElement("p");
        name.innerHTML = el.name;
        const username = document.createElement("p");
        username.innerHTML = el.username;
        
        root.append(name, username);
    })
    return render;
}
/*
const getData = async (fn) => {
    const url = 'https://reqres.in/api/users'
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    data.data.forEach(el => users.append(fn(el.first_name, el.last_name)));
}
*/

// от fetch(url) приходит промис объект который содержить headers. Там нас интересует метож .status и body (обрабат. )