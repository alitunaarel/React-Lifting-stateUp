import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   fetch("https://restcountries.eu/rest/v2/all")
  //     .then(response => response.json())
  //     .then(response => setCountries(response));
  // }, []);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => setCountries(response.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start edappen!</h2>
      {countries.map(country => {
        return (
          <div key={country.name}>
            <h2>{country.name}</h2>
            <h2>{country.capital}</h2>
            <p>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "100px" }}
              />{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}
