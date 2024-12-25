import { Container } from "react-bootstrap";
import PageTitleChange from "../PageTitle/PageTitleChange";

function NotFound() {
  return (
    <>
      <PageTitleChange title="404" />
      <section className="section bg-secondary text-white text-center">
        <Container className="py-5">
          <h2 className="fw-bolder fs-1">404</h2>
          <p className="fs-6">The page you are looking for is not found.</p>
        </Container>
      </section>
    </>
  );
}

export default NotFound;
