const APP_ID = '39bccae708be3426'; 
const DEFAULT_VALUE = "_ _"

const searchInput = document.getElementById("search-input");

const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

searchInput.addEventListener("change", (event) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${APP_ID}&lang=vi&units=metric `)
    .then(async function (response) {
      const data = await response.json();

      cityName.innerHTML = data.name || DEFAULT_VALUE;
      weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      temperature.innerHTML = Math.round(data.main.temp);

      sunrise.innerHTML = moment.unix(data.sys.sunrise).format('HH:mm');
      sunset.innerHTML = moment.unix(data.sys.sunset).format('HH:mm');

      humidity.innerHTML = data.main.humidity
      windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) 
      // Đổi m/s = (km/h)/3.6;

      
    })
    .then(data => console.log(data));
})