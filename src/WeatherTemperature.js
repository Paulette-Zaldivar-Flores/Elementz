import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemp">
      <strong>{Math.round(props.celsius)}</strong>
      <span className="units">
        <a href="/">°C</a>
      </span>
    </div>
  );
}
