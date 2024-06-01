import './style/style.css';
import Git from './images/github.png';

import getWeatherData from './data.js';

document.getElementById("github").src = Git; // Fill github logo

// const form = document.querySelector(".searchbox");
const submit = document.querySelector("#submit");
const query = document.querySelector("#search-input");

getWeatherData("Seoul");

submit.onclick = (e) => {
    e.preventDefault();
    if (query.value != "") {
        getWeatherData(query.value);
    }
};

query.addEventListener("keypress", function (e){
    if (e.key === "Enter"){
        e.preventDefault();
        if (query.value != "") {
            getWeatherData(query.value);
        }
    }
})



