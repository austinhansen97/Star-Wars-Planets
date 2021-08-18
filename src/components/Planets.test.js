import React from "react";
import { render, screen } from "@testing-library/react";
import Planets from "./Planets";

describe("Planets components", () => {
  test("Checks if planet data is requested and loads into select tags", () => {
    render(<Planets />);
    const listBoxElements = screen.getAllByRole("combobox");
    expect(listBoxElements).not.toHaveLength(0);
  });
});
