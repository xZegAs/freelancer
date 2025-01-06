import { Container, Row, Col } from "react-bootstrap";
import StarDivider from "../StarDivider/StarDivider";
import PageTitleChange from "../PageTitle/PageTitleChange";

function About() {
  return (
    <>
      <PageTitleChange title="About" />
      <section className="bg-secondary text-white section">
        <Container>
          <h2 className="text-center text-uppercase fs-1 display-4 fw-bolder pt-5">
            About component
          </h2>
          <StarDivider />
          <Row className="justify-content-center px-5 text-start">
            <Col md={6} lg={5} className="mb-4">
              <p className="fs-6">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </Col>
            <Col md={6} lg={5}>
              <p className="fs-6">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
