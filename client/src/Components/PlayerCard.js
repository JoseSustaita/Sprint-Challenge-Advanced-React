import React from "react";
import { Card } from "react-bootstrap";
import Header from "./Header";
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
        <Header />
        <div className="Player-container">
          {this.state.PlayerData.map((Player) => (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{Player.name}</Card.Title>
                <div data-testid="Country">
                  <Card.Text>
                    Country: {Player.country}
                    Searches: {Player.searches}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
export default PlayerCard;
