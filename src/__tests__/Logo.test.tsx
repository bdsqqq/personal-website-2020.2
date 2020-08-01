import React from "react";
import { render, cleanup } from "@testing-library/react";
import Logo from "../components/Logo";

afterEach(cleanup);

test("renders IGOR BEDESQUI", () => {
  const { getByText } = render(<Logo />);
  const textElement = getByText(/IGOR BEDESQUI/i);
  expect(textElement).toBeInTheDocument();
});

//
