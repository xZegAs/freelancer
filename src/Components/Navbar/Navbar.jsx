import { Link, useLocation } from "react-router-dom";
import { Navbar as BsNavbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BsNavbar
      expand="lg"
      className={`navbar  ${
        isScrolled ? "navbar-scrolled" : ""
      } bg-main text-white py-4 fixed-top`}
      variant="dark"
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="fs-2 fw-bold">
          START FRAMEWORK
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/about"
              className={
                location.pathname === "/about"
                  ? "active mx-2 text-white fw-bold"
                  : "mx-2 text-white fw-bold"
              }
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={
                location.pathname === "/portfolio"
                  ? "active mx-2 text-white fw-bold"
                  : "mx-2 text-white fw-bold"
              }
            >
              PORTFOLIO
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "active mx-2 text-white fw-bold"
                  : "mx-2 text-white fw-bold"
              }
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
