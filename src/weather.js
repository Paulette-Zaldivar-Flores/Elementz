import React, { useState } from "react";
import "./Weather.css";
import img from "./images/weather.svg";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      imgUrl: img,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-4">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city..."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn" />
            </div>
          </div>
        </form>

        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              Last updated: <FormatDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-5">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <div className="float-left">
                <strong>{Math.round(weatherData.temperature)}</strong>
                <span className="units">
                  <a href="/">°C</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b81e7138d4f18ecdce4149c89f6f0058";
    let city = "Tijuana";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
