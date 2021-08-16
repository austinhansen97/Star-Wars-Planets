import React from "react";
import { useState, useEffect } from "react";
import Card from "../UI/Card";
import "./Forms.css";

function CityState() {
  const [planet, setPlanet] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState("");
  const [planetDetails, setPlanetDetails] = useState("");
  const [chosenFact, setChosenFact] = useState("");

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

  function planetListFunction() {
    let planetArray = [];
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
        <option key={Math.random()}>Select</option>,
        <option key={Math.random()} value={planetDetails[i].climate}>
          Climate
        </option>,
        <option key={Math.random()} value={planetDetails[i].terrain}>
          Terrain
        </option>,
        <option key={Math.random()} value={planetDetails[i].population}>
          Population
        </option>,
        <option key={Math.random()} value={planetDetails[i].url}>
          URL
        </option>
      );
    }
  }

  return (
    <section>
      <Card>
        <form className="dropdowns">
          <h1 className="title">STAR WARS PLANETS</h1>
          <label>CHOOSE A PLANET</label>
          <select
            onChange={(event) => {
              setSelectedPlanet(event.target.value);
            }}
          >
            {planetListFunction()}
          </select>

          <label>CHOOSE A FACT</label>
          <select
            onChange={(event) => {
              setChosenFact(event.target.value);
            }}
          >
            {planetDetailsArray}
          </select>
          <section className="appearing-words">
            <h2>{selectedPlanet}</h2>
            <p>{chosenFact}</p>
          </section>
        </form>
      </Card>
    </section>
  );
}

export default CityState;
