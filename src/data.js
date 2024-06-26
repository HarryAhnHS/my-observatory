import UI from "./UI";
// API call here
async function getWeatherData(query) {
    // Loader prior to response
    document.querySelector(".loader").style['display'] = 'flex';
    document.querySelector(".content").style['display'] = 'none';

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4654305166924c618b855220243005&q=${query}`, {
        mode: 'cors',
    });
    const data = await response.json();

    document.querySelector(".loader").style['display'] = 'none';
    document.querySelector(".content").style['display'] = 'flex';

    const forecast = {
    lastUpdated: data.current.last_updated,
    isDay: data.current.is_day,
    location: {
        city: data.location.name,
        country: data.location.country
    },
    temperature: {
        currentTemp: {
            c: data.current.temp_c,
            f: data.current.temp_f
        },
        feelsLike: {
            c: data.current.feelslike_c,
            f: data.current.feelslike_f
        }
    },
    condition: {
        summary: data.current.condition.text,
        icon: data.current.condition.icon
    },
    wind: {
        degree: data.current.wind_degree,
        direction: data.current.wind_dir,
        speed: {
            kph: data.current.wind_kph,
            mph: data.current.wind_mph
        }
    },
    humidity: data.current.humidity
    }
    UI.displayContent(forecast);
    return forecast;
}

function displayCurrentCity() {
    try {
        // Loader prior to response
        document.querySelector(".loader").style['display'] = 'flex';
        document.querySelector(".content").style['display'] = 'none';

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, errorCallback);
        } else {
            console.log("Geolocation is not supported by this browser.");
            getWeatherData('London');
            
            document.querySelector(".foot-controls").style.display = 'none';
        }
        function showPosition(position) {
            console.log(position);
            getWeatherData(`${position.coords.latitude},${position.coords.longitude}`); 

            document.querySelector(".foot-controls").style.display = 'flex';
            document.querySelector(".disabled-err").style.display = 'none';
            document.querySelector("#current-loc").classList.remove("disabled");
        }
        function errorCallback() {
            console.log("Disallowed location services");
            getWeatherData('London');

            document.querySelector(".foot-controls").style.display = 'flex';
            document.querySelector(".disabled-err").style.display = 'block';
            document.querySelector("#current-loc").classList.add("disabled");
        }
    }
    catch (error) {
        console.log(error);
    }
}



export {
    getWeatherData,
    displayCurrentCity
};