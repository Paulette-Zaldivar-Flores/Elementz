import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
