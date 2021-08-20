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

  // planet array holding image tag data
  const planetImagesArray = [
    {
      planetImage:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/deciixo-361a4934-1b45-49bf-b977-7415017f8343.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGVjaWl4by0zNjFhNDkzNC0xYjQ1LTQ5YmYtYjk3Ny03NDE1MDE3ZjgzNDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VRPuDLCb7ch5gOVFv3TnherBSvlWjDZrJOWU2CmO3j0",
    },
    {
      planetImage:
        "https://zam.zamimg.com/images/e/8/e86ba81c42e39563675f248e8366f9b4.png",
    },
    {
      planetImage:
        "https://www.jediholo.net/wp-content/uploads/2019/08/YavinIV_Planet_Preview.png",
    },
    { planetImage: "https://juraj336.github.io/hoth1.png" },
    {
      planetImage: "http://theforcebewith.us/images/dagobah.png",
    },
    {
      planetImage:
        "https://img.swcombine.com//galaxy/planets/custom/large/651.gif",
    },
    {
      planetImage:
        "http://custom.swcombine.com/static/8/4/34-13715-1558966795-large.png",
    },
    {
      planetImage:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/de4s3td-427b5200-3d1a-4052-9c63-e3480e9416d6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGU0czN0ZC00MjdiNTIwMC0zZDFhLTQwNTItOWM2My1lMzQ4MGU5NDE2ZDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bS8Gf-QK2Lxrs995kE7PGPtIfRLviYq_8KQch2FTfys",
    },
    {
      planetImage:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/de6c8ft-163f01c9-61c9-4790-a531-6e509ada0b53.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGU2YzhmdC0xNjNmMDFjOS02MWM5LTQ3OTAtYTUzMS02ZTUwOWFkYTBiNTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jsbKumuLzOaLZRTXFQEUlyaZOcd8MsyRsFHo8hlnf_U",
    },
    {
      planetImage:
        "https://lh3.googleusercontent.com/proxy/qRyxXFNrwxGbh-wkjvbcjhVG_c6sKYOerwCNAYwWAzGx_vGqT7rABHT1NVNP8WekYQ3-M0nScjUMg5TyOYgaqaqibWGX1Ow5TjwIrsateJgEYQ-GKHQzdBQESW8",
    },
  ];

  const tranformedImages = planetImagesArray.map((data) => {
    return data.planetImage;
  });

  let image = "";
  if (selectedPlanet === "Tatooine") {
    image = <img src={tranformedImages[0]} className="planet-image"></img>;
  } else if (selectedPlanet === "Alderaan") {
    image = <img src={tranformedImages[1]} className="planet-image"></img>;
  } else if (selectedPlanet === "Yavin IV") {
    image = <img src={tranformedImages[2]} className="planet-image"></img>;
  } else if (selectedPlanet === "Hoth") {
    image = <img src={tranformedImages[3]} className="planet-image"></img>;
  } else if (selectedPlanet === "Dagobah") {
    image = <img src={tranformedImages[4]} className="planet-image"></img>;
  } else if (selectedPlanet === "Bespin") {
    image = <img src={tranformedImages[5]} className="planet-image"></img>;
  } else if (selectedPlanet === "Endor") {
    image = <img src={tranformedImages[6]} className="planet-image"></img>;
  } else if (selectedPlanet === "Naboo") {
    image = <img src={tranformedImages[7]} className="planet-image"></img>;
  } else if (selectedPlanet === "Coruscant") {
    image = <img src={tranformedImages[8]} className="planet-image"></img>;
  } else if (selectedPlanet === "Kamino") {
    image = <img src={tranformedImages[9]} className="planet-image"></img>;
  }
  console.log(tranformedImages[0]);

  // let filteredArray = 0;

  // function planetImageFunction() {
  //   filteredArray = 0;
  //   for (let i = 0; i > planetImagesArray.length; i++) {
  //     // if (i === 1) {
  //     //   filteredArray.push(planetImagesArray[0].planetImage);
  //     //   console.log(planetImagesArray[0].planetImage);
  //     // }

  //     // return filteredArray;
  //     console.log(i);
  //   }
  // }

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
            {image}
            <h3>{selectedPlanet}</h3>
            <p>{chosenFact}</p>
          </section>
        </form>
      </Card>
    </section>
  );
}

export default Forms;
