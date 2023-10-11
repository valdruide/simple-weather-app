
# Simple Weather App using OpenWeatherMap API and auto light/dark mode

## Features
[EN] :
- This simple web application allows users to search for weather information in any city around the world. It provides real-time weather data, including temperature, humidity, wind speed, and conditions.
- Users can also enable geolocation to get weather updates based on their current location.
- The app features an automatic light and dark mode that adapts to the user's local time. It ensures a comfortable viewing experience, whether it's day or night.

[FR] : 
- Cette application web simple permet aux utilisateurs de rechercher des informations météorologiques dans n'importe quelle ville du monde. Elle fournit des données météorologiques en temps réel, notamment la température, l'humidité, la vitesse du vent et les conditions météorologiques.
- Les utilisateurs peuvent également activer la géolocalisation pour obtenir des mises à jour météorologiques basées sur leur emplacement actuel.
- L'application dispose d'un mode clair et sombre automatique qui s'adapte à l'heure locale de l'utilisateur. Cela garantit une expérience de visionnage confortable, que ce soit de jour ou de nuit.

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
