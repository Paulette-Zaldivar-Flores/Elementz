import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.city}</h1>
        <ul>
          <li>
            Last updated: <FormatDate date={props.date} />
          </li>
          <li className="text-capitalize">{props.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="clearfix weather-temperature">
            <img
              src={props.imgUrl}
              alt={props.description}
              className="float-left"
            />

            <div className="float-left">
              <strong>{Math.round(props.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity{props.humidity}%</li>
            <li>Wind: {props.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
