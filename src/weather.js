import "./Weather.css";
import img from "./images/weather.svg";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: img,

    humidity: 80,
    wind: 10,
  };

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
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
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
              <strong>{weatherData.temperature}</strong>
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
}
