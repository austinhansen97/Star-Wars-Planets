import React from "react";
import Card from "../UI/Card";
import "./Forms.css";
import { useState } from "react";

function Forms(props) {
  const [selectedPlanet, setSelectedPlanet] = useState("");
  const [chosenFact, setChosenFact] = useState("");

  function runFunction() {
    props.selectedPlanet(selectedPlanet);
  }

  return (
    <section>
      <Card>
        <h1 className="title">STAR WARS PLANETS</h1>
        <form className="parent-dropdowns">
          <section className="left-panel">
            <div className="label-select">
              <label>CHOOSE A PLANET</label>
              <select
                onChange={(event) => {
                  setSelectedPlanet(event.target.value);
                  setChosenFact("");
                }}
                onClick={runFunction}
              >
                {props.planetArray}
              </select>
            </div>

            <div className="label-select">
              <label>CHOOSE A FACT</label>
              <select
                onChange={(event) => {
                  setChosenFact(event.target.value);
                }}
              >
                {props.planetDetailsArray}
              </select>
            </div>
          </section>

          <section className="right-panel">
            <h3>{selectedPlanet}</h3>
            <p>{chosenFact}</p>
          </section>
        </form>
      </Card>
    </section>
  );
}

export default Forms;
