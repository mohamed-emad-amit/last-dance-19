import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { SiWoocommerce } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoutButton } from "../LogoutButton/LogoutButton";

export const GlobalNavbar = () => {
  // Select isLoggedIn
  const { isLoggedIn } = useSelector((state) => state.user);

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
          <Nav className="me-auto">
            {/* Home Link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>

            {/* Products Link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {isLoggedIn ? (
            <>
              {/* Logout Button */}
              <LogoutButton />
            </>
          ) : (
            <>
              {/* Login Link */}
              <Button as={Link} to="/login">
                Login
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
