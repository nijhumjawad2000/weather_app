//select the element and create variables
//I want yo
//get the title
var cityTitle = document.querySelector(".cityTitle")
var input = document.querySelector("input")
var weather = document.querySelector(".weather")
var image = document.querySelector(".icon")
var temp = document.querySelector(".temp")
var humid = document.querySelector(".humid")
var deg = document.querySelector(".deg")
var API_KEY = "b97bb751313b5a72afe4f1be164184c5";
var url = "http://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}"
var kelvin
var convert = document.querySelector(".convert")
var icons = {
    "Clouds": "img/cloudy.png",
    "Clear": "img/sun.png",
    "Rain": "img/rain.png",
    "Snow": "img/snow.png",
    "Thunderstorm": "img/thunderstorm",
    "Party-cloudy": "img/party-cloudy"
}
//define function
function getWeather(zipCode){
    //console.log("Pressed Enter and now running getWeather")
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`,
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log(data)
            cityTitle.textContent = data.name
            //weather[""0""]
            weather.textContent = data.weather[0].main
            kelvin = data.main.temp
            temp.textContent = kelvinToFarenheit()
            humid.textContent = data.main.humidity
            image.src = icons[data.weather[0].main]
         
        },
        error: function(error){
            console.log("there was an error")
        }
        
    })
}

function kelvinToFarenheit(){
    return Math.round((9/5) * kelvinToCelsius()) + 32
}
function kelvinToCelsius(){
    return Math.round(kelvin - 273)
}


//add event listeners and call the functions
input.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
        getWeather(input.value)
    }
})
convert.addEventListener('click', function(e){
   //console.log("click convert button")
   if(convert.textContent == "Convert to C"){
       //convert to C
      temp.textContent = kelvinToCelsius()
        deg.innerHTML = "&deg;C"
       convert.textContent = "Convert to F"
    } else{
           //convert to F
      temp.textContent = kelvinToFarenheit()
      deg.innerHTML = "&deg;F" 
      convert.textContent = "Convert to C"
   }
})
getWeather("33149")