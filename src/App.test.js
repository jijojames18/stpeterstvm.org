import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders properly", () => {
  const { getByText } = render(<App />);
  expect(getByText).toBeTruthy();
});
