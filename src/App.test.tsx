import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Landing", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/igor bedesqui/i);
  expect(textElement).toBeInTheDocument();
});
