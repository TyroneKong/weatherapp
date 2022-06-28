import React from "react";
import "./TodaysWeather.scss";

export const TodayWeather = ({ data }) => {
  return (
    <div className="todaysWeather">
      <h3>{data?.timezone}</h3>
      <h3>{data?.current.temp} ℃ </h3>
      <img
        className="todaysWeather__icon"
        src={`http://openweathermap.org/img/wn/${data?.current.weather[0].icon}@2x.png`}
        alt="weathericon"
      ></img>
    </div>
  );
};
