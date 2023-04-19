const state = localStorage.getItem("id") ? {currentID: localStorage.getItem("id")} : {currentID: 1}

const saveToLS = (id) => {
    localStorage.setItem("id", id)
}

const getUserData = async (id) => {
    const usersURL = `https://jsonplaceholder.typicode.com/users/${id}`;
    const postsURL = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    const usersArr = "https://jsonplaceholder.typicode.com/users";

    const [userResponse, postsResponse, usersResponse] = await Promise.all([fetch(usersURL), fetch(postsURL), fetch(usersArr)]); 
    if (userResponse.ok && postsResponse.ok && usersResponse.ok) {
       const [user, posts, users] = await Promise.all([userResponse.json(), postsResponse.json(), usersResponse.json()])
        state.user = user;
        state.posts = posts;
        state.users = users;
        state.error = false;
    }
    else {
        state.error = true;
    }
}

const createElements = (localState, actions) => {
    const userContainer = document.createElement("div");
    userContainer.classList.add("user");
    const userName = document.createElement("p");
    const userEmail = document.createElement("p");
    userName.innerHTML = localState.user.name;
    userEmail.innerHTML = localState.user.email;
    userContainer.append(userName, userEmail);

    const postsArr = localState.posts.map(el=> {
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
    leftBtn.addEventListener("click", ()=> actions.moveLeft());
    const rightBtn = document.createElement("button");
    rightBtn.innerHTML = "-->";
    rightBtn.addEventListener("click", ()=> actions.moveRight());
    const btnWrapper = document.createElement("div");
    btnWrapper.append(leftBtn, rightBtn);
    const arr = [];
    arr.push(userContainer, posts, btnWrapper);
    return arr;
}

const render = (localState, root, actions) => {
    const elements = createElements(localState, actions);
    root.replaceChildren();
    root.append(...elements);
}

const getActions = (localState, root) => ({
    start: async () => {
        await getUserData(localState.currentID);
        saveToLS(localState.currentID);
        render(localState, root, actions);
    },
    moveRight: async () => {
        localState.currentID < localState.users.length ? localState.currentID = +localState.currentID + 1 : actions.alertNotExist();
        await getUserData(localState.currentID);
        if (!localState.error) {
            saveToLS(localState.currentID);
            render(localState, root, actions);
        } else {
            actions.alertNotExist()
        }
    }, 
    moveLeft: async () => {
        localState.currentID > 1 ? localState.currentID = +localState.currentID - 1 : actions.alertNotExist();
        await getUserData(localState.currentID);
        if (!localState.error) {
            saveToLS(localState.currentID);
            render(localState, root, actions)
        } else {
            actions.alertNotExist();
        }
    },
    alertNotExist: () => {
        alert("User not exist");
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
*/