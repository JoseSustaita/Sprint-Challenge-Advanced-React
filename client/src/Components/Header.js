import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import useLocalStorage from "../Hooks/UseLocalStorage";

function Header() {
  // Similar to useState but first arg is key to the value in local storage
  const [name, setName] = useLocalStorage("name", "Alex");

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
