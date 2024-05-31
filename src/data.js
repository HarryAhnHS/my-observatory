// API calls
async function getWeatherData(query) {
    // const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4654305166924c618b855220243005&q=${query}`);
    const data = await response.json();
    console.log(data);
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
            icon: data.current.condition.icon,
            humidity: data.current.humidity,
        },
        wind: {
            degree: data.current.wind_degree,
            direction: data.current.wind_dir,
            speed: {
                kph: data.current.wind_kph,
                mph: data.current.wind_mph
            }
        }
    }
    console.log(forecast);
}



export default getWeatherData;