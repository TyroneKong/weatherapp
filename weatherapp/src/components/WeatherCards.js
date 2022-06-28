import React from "react";
import "./WeatherCards.scss";

const WeatherCards = ({ data }) => {
  return (
    <div className="currentLocationWeather">
      {data.daily.map((day, index) => {
        return (
          <div key={index}>
            <h2>{new Date(day.sunrise * 1000).toDateString()}</h2>
            <h3>{data.timezone}</h3>
            <h3>{data.current.temp} ℃ </h3>

            <img
              className="currentLocationWeather__icon"
              src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
              alt="weathericon"
            ></img>
            <p>{data.current.weather[0].description}</p>
            <p>feels like {data.current.feels_like} ℃</p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherCards;
