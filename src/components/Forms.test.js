import React from "react";
import { render, screen } from "@testing-library/react";
import Forms from "./Forms";
// import React from 'react'
// import { render } from 'react-dom'
// window.React = React

describe("Forms component", () => {
  test("renders STAR WARS PLANETS as a text", () => {
    // arrange
    render(<Forms />);

    //Act
    //..nothing

    //Assert
    const starWarsPlanetsElement = screen.getByText("STAR WARS PLANETS");
    expect(starWarsPlanetsElement).toBeInTheDocument();
  });
});
