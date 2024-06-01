function displayContent(forecast) {
    // UI
    const city = document.querySelector(".city");
    const country = document.querySelector(".country");

    const day = document.querySelector(".day");
    const time = document.querySelector(".time");

    const overviewIcon = document.querySelector(".overview-icon");
    const currentTemp = document.querySelector(".current-temp");
    const summary = document.querySelector(".summary");

    const feelsLike = document.querySelector(".stat.feels");
    const humidity = document.querySelector(".stat.humidity");
    const windSpeed = document.querySelector(".stat.wind");

    const degree = document.querySelector(".degree");
    const direction = document.querySelector(".direction");

    console.log(forecast);
    city.textContent = forecast.location.city;
    country.textContent = forecast.location.country;
    day.textContent = forecast.lastUpdated;
    time.textContent = forecast.lastUpdated;

    overviewIcon.src = forecast.condition.icon;
    currentTemp.textContent = forecast.temperature.currentTemp.c;
    summary.textContent = forecast.condition.summary;

    feelsLike.textContent = forecast.temperature.feelsLike.c;
    humidity.textContent = forecast.humidity;
    windSpeed.textContent = forecast.wind.speed.kph;

    degree.textContent = forecast.wind.degree;
    direction.textContent = forecast.wind.direction;



}

export default displayContent;