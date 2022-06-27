import React from "react";

const WeatherCards = ({ data }) => {
  return (
    <div>
      <h3>{data?.timezone}</h3>
      <h3>{data.current.temp} ℃ </h3>
      <p>feels like {data.current.feels_like} ℃</p>
      <img
        src={`http://openweathermap.org/img/wn/${data?.current.weather[0].icon}@2x.png`}
        alt="weathericon"
      ></img>
      <p>{data?.current.weather[0].description}</p>
    </div>
  );
};

export default WeatherCards;
