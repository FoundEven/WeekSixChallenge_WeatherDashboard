var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=29.424349&lon=-98.491142&appid=893b5eb8f58ad1b936b738a08c218ea8";

var textEl = document.querySelector("#text");
var cityName = document.querySelector("#city");
var tempiture = document.querySelector("#temp");
var windy = document.querySelector("#wind");
var humid = document.querySelector("#hum");
var tem = document.querySelector("#temp1");
var wimdy = document.querySelector("#wind1");
var hum = document.querySelector("#hum1");
var tem1 = document.querySelector("#temp2");
var wimdy1 = document.querySelector("#wind2");
var hum1 = document.querySelector("#hum2");
var tem2 = document.querySelector("#temp3");
var wimdy2 = document.querySelector("#wind3");
var hum2 = document.querySelector("#hum3");
var tem3 = document.querySelector("#temp4");
var wimdy3 = document.querySelector("#wind4");
var hum3 = document.querySelector("#hum4");
var tem4 = document.querySelector("#temp5");
var wimdy4 = document.querySelector("#wind5");
var hum4 = document.querySelector("#hum5");

var cityChoice = {
    cityC: ["san antonio"],
    lon: [-98.491142],
    lat: [29.424349],
};

var searchBtn = document.querySelector('#search');

function startSearch() {
    var cityCheck = textEl.value.trim();
    if (cityCheck) {

        for (let i = 0; i < cityC.length; i++) {
            if (cityCheck === cityC[i]) {
                getFetch(cityC[i]);
            }
            
        } 
    } 
}
function getFetch() {

    fetch(requestUrl).then(function (response) {
        console.log(response);

        return response.json();
    }).then(function (data) {
        console.log(data);
    
        cityName.textContent = data.city.name + "(" + data.list[0].dt_txt + ')';
        tempiture.textContent = data.list[0].main.temp;
        windy.textContent = data.list[0].wind.speed;
        humid.textContent = data.list[0].main.humidity + '%';
        tem.textContent = data.list[1].main.temp;
        wimdy.textContent = data.list[1].wind.speed;
        hum.textContent = data.list[1].main.humidity + '%';
        tem1.textContent = data.list[2].main.temp;
        wimdy1.textContent = data.list[2].wind.speed;
        hum1.textContent = data.list[2].main.humidity + '%';
        tem2.textContent = data.list[3].main.temp;
        wimdy2.textContent = data.list[3].wind.speed;
        hum2.textContent = data.list[3].main.humidity + '%';
        tem3.textContent = data.list[4].main.temp;
        wimdy3.textContent = data.list[4].wind.speed;
        hum3.textContent = data.list[4].main.humidity + '%';
        tem4.textContent = data.list[5].main.temp;
        wimdy4.textContent = data.list[5].wind.speed;
        hum4.textContent = data.list[5].main.humidity + '%';
    });
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