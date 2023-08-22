
# Simple Weather App using OpenWeatherMap API

Just a small project to challenge me with the API and how fast i can develop a simple weather app.


## Features

- Auto Light/dark mode toggle with changig backgroud, colors and weather icon depending on what time it is where you are
- Animated SVG icon
- Search bar or auto GPS location
- soon...


## Screenshots

#### Light Mode
![App Screenshot](https://i.imgur.com/YuWvV17.png)
#### Dark Mode
![App Screenshot](https://i.imgur.com/wI9vDeu.png)


## API Reference

https://openweathermap.org/api

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


Change the API key in `main.js` ine the `getWeather()` function and `getWeatherAuto()` function.

You can find the API key to replace at the `fetch` line ('`&appid=`' parameter ine the URL)
