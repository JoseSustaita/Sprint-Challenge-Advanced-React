import React from "react";
import PlayerCard from "./Components/PlayerCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    console.log("rendering");
    return (
      <div className="Container">
        <PlayerCard />
      </div>
    );
  }
}
export default App;
