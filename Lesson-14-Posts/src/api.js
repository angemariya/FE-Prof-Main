const BASE_URL = "https://jsonplaceholder.typicode.com";

async function api(url, options) {
  const response = await fetch(BASE_URL + url, options);
  if (!response.ok) {
    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

export async function getPost(id) {
  return api(`/posts/${id}`);
}

export async function getAllPosts() {
  return api(`/posts`);
}