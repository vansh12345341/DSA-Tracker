import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../Images/logo.PNG";

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="shadow"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <Link className="text-decoration-none text-white" to="/">
              <img src={logo} height={35} width={100} alt="logo"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle id="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">
                <Link className="text-decoration-none  text-white" to="/">
                  Home{" "}
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white" href="/About">
                About
              </Nav.Link>
              <NavDropdown
                title="Sheets"
                variant="dark"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/">
                  <Link
                    className="text-decoration-none text-black "
                    to="/beginner"
                  >
                    {" "}
                    Beginner DSA Sheet{" "}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="/">
                  <Link className="text-decoration-none text-black " to="/complete">
                    {" "}
                    Complete DSA Sheet
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
