const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json()
        .then(data=>{console.log(data)}));
}

const getData = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await response.json();
    return data.name;
}


const getUsers = async () => {
    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await users.json();
    return data.length;
}

const getAllUsers = async () => {
    const count = await getUsers();
    const names = [];
    for(let i = 1; i <= count; i++){
        names.push(getData(i));
    }
    (await Promise.all(names)).forEach(name => console.log(name)); //собираем все промисы вместе и обрабатываем их
}
getAllUsers();
