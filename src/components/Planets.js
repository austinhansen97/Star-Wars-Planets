import React from "react";
import { useState, useEffect } from "react";
import Forms from "./Forms";

import "./Forms.css";

function Planets(props) {
  const [planet, setPlanet] = useState("");
  const [planetDetails, setPlanetDetails] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState("");

  // PLANET DROPDOWN

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedPlanets = data.results.map((mapData) => {
          return mapData.name;
        });
        setPlanet(transformedPlanets);
      });
  }, []);

  let planetArray = 0;
  planetListFunction();
  function planetListFunction() {
    planetArray = [];
    for (let i = 0; i < planet.length; i++) {
      planetArray.push(
        <option key={Math.random()} value={planet[i]}>
          {planet[i]}
        </option>
      );
    }
    return planetArray;
  }

  // DETAILS ABOUT SELECTED PLANET

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlanetDetails(data.results);
      });
  }, []);

  // for loop that runs to get data.results[i].name . pushes object to array
  let planetDetailsArray = [];
  for (let i = 0; i < planetDetails.length; i++) {
    if (planetDetails[i].name === selectedPlanet) {
      planetDetailsArray.push(
        <option key={Math.random()}></option>,
        <option key={Math.random()} value={planetDetails[i].population}>
          Population
        </option>,
        <option key={Math.random()} value={planetDetails[i].climate}>
          Climate
        </option>,
        <option key={Math.random()} value={planetDetails[i].terrain}>
          Terrain
        </option>,
        <option key={Math.random()} value={planetDetails[i].url}>
          API URL
        </option>
      );
    }
  }

  function selectedPlanetHandler(selectedPlanetFromForms) {
    setSelectedPlanet(selectedPlanetFromForms);
  }

  return (
    <div>
      <Forms
        selectedPlanet={selectedPlanetHandler}
        planetDetailsArray={planetDetailsArray}
        planetArray={planetArray}
      />
    </div>
  );
}

export default Planets;
