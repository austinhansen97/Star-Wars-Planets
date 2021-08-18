import React from "react";
import { render, screen } from "@testing-library/react";
import Forms from "./Forms";

describe("Forms component", () => {
  test("renders STAR WARS PLANETS as h1 text", () => {
    // arrange
    render(<Forms />);

    //Act

    //..nothing

    //Assert
    const starWarsPlanetsElement = screen.getByText("STAR WARS PLANETS");
    expect(starWarsPlanetsElement).toBeInTheDocument();
  });

  //   test("if selectedPlanet useState is being updated when planet is selected", () => {
  //     //arrange
  //     render(<Forms />);
  //     //act
  //     const planetSelect = screen.getByRole("option");
  //     userEvent.click(planetSelect);

  //     //assert
  //     const planetChoice = screen.getByText("", { exact: false });
  //     expect(planetChoice).toBeInTheDocument();
  //   });

  test("Test to see if CHOOSE A FACT is displaying", () => {
    render(<Forms />);
    const fact = screen.getByText("choose a fact", { exact: false });
    expect(fact).toBeInTheDocument();
  });
});
