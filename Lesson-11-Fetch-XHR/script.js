const state = {
    currentID: 1
}

const getUserData = async (id) => {
    const usersURL = `https://jsonplaceholder.typicode.com/users/${id}`;
    const postsURL = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    const usersArr = "https://jsonplaceholder.typicode.com/users";

    const userData = {};
    const [userResponse, postsResponse, usersResponse] = await Promise.all([fetch(usersURL), fetch(postsURL), fetch(usersArr)]); 
    if (userResponse.ok && postsResponse.ok && usersResponse.ok) {
       const [user, posts, users] = await Promise.all([userResponse.json(), postsResponse.json(), usersResponse.json()])
        userData.user = user;
        userData.posts = posts;
        userData.users = users;
    }
    return userData;
}

const createElements = async(localState, actions) => {
    const data = await getUserData(localState.currentID); //как передать промис в createElements без использования функции getUserData внутри нее ?
    const userContainer = document.createElement("div");
    userContainer.classList.add("user");
    const userName = document.createElement("p");
    const userEmail = document.createElement("p");
    userName.innerHTML = data.user.name;
    userEmail.innerHTML = data.user.email;
    userContainer.append(userName, userEmail);

    const postsArr = data.posts.map(el=> {
        const item = document.createElement("div");
        item.classList.add("item");
        const postTitle = document.createElement("p");
        postTitle.innerHTML = el.title;
        const postBody = document.createElement("p");
        item.append(postTitle,postBody);
        postBody.innerHTML = el.body;
        return item;
    })

    const posts = document.createElement("div");
    posts.classList.add("posts");
    posts.append(...postsArr); 

    const leftBtn = document.createElement("button");
    leftBtn.innerHTML = "<--";
    leftBtn.addEventListener("click", ()=> {
        let count = data.user.id > 1 ? data.user.id - 1 : 1;

    });
    const rightBtn = document.createElement("button");
    rightBtn.innerHTML = "-->";
    rightBtn.addEventListener("click", ()=> actions.moveRight());
    const btnWrapper = document.createElement("div");
    btnWrapper.append(leftBtn, rightBtn);
    const arr = [];
    arr.push(userContainer, posts, btnWrapper)
    return arr;
}

const render = async (localState, root, actions) => {
    const elements = await createElements(localState, actions);
    root.replaceChildren();
    root.append(...elements);
}

const getActions = (localState, root) => ({
    start: () => {
        render(localState, root, actions);
    },
    moveRight: () => {
        let count = data.user.id < data.users.length ? data.user.id + 1 : data.users.length;
    }
})


const root = document.querySelector(".user-container");
const actions = getActions(state, root);
actions.start();




/*
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((resp) => (resp.ok ? resp.json() : undefined))
    .then((data) => data !== undefined && console.log(data));
*/

/*
Добавить в интерфейсе две кнопки (<- , ->) позволяющая переключаться между пользователями. 
При нажатии на стрелку в лево должен отправиться запрос на получение данных про пользователя 
с меньшим id, а при нажатии на кпопку в право данные про следующего пользователя. 
Если при нажатии на кнопку функция, выводящая данные про пользователей, получает код от сервера 
не 200, то в интерфейс должно вывестись сообщение “Такого пользователя нет” и номер с пользователем 
не должен расти. 
Доп задание. ID выведенного пользователя должно сохраняться в localStorage и при обновлении 
страницы должны грузиться данны пользователя, на котором пользователь остановился в прошлый раз.

const getUserData = async (id) => {
    const usersURL = `https://jsonplaceholder.typicode.com/users/${id}`;
    const postsURL = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

    const userData = {};
    const [userResponse, postsResponse] = await Promise.all([fetch(usersURL), fetch(postsURL)]); 
    if (userResponse.ok && postsResponse.ok) {
       const [user, posts] = await Promise.all([userResponse.json(), postsResponse.json()])
        userData.user = user;
        userData.posts = posts;
    }

    const nameParagraph = document.querySelector(".name")
    const emailParagraph = document.querySelector(".email")
    nameParagraph.innerText = userData.user.name 
    emailParagraph.innerText = userData.user.email
    
    const postsContainer = document.querySelector('.posts')
    const postElements = userData.posts.map(el => {
        const container = document.createElement('div')
        container.classList.add('item')
        const namePost = document.createElement('p')
        const textPost = document.createElement('p')
        namePost.innerText = el.title
        textPost.innerText = el.body

        container.append(namePost,textPost)
        return container
    })

    postsContainer.append(...postElements)

    // console.log(postsContainer);
    console.log(userData);

}
getUserData(1)
*/