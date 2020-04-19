import React from "react";
import { Card } from "react-bootstrap";

class PlayerCard extends React.Component {
  constructor() {
    super();
    this.state = {
      PlayerData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then((res) => res.json())
      .then((data) => this.setState({ PlayerData: data }))
      .catch((error) => console.log(error));
  }
  render() {
    console.log("rendering");
    console.log(this.state);
    return (
      <div className="App">
        <h1>Players</h1>
        <div className="Player-container">
          {this.state.PlayerData.map((Player) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{Player.name}</Card.Title>
                  <Card.Text>
                    Country: {Player.country}
                    Searches: {Player.searches}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
export default PlayerCard;
