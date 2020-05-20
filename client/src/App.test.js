import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayerCard from "./Components/PlayerCard";
import Header from "./Components/Header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Card without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PlayerCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Nav without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("renders Players on PlayerCard component", async () => {
  const { getByText } = render(<PlayerCard />);
  const Player = getByText(/Players/i);
  expect(Player).toBeInTheDocument();
});
test("Search bar showing search text", async () => {
  const { getByText } = render(<Header />);
  const element = getByText("Search");
  expect(element).toHaveTextContent("Search");
});
