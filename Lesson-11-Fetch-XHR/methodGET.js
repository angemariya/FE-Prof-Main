const requestURL = "https://jsonplaceholder.typicode.com/users";

/*
Используйте объекты XMLHttpRequest (XHR) для взаимодействия с серверами. Вы можете извлекать данные из URL-адреса без необходимости полного обновления страницы. Это позволяет веб-странице обновлять только часть страницы, не нарушая того, что делает пользователь.

const xhr = new XMLHttpRequest(); // через конструктор глобального класса

xhr.open("GET", requestURL); //каким методом открывать url

xhr.responseType = "json" //тип ответа JSON

xhr.onload = () => { //при удачном ответе с сервера
    if (xhr.status >= 400) { //всё что выше 400 статуса - ошибка
        console.error(xhr.response)
    } else {
        console.log(JSON.parse(xhr.response))
    }
}

xhr.onerror = () => { //при сбое при ответе с сервера 
    console.log(xhr.response)
}
xhr.send()
*/

function sendRequest(method, URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // через конструктор глобального класса

    xhr.open(method, URL); //каким методом открывать url

    xhr.responseType = "json"; //тип ответа JSON

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

    xhr.send();
  });
}

sendRequest("GET", requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err));
