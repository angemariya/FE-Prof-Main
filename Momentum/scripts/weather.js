let coordsState = JSON.parse(localStorage.getItem("location")) || {};

function saveToState(latitude, longitude) {
    return coordsState = {
        latitude,
        longitude
    }
}

const fetchData = async (lat,lon) => {
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=abd5532c6680b914cee9e0c74819f228&units=metric`);
    let data = await weather.json();
    const temp = Math.floor(data.main.temp)+"°С";
    const location = data.name;
    createWeatherWidget(temp, location);
}

const weatherContainer = document.querySelector('#weather');

const createWeatherWidget = (temp, location) => {

    const tempText = document.createElement("p");
    tempText.classList.add("temperature");
    tempText.innerHTML = `Wetter today: ${temp}`;
    const locationText = document.createElement("p");
    locationText.classList.add("location")
    locationText.innerHTML = location;
    weatherContainer.append(tempText, locationText);
    return weatherContainer;
}

const saveToLocalStorage = (obj) => {
    localStorage.setItem("location", JSON.stringify(obj))
}

function getPosition () {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    saveToLocalStorage({latitude, longitude});
    saveToState(latitude, longitude)
    fetchData(coordsState.latitude, coordsState.longitude)
}

function error () {
    console.log("Error");
}
getPosition();


// http://dataservice.accuweather.com/forecasts/v1/daily/1day/sVjOLnlwq51hE3UfL5qlnuMysh1V8EqG&metric=true 
//if there is no data in localStorage getPosition() will be invoke, else data will be parsed from LocalStorage