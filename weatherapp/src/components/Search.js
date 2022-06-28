import React, { useState } from "react";
import axios from "axios";
import { City } from "./City";
import "./Search.scss";

import Button from "@mui/material/Button";

export const Search = () => {
  const [input, setInput] = useState(null);
  const [CityData, setCityData] = useState(null);

  // fetch data using user input
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8200/searchLocation/${input}`
      );
      setCityData(response.data);
      document.getElementById("form").reset();
    } catch (error) {
      console.log(error);
    }
  };

  // capture the event
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <h1>Search Location</h1>
      <form id="form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          name="city"
          onChange={handleChange}
          placeholder="Search city..."
          required
        ></input>

        <Button className="search__btn" type="submit" variant="contained">
          Submit search
        </Button>
      </form>
      <h1>{CityData?.city.name}</h1>
      <City data={CityData} />
    </div>
  );
};
