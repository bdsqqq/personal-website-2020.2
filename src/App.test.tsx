import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Landing", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/I'm the Landing page/i);
  expect(textElement).toBeInTheDocument();
});
