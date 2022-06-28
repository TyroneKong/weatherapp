import React from "react";
import "./CIty.scss";

export const City = ({ data }) => {
  return (
    <div className="weatherIcon__container">
      {data
        ? data.list.map((day, index) => {
            return (
              <div className="weatherIcon__card" key={index}>
                <h2>{new Date(day.dt * 1000).toDateString()}</h2>
                <h3>{data.city.name}</h3>

                <h3>{day.main.temp} ℃</h3>
                <img
                  className="weatherIcon"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="weatherIcon"
                ></img>
                <p>{day.weather[0].description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
