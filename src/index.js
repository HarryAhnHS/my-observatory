import './style/style.css';
import Git from './images/github.png';

import {getWeatherData, displayCurrentCity} from './data.js';

document.getElementById("github").src = Git; // Fill github logo

// const form = document.querySelector(".searchbox");
const submit = document.querySelector("#submit");
const query = document.querySelector("#search-input");

const currentLocation = document.querySelector("#current-loc");

// Geolocation API to display current city's weather
displayCurrentCity();

submit.onclick = (e) => {
    e.preventDefault();
    if (query.value != "") {
        getWeatherData(query.value).catch((error) => {
            console.log(error);
        });
    }
};

query.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        if (query.value != "") {
            getWeatherData(query.value).catch((error) => {
                console.log(error);
            });
        }
        document.activeElement.blur();
    }
})

currentLocation.onclick = (e) => {
    e.preventDefault();
    query.value = "";
    displayCurrentCity();

    

    document.activeElement.blur();
}





