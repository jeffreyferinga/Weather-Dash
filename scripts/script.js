const key = "285bfadff8e5bfb307a05ea048279627"


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
      weatherSearch()  // console.log(lat)
    })
}
function weatherSearch() {
    var weatherapi= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}&units=imperial`
    fetch(weatherapi).then(function (response){
        return response.json()
        }).then(function (weatherdata){
            console.log(weatherdata)
        })
}