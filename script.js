//var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=29.424349&lon=-98.491142&appid=893b5eb8f58ad1b936b738a08c218ea8";

//var geoCode = "http://api.openweathermap.org/geo/1.0/direct?q=San antonio&limit=5&appid=893b5eb8f58ad1b936b738a08c218ea8"

var textEl = document.querySelector("#text");
var cityName = document.querySelector("#city");
var iconEl = document.querySelector("#ic");
var tempiture = document.querySelector("#temp");
var windy = document.querySelector("#wind");
var humid = document.querySelector("#hum");
var date = document.querySelector("#date1");
var tem = document.querySelector("#temp1");
var wimdy = document.querySelector("#wind1");
var hum = document.querySelector("#hum1");
var date1 = document.querySelector("#date2");
var tem1 = document.querySelector("#temp2");
var wimdy1 = document.querySelector("#wind2");
var hum1 = document.querySelector("#hum2");
var date2 = document.querySelector("#date3");
var tem2 = document.querySelector("#temp3");
var wimdy2 = document.querySelector("#wind3");
var hum2 = document.querySelector("#hum3");
var date3 = document.querySelector("#date4");
var tem3 = document.querySelector("#temp4");
var wimdy3 = document.querySelector("#wind4");
var hum3 = document.querySelector("#hum4");
var date4 = document.querySelector("#date5");
var tem4 = document.querySelector("#temp5");
var wimdy4 = document.querySelector("#wind5");
var hum4 = document.querySelector("#hum5");

//var cityChoice = "";


var searchBtn = document.querySelector('#search');

function startSearch() {
    var cityCheck = textEl.value.trim();

    //console.log(cityLower);
    if (cityCheck) {
        var geoCode = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityCheck + "&limit=5&appid=893b5eb8f58ad1b936b738a08c218ea8"
        
        fetch(geoCode).then(function (response) {
            console.log(response);
        
            return response.json();
        }).then(function (data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            getFetch(lat, lon);
        });
        createHistory(cityCheck);
    } 
}


function getFetch(lat, lon) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=893b5eb8f58ad1b936b738a08c218ea8&units=imperial";

    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=893b5eb8f58ad1b936b738a08c218ea8&units=imperial";


    fetch(weatherUrl).then(function (response) {
        console.log(response);

        return response.json();
    }).then(function (data) {
        console.log(data);
        var iconId = data.weather[0].id;

        console.log(iconId);
        cityName.textContent = data.name + "(Today)" ;
        tempiture.textContent = data.main.temp;
        windy.textContent = data.wind.speed;
        humid.textContent = data.main.humidity + '%';
    });

    fetch(requestUrl).then(function (response) {
        console.log(response);

        return response.json();
    }).then(function (data) {
        console.log(data);
    
        date.textContent = "(" + data.list[3].dt_txt + ')';
        tem.textContent = data.list[3].main.temp;
        wimdy.textContent = data.list[3].wind.speed;
        hum.textContent = data.list[3].main.humidity + '%';

        date1.textContent = "(" + data.list[11].dt_txt + ')';
        tem1.textContent = data.list[11].main.temp;
        wimdy1.textContent = data.list[11].wind.speed;
        hum1.textContent = data.list[11].main.humidity + '%';

        date2.textContent = "(" + data.list[19].dt_txt + ')';
        tem2.textContent = data.list[19].main.temp;
        wimdy2.textContent = data.list[19].wind.speed;
        hum2.textContent = data.list[19].main.humidity + '%';

        date3.textContent = "(" + data.list[27].dt_txt + ')';
        tem3.textContent = data.list[27].main.temp;
        wimdy3.textContent = data.list[27].wind.speed;
        hum3.textContent = data.list[27].main.humidity + '%';

        date4.textContent = "(" + data.list[35].dt_txt + ')';
        tem4.textContent = data.list[35].main.temp;
        wimdy4.textContent = data.list[35].wind.speed;
        hum4.textContent = data.list[35].main.humidity + '%';
    });
}

function createHistory(name) {

}

searchBtn.addEventListener("click", startSearch);
//this is for other project
var steam = "https://pokeapi.co/api/v2/pokemon/ditto";
fetch(steam).then(function (response) {
    console.log(response);
    return response.json();
}).then(function (data) {

    console.log(data);
});