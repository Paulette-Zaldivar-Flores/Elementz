import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "b81e7138d4f18ecdce4149c89f6f0058";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="card">
          <div className="col-2">
            <div className="weather-forecast-date">Thur</div>
            <WeatherIcon code="01d" size={32} />{" "}
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">19°</span>
              <span className="weather-forecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
