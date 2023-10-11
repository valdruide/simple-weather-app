const apiKey = '16e2cd104a9e2c836236ba7af3b71bc1';
const indexPage = {
      init: function () {
            //change background if it's day or night
            const d = new Date();
            let hour = d.getHours();
            const weatherImg = document.getElementById('weatherImg');
            const bgImg = document.getElementsByTagName('main')[0];
            if (hour <= 7 || hour >= 20) {
                  bgImg.classList.add('nightBg');
                  document.documentElement.style.setProperty('--color', '#fcfcfc');
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy-1-night.svg');
            } else {
                  bgImg.classList.add('dayBg');
                  document.documentElement.style.setProperty('--color', '#011638');
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy-1-day.svg');
            }
            //End background changing day/night

            const findBtn2 = document.querySelector('.findBtn2');
            const findBtn = document.querySelector('.findBtn');
            const searchCityInput = document.getElementById('searchCityInput');
            searchCityInput.addEventListener('keypress', (e) => {
                  if (e.key === 'Enter') {
                        e.preventDefault();
                        let cityName = searchCityInput.value;
                        indexPage.getWeather(cityName);
                  }
            });
            findBtn2.addEventListener('click', () => {
                  let cityName = searchCityInput.value;
                  indexPage.getWeather(cityName);
            });
            findBtn.addEventListener('click', () => {
                  navigator.geolocation.getCurrentPosition((position) => {
                        let lat = position.coords.latitude;
                        let long = position.coords.longitude;
                        searchCityInput.value = '';
                        indexPage.getWeatherAuto(lat, long);
                  });
            });
      },
      getWeather: async function (cityName) {
            try {
                  // You can chage the '&lang='
                  // You can chage the '&units=' to 'metric' for Celsius or 'standard' for Fahrenheit
                  const response = await fetch('https://api.openweathermap.org/data/2.5/find?q=' + cityName + '&units=metric&appid=' + apiKey + '&lang=en');
                  const res = await response.json();
                  console.log(res);
                  if (res.count == 0) {
                        const temp = document.getElementById('temp');
                        const city = document.getElementById('city');
                        city.innerText = 'Invalid city name, retry';
                        temp.innerText = '0°';
                  } else {
                        indexPage.display(res);
                  }
            } catch (err) {
                  console.error(err);
            }
      },
      getWeatherAuto: async function (lat, long) {
            try {
                  const response = await fetch(
                        // You can chage the '&lang='
                        // You can chage the '&units=' to 'metric' for Celsius or 'standard' for Fahrenheit
                        'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&lang=en&units=metric&appid=' + apiKey
                  );
                  const res = await response.json();
                  console.log(res);
                  indexPage.displayAuto(res);
            } catch (err) {
                  console.error(err);
            }
      },
      display: function (res) {
            const city = document.getElementById('city');
            const temp = document.getElementById('temp');
            const description = document.getElementById('description');
            const weatherImg = document.getElementById('weatherImg');
            const ressenti = document.getElementById('ressenti');

            city.innerText = res.list[0].name;
            temp.innerText = res.list[0].main.temp + '°';
            ressenti.innerText = res.list[0].main.feels_like + '°';
            description.innerText = res.list[0].weather[0].description;

            if (res.list[0].weather[0].icon == '01d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy-1-day.svg');
            } else if (res.list[0].weather[0].icon == '01n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy-1-night.svg');
            } else if (res.list[0].weather[0].icon == '02d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy-1-day.svg');
            } else if (res.list[0].weather[0].icon == '02n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy-1-night.svg');
            } else if (res.list[0].weather[0].icon == '03d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy.svg');
            } else if (res.list[0].weather[0].icon == '03n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy.svg');
            } else if (res.list[0].weather[0].icon == '04d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy.svg');
            } else if (res.list[0].weather[0].icon == '04n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy.svg');
            } else if (res.list[0].weather[0].icon == '09d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/rainy-3-day.svg');
            } else if (res.list[0].weather[0].icon == '09n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/rainy-3-night.svg');
            } else if (res.list[0].weather[0].icon == '10d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/rainy-1-day.svg');
            } else if (res.list[0].weather[0].icon == '10n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/rainy-1-night.svg');
            } else if (res.list[0].weather[0].icon == '11d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/scattered-thunderstorms-day.svg');
            } else if (res.list[0].weather[0].icon == '11n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/scattered-thunderstorms-night.svg');
            } else if (res.list[0].weather[0].icon == '13d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/snowy-3-day.svg');
            } else if (res.list[0].weather[0].icon == '13n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/snowy-3-night.svg');
            } else if (res.list[0].weather[0].icon == '50d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/wind.svg');
            } else if (res.list[0].weather[0].icon == '50n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/wind.svg');
            }
      },
      displayAuto: function (res) {
            const city = document.getElementById('city');
            const temp = document.getElementById('temp');
            const weatherImg = document.getElementById('weatherImg');
            const description = document.getElementById('description');
            const ressenti = document.getElementById('ressenti');

            city.innerText = res.name;
            temp.innerText = res.main.temp + '°';
            ressenti.innerText = res.main.feels_like + '°';
            description.innerText = res.weather[0].description;

            if (res.weather[0].icon == '01d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy-1-day.svg');
            } else if (res.weather[0].icon == '01n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy-1-night.svg');
            } else if (res.weather[0].icon == '02d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy-1-day.svg');
            } else if (res.weather[0].icon == '02n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy-1-night.svg');
            } else if (res.weather[0].icon == '03d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy.svg');
            } else if (res.weather[0].icon == '03n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy.svg');
            } else if (res.weather[0].icon == '04d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy.svg');
            } else if (res.weather[0].icon == '04n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/cloudy.svg');
            } else if (res.weather[0].icon == '09d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/rainy-3-day.svg');
            } else if (res.weather[0].icon == '09n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/rainy-3-night.svg');
            } else if (res.weather[0].icon == '10d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/rainy-1-day.svg');
            } else if (res.weather[0].icon == '10n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/rainy-1-night.svg');
            } else if (res.weather[0].icon == '11d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/scattered-thunderstorms-day.svg');
            } else if (res.weather[0].icon == '11n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/scattered-thunderstorms-night.svg');
            } else if (res.weather[0].icon == '13d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/snowy-3-day.svg');
            } else if (res.weather[0].icon == '13n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/snowy-3-night.svg');
            } else if (res.weather[0].icon == '50d') {
                  weatherImg.setAttribute('src', 'assets/img/weather/wind.svg');
            } else if (res.weather[0].icon == '50n') {
                  weatherImg.setAttribute('src', 'assets/img/weather/wind.svg');
            }
      },
};

document.addEventListener('DOMContentLoaded', indexPage.init);
