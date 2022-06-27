import React from "react";
import "./CIty.scss";

export const City = ({ data }) => {
  const week = data?.list.slice(0, 7);
  console.log(data);
  return (
    <div className="weatherIcon__container">
      {data
        ? week.map((day, index) => {
            const daily = new Date(day.dt_txt);
            console.log(daily);
            return (
              <div key={index}>
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
