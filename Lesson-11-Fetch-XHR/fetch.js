const requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, URL, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(URL, {
        method: method,
        body: JSON.stringify(body), 
        headers: headers
    }).then(response => {
        if(response.ok){
         return response.json();   
        }
        return response.json().then(error => {
            const e = new Error('Что-то пошло не так'); 
            e.data = error;
            throw e;
        })
    })
  }

  const body = {
    name: "Maria",
    age: "32"
  }
  
  sendRequest("POST", requestURL, body)
      .then(data => console.log(data))
      .catch(err => console.log(err));