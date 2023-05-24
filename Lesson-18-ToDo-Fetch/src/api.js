const BASE_URL = "https://jsonplaceholder.typicode.com";

async function api(url, options) {
  const response = await fetch(BASE_URL + url, options);
  if (!response.ok) {
    throw new Error("Not Okay");
  }
  const data = await response.json();
  return data;
}

export async function getTodo(userId) {
  const qs = new URLSearchParams({ userId });
  const url = `/todos?${qs}`;
  return api(url);
}

export async function createTodo(userId, title) {
  const body = JSON.stringify({
    userId,
    title,
  });
  return api("/todos", {
    method: "POST",
    body,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

export async function markDone(id) {
  const body = JSON.stringify({
    completed: true,
  });
  return api(`/todos/${id}`, {
    method: "PATCH",
    body,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
