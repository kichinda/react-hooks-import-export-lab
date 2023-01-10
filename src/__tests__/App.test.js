import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";
import  user  from "../data/user";

test("it renders without crashing", () => {
  try {
    expect(() => render(<App />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to import the required components!");
  }
});
