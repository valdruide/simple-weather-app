
# Simple Weather App using OpenWeatherMap API

Just a small project to challenge me with the API and how fast i can develop a simple weather app.


## Features

- Auto Light/dark mode toggle with changing background, colors and weather icon depending on what time it is where you are
- Animated SVG icon
- Search bar or auto GPS location
- soon...


## Screenshots

#### Light Mode
![App Screenshot](https://i.imgur.com/YuWvV17.png)
#### Dark Mode
![App Screenshot](https://i.imgur.com/wI9vDeu.png)


## API Reference

DOC : https://openweathermap.org/current



| Parameter | Type     | Description                |Use|Doc|
| :-------- | :------- | :------------------------- | :---------- | :---------- |
| `appid` | `string` | **Required**. Your API key | Your API Key | //|
| `lang` | `string` | **Optional**. Language to display | ex: fr, en, de...| https://openweathermap.org/current#multi |
| `units` | `string` | **Optional**. Units of measurement | `standard`, `metric`, `imperial` | https://openweathermap.org/current#data|


Change the parameters in `main.js` in the `getWeather()` function and `getWeatherAuto()` function.

You can find the parameters to replace at the `fetch` line (in the URL)
