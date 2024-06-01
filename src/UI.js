import {format} from "date-fns";

const UI = (() => {
    function displayContent(forecast) {
        // UI
        const city = document.querySelector(".city");
        const country = document.querySelector(".country");
    
        const day = document.querySelector(".day");
        const time = document.querySelector(".time");
    
        const overviewIcon = document.querySelector(".overview-icon > img");
        const currentTemp = document.querySelector(".current-temp");
        const summary = document.querySelector(".summary");
    
        const feelsLike = document.querySelector(".stat.feels");
        const humidity = document.querySelector(".stat.humidity");
        const windSpeed = document.querySelector(".stat.wind");
    
        const degree = document.querySelector(".degree");
        const direction = document.querySelector(".direction");
    
        city.textContent = forecast.location.city;
        country.textContent = forecast.location.country;
    
        // Convert date using 'date-fns
        day.textContent = format(new Date(forecast.lastUpdated),'eeee');
        time.textContent = `${format(new Date(forecast.lastUpdated),'ppp')}`;
    
        overviewIcon.src = forecast.condition.icon;
        currentTemp.textContent = forecast.temperature.currentTemp.c;
        summary.textContent = forecast.condition.summary;
    
        feelsLike.textContent = `${forecast.temperature.feelsLike.c} C°`;
        humidity.textContent = `${forecast.humidity} %`;
        windSpeed.textContent = `${forecast.wind.speed.kph} kph`;
    
        degree.textContent = `${forecast.wind.degree}°`;
        direction.textContent = forecast.wind.direction;
    
        // Rotate arrow by wind degree
        const arrow = document.querySelector(".icon.wind");
        arrow.style['transform'] = `rotate(${forecast.wind.degree}deg)`;

        toggleSystem(forecast);
        dayNight(forecast);
    }

    function toggleSystem(forecast) {
        const metric = document.querySelector("#metric");
        const imperial = document.querySelector("#imperial");

        const currentTemp = document.querySelector(".current-temp");
        const feelsLike = document.querySelector(".stat.feels");
        const windSpeed = document.querySelector(".stat.wind");

        metric.onclick = ((e) => {
            e.preventDefault();
            currentTemp.textContent = forecast.temperature.currentTemp.c;
            feelsLike.textContent = `${forecast.temperature.feelsLike.c} C°`;
            windSpeed.textContent = `${forecast.wind.speed.kph} kph`;

            metric.classList.add("active");
            imperial.classList.remove("active");
        })

        imperial.onclick = ((e) => {
            e.preventDefault();
            currentTemp.textContent = forecast.temperature.currentTemp.f;
            feelsLike.textContent = `${forecast.temperature.feelsLike.f} F°`;
            windSpeed.textContent = `${forecast.wind.speed.mph} mph`;

            imperial.classList.add("active");
            metric.classList.remove("active");
        })
    }

    function dayNight(forecast) {
        if (forecast.isDay) {
            document.querySelector(".main").style['background-color'] = "#00a6ed";

            document.querySelector(".searchbox").style['background-color'] = "white";

            document.querySelector("#search-input").style['color'] = "black";
            document.querySelector("#search-input").classList.remove("dark");

            document.querySelector(".content").style['background-color'] = "white";

            document.querySelector(".content").style['color'] = "black";
            document.querySelectorAll(".icon").forEach((icon) => {
                icon.style['background-color'] = "black";
            })
        }
        else {
            document.querySelector(".main").style['background-color'] = "#0b132b";

            document.querySelector(".searchbox").style['background-color'] = "#1c2541";

            document.querySelector("#search-input").style['color'] = "white";
            document.querySelector("#search-input").classList.add("dark");

            document.querySelector(".content").style['background-color'] = "#1c2541";

            document.querySelector(".content").style['color'] = "white";
            document.querySelectorAll(".icon").forEach((icon) => {
                icon.style['background-color'] = "white";
            })
        };
    }

    return {
        displayContent,
        toggleSystem,
        dayNight
    }
})();


export default UI;