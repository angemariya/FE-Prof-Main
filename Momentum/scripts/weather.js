const fetchData = async (lat,lon) => {
    let weather = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${abd5532c6680b914cee9e0c74819f228}`);
    let data = await weather.json();
    return data;
}

const geoSuccessHandler = (position) => {

}

const geoErrorHadler = () => {

}

const getCoordinate = () => {
    console.log(navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHadler));
}

getCoordinate();