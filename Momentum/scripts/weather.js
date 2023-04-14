
const fetchData = async (lat,lon) => {
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=abd5532c6680b914cee9e0c74819f228&units=metric`);
    let data = await weather.json();
    
    console.log(Math.floor(data.main.temp)+"°С", data.name);
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