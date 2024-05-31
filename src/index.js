import './style/style.css';
import Git from './images/github.png';

import getWeatherData from './data';

document.getElementById("github").src = Git; // Fill github logo

getWeatherData("London");

