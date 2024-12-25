import { Container, Form } from "react-bootstrap";
import StarDivider from "../StarDivider/StarDivider";
import PageTitleChange from "../PageTitle/PageTitleChange";

function Contact() {
  return (
    <>
      <PageTitleChange title="Contact" />
      <section className="section mb-4">
        <Container>
          <h2 className="text-center text-main text-uppercase fs-1 display-4 fw-bolder">
            Contact Section
          </h2>
          <StarDivider color="var(--main-color)" />
          <div className="w-75 mx-auto">
            <Form>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="userName"
                  className="border-0 border-bottom rounded-0 py-3"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="number"
                  placeholder="userAge"
                  className="border-0 border-bottom rounded-0 py-3"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="email"
                  placeholder="userEmail"
                  className="border-0 border-bottom rounded-0 py-3"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="password"
                  placeholder="userPassword"
                  className="border-0 border-bottom rounded-0 py-3"
                />
              </Form.Group>
              <button className="btn bg-secondary text-white mt-4">
                Send Message
              </button>
            </Form>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;
