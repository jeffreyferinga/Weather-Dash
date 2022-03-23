const key = "285bfadff8e5bfb307a05ea048279627"
var cName = document.getElementById("city")
var temp = document.getElementById("temperature")
var wind = document.getElementById("wind")
var humidty = document.getElementById("humidty")
var uv = document.getElementById("uv")



document.querySelector(".submit").addEventListener('click', citySearch)
let lat
let lon

function citySearch() {
    var cityname = document.querySelector(".City").value
    var locationapi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${key}`
    fetch(locationapi).then(function (response) {
        return response.json()
    }).then(function ([geodata]) {
        console.log(geodata)
        lat = geodata.lat
        lon = geodata.lon
        weatherSearch() // console.log(lat)
        cName.innerHTML = cityname
        localStorage.setItem(cityname, cityname);
    })
}

function weatherSearch() {
    var weatherapi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}&units=imperial`
    temp.innerHTML= ""
    document.getElementById('icon').replaceChildren(); 
    fetch(weatherapi).then(function (response) {
        return response.json()
    }).then(function (weatherdata) {
        console.log(weatherdata)
        temp.innerHTML = weatherdata.current.temp
        wind.innerHTML = weatherdata.current.wind_speed + " MPH"
        humidity.innerhtml = weatherdata.current.humidity + "%"
        uv.innerHTML = weatherdata.current.uvi
        iconID = weatherdata.daily[0].weather[0].icon
        console.log(iconID)
        var img = document.createElement('img');
    
        img.src = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
    document.getElementById('icon').appendChild(img);

    
    })
    

}