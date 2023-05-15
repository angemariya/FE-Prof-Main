const requestURL = "https://jsonplaceholder.typicode.com/users";

async function sendRequest(method, URL, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(URL, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    });
    if (response.ok) {
        return response.json();
    }
    const error = await response.json();
    const e = new Error('Что-то пошло не так');
    e.data = error;
    throw e;
  }

  const body = {
    name: "Maria",
    age: "32"
  }
  
  sendRequest("POST", requestURL, body)
      .then(data => console.log(data))
      .catch(err => console.log(err));