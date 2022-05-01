import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import img from "./images/weather-forecast.png";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li className="formatteddate">
            <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="weather-temperature">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} size={80} />
              </div>
              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <ul>
              <li>
                {" "}
                <img className="temp-pic" src={img} />{" "}
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
