import React from "react";
import { render } from "@testing-library/react";
import Landing from "../components/Landing";

test("renders I'm the Landing page", () => {
  const { getByText } = render(<Landing />);
  const textElement = getByText(/I'm the Landing page/i);
  expect(textElement).toBeInTheDocument();
});
