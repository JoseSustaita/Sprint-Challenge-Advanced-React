import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayerCard from "./Components/PlayerCard";
import Header from "./Components/Header";

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
