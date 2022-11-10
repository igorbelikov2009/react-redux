import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { CUSTOMERS_ROUTE, CREATORS_ROUTE, MAIN_ROUTE } from "../routes";

const NavBar = () => {
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={() => history.push(MAIN_ROUTE)}>Проект: "Redux-React"</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button onClick={() => history.push(CUSTOMERS_ROUTE)} variant="outline-light" className="ml-4">
            Клиенты из базы
          </Button>
          <Button onClick={() => history.push(CREATORS_ROUTE)} variant="outline-light" className="ml-4">
            Инкремент Декремент
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
