//These lines of code get a handle on the HTML tags
var textEl = document.querySelector("#text");
//These are for the today section
var cityName = document.querySelector("#city");
var iconEl = document.querySelector("#ic");
var tempiture = document.querySelector("#temp");
var windy = document.querySelector("#wind");
var humid = document.querySelector("#hum");
//These are for the first forcast day
var date = document.querySelector("#date1");
var tem = document.querySelector("#temp1");
var wimdy = document.querySelector("#wind1");
var hum = document.querySelector("#hum1");
//These are for the second forcast day
var date1 = document.querySelector("#date2");
var tem1 = document.querySelector("#temp2");
var wimdy1 = document.querySelector("#wind2");
var hum1 = document.querySelector("#hum2");
//These are for the third forcast day
var date2 = document.querySelector("#date3");
var tem2 = document.querySelector("#temp3");
var wimdy2 = document.querySelector("#wind3");
var hum2 = document.querySelector("#hum3");
//These are for the fourth forcast day
var date3 = document.querySelector("#date4");
var tem3 = document.querySelector("#temp4");
var wimdy3 = document.querySelector("#wind4");
var hum3 = document.querySelector("#hum4");
//These are for the fivth forcast day
var date4 = document.querySelector("#date5");
var tem4 = document.querySelector("#temp5");
var wimdy4 = document.querySelector("#wind5");
var hum4 = document.querySelector("#hum5");
//These line of code is for the buttons that are appended to the search history and the button that search the text area
var btnList = document.querySelector("#listBtn");
var searchBtn = document.querySelector('#search');
//These lines of code call a function that sets the localstorage and uses that localstorage to create buttons for the user to quickly click on a city that they have already looked up.
createHistory();
history();
//This function gets your answer and uses api to get the longitude and latitude
function startSearch() {
    var cityCheck = textEl.value.trim();

    if (cityCheck) {
        var geoCode = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityCheck + "&limit=5&appid=893b5eb8f58ad1b936b738a08c218ea8";
        
        fetch(geoCode).then(function (response) {

        
            return response.json();
        }).then(function (data) {

            var lat = data[0].lat;
            var lon = data[0].lon;
            getFetch(lat, lon);
        });
        createHistory(cityCheck);
    } 
}

//This function gets the longitude and latitude and uses that to get data which is then displayed in the today and the 5 day forcast.
function getFetch(lat, lon) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=893b5eb8f58ad1b936b738a08c218ea8&units=imperial";

    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=893b5eb8f58ad1b936b738a08c218ea8&units=imperial";

    //This is for the today display
    fetch(weatherUrl).then(function (response) {


        return response.json();
    }).then(function (data) {
        console.log(data);
        var iconId = data.weather[0].icon;
        iconEl.style.content = iconId;
        console.log(iconEl);
        cityName.textContent = data.name + "(Today)" ;
        tempiture.textContent = data.main.temp + " F";
        windy.textContent = data.wind.speed + " mph";
        humid.textContent = data.main.humidity + '%';
    });
//This is for the 5 day forcast
    fetch(requestUrl).then(function (response) {


        return response.json();
    }).then(function (data) {

    
        date.textContent = "(" + data.list[3].dt_txt + ')';
        tem.textContent = data.list[3].main.temp + " F";
        wimdy.textContent = data.list[3].wind.speed + " mph";
        hum.textContent = data.list[3].main.humidity + '%';

        date1.textContent = "(" + data.list[11].dt_txt + ')';
        tem1.textContent = data.list[11].main.temp + " F";
        wimdy1.textContent = data.list[11].wind.speed + " mph";
        hum1.textContent = data.list[11].main.humidity + '%';

        date2.textContent = "(" + data.list[19].dt_txt + ')';
        tem2.textContent = data.list[19].main.temp + " F";
        wimdy2.textContent = data.list[19].wind.speed + " mph";
        hum2.textContent = data.list[19].main.humidity + '%';

        date3.textContent = "(" + data.list[27].dt_txt + ')';
        tem3.textContent = data.list[27].main.temp + " F";
        wimdy3.textContent = data.list[27].wind.speed + " mph";
        hum3.textContent = data.list[27].main.humidity + '%';

        date4.textContent = "(" + data.list[35].dt_txt + ')';
        tem4.textContent = data.list[35].main.temp + " F";
        wimdy4.textContent = data.list[35].wind.speed + " mph";
        hum4.textContent = data.list[35].main.humidity + '%';
    });
}
// this function gets city name the user entered and puts in local storage
function createHistory(name) {

    var storeCity = [];
    var getcity = localStorage.getItem("city");
    var cityCreate = JSON.parse(getcity);
    if (cityCreate) {
    storeCity = cityCreate;
    }
    if (name) {
    storeCity.push(name);
    }
    var store = JSON.stringify(storeCity);
    localStorage.setItem("city", store);
}
//This gets whats in local storage and displays it
function history() {
    var getcity = localStorage.getItem("city");
    var cityCreate = JSON.parse(getcity);
    for (let i = 0; i < cityCreate.length; i++) {
        var cityBtn = document.createElement('button');
        cityBtn.textContent = cityCreate[i];
        btnList.appendChild(cityBtn);
    }
}
//this function gets the user click input and grabs the city to then find out its longitude and latitude
function historyBar(event) {
    var cityClick = event.target.innerHTML;

    var geoCode = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityClick + "&limit=5&appid=893b5eb8f58ad1b936b738a08c218ea8";
        
    fetch(geoCode).then(function (response) {

    
        return response.json();
    }).then(function (data) {

        var lat = data[0].lat;
        var lon = data[0].lon;
        getFetch(lat, lon);
    });
}

//These to lines are event listeners that get the users click.
searchBtn.addEventListener("click", startSearch);
btnList.addEventListener("click", historyBar);
