import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="row">
          <div className="card">
            <div className="col-2">
              <div className="weather-forecast-date">{forecast[0].dt}</div>
              <WeatherIcon code={forecast[0].weather[0].icon} size={32} />{" "}
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">
                  {Math.round(forecast[0].temp.max)}°
                </span>
                <span className="weather-forecast-temperature-min">
                  {Math.round(forecast[0].temp.min)}°
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "b81e7138d4f18ecdce4149c89f6f0058";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
