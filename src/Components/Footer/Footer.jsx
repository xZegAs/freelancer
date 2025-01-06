import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <div className="bg-main text-white py-5">
        <Container className="py-5">
          <Row className="text-center">
            <Col md={4} className="mb-4 mb-md-0">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <h3>AROUND THE WEB</h3>
              <div className="d-flex justify-content-center gap-3">
                <a
                  href="#"
                  className="icon btn btn-outline-light rounded-circle p-3"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="icon btn btn-outline-light rounded-circle p-3"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="icon btn btn-outline-light rounded-circle p-3"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="icon btn btn-outline-light rounded-circle p-3"
                >
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </Col>
            <Col md={4}>
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-third text-white text-center py-4">
        <p className="mb-0">Copyright © Your Website 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
