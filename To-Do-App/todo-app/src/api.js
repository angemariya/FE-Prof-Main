const BASE_URL = `https://jsonplaceholder.typicode.com`;

async function api( url, options) {
    const responce = await fetch(BASE_URL + url, options);
    if(!responce.ok) {
        throw new Error("Not okay")
    }
    return await responce.json();
}

export async function getTodo(userId) {
    const qs = new URLSearchParams({userId});
    const url = `/todos?${qs}`;
    return api(url);
}

export async function createTodo(userId, title) {
    const body = JSON.stringify({
        userId,
        title,
    });
    return api('/todos', {
        method: "POST",
        body,
        headers: {
            'content-type': "application/json; charset=UTF-8"
        },
    });
}

export async function markDone(id) {

}
