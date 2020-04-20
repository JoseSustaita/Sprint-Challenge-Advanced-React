import React from "react";
import PlayerCard from "./Components/PlayerCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Similar to useState but first arg is key to the value in local storage

  return (
    <div>
      <PlayerCard />
    </div>
  );
}
export default App;
