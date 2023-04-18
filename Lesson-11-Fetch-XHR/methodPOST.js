function sendRequest(method, URL, body = null) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest(); // через конструктор глобального класса
  
      xhr.open(method, URL); //каким методом открывать url
  
      xhr.responseType = "json"; //тип ответа JSON
      xhr.setRequestHeader("Content-Type", "application/json")
  
      xhr.onload = () => {//при удачном ответе с сервера
        if (xhr.status >= 400) {//всё что выше 400 статуса - ошибка
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };
  
      xhr.onerror = () => { //при сбое при ответе с сервера
        reject(xhr.response);
      };
  
      xhr.send(JSON.stringify(body));
    });
  }

  const body = {
    name: "Maria",
    age: "32"
  }
  
  sendRequest("POST", requestURL, body)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  