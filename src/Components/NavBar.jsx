import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="bg-gray-800 text-white">
      <Container className="mx-4">
      <Navbar.Brand href="#home">
            <img
              src="https://th.bing.com/th/id/OIP.54s9jkp_mrvfjTraqjrk4AHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav1">
          <Nav.Link as={NavLink} to="/"  className="text-yellow-400">
              Home
            </Nav.Link>
          <Nav.Link as={NavLink} to="/dashboard"  className="text-yellow-400">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/create" className="text-yellow-400">
              Create
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
