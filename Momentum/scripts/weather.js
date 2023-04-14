
const weatherContainer = document.querySelector('#weather');

const createWeatherWidget = (temp, location) => {
    const tempText = document.createElement("span");
    tempText.innerHTML = temp;
    const locationText = document.createElement("p");
    locationText.innerHTML = location;
    weatherContainer.append(tempText, locationText);
    return weatherContainer;
}

const fetchData = async (lat,lon) => {
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=abd5532c6680b914cee9e0c74819f228&units=metric`);
    let data = await weather.json();
    const temp = Math.floor(data.main.temp)+"°С";
    const location = data.name;
    createWeatherWidget(temp, location);
}

const getPosition = () => {
    navigator.geolocation.getCurrentPosition(success, error);
}

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetchData(latitude, longitude);
}

const error = () => {
    console.log("Error");
}

getPosition();