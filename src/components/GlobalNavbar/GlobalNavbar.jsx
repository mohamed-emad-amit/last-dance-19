import { Container, Nav, Navbar } from "react-bootstrap";
import { SiWoocommerce } from "react-icons/si";
import { Link } from "react-router-dom";

export const GlobalNavbar = () => {
  return (
    <Navbar expand="md" bg="light" data-bs-theme="light">
      <Container>
        {/* Brand With Logo Only */}
        <Navbar.Brand as={Link} to="/">
          <SiWoocommerce className="display-3 text-primary" />
        </Navbar.Brand>

        {/* Toggler Button */}
        <Navbar.Toggle />

        {/* Collapse Nav */}
        <Navbar.Collapse>
          <Nav>
            {/* Home Link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>

            {/* Login Link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
