import React from "react";
import { render, screen } from "@testing-library/react";
import Forms from "./Forms";

describe("Forms component", () => {
  test("Checks if STAR WARS PLANETS renders", () => {
    // arrange
    render(<Forms />);

    //Act

    //..nothing

    //Assert
    const starWarsPlanetsElement = screen.getByText("STAR WARS PLANETS");
    expect(starWarsPlanetsElement).toBeInTheDocument();
  });

  test("Checks if planet data transferred to props.planetArray/props.planetDetailsArray in Forms", () => {
    render(<Forms />);
    const listBoxElements = screen.getAllByRole("combobox");
    expect(listBoxElements).not.toHaveLength(0);
  });

  test("Checks if CHOOSE A FACT is displaying", () => {
    render(<Forms />);
    const fact = screen.getByText("choose a fact", { exact: false });
    expect(fact).toBeInTheDocument();
  });
});
