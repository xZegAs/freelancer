import avatar from "../../assets/avataaars.svg";
import { Container } from "react-bootstrap";
import StarDivider from "../StarDivider/StarDivider";
import PageTitleChange from "../PageTitle/PageTitleChange";
function Home() {
  return (
    <>
      <PageTitleChange title="Home" />
      <main className="section bg-secondary text-white text-center">
        <Container className="py-5">
          <img
            src={avatar}
            alt="avatar"
            className="mb-4"
            style={{ width: "250px" }}
          />
          <h2 className="fw-bolder fs-1">START FRAMEWORK</h2>
          <StarDivider />
          <p className="fs-6">Graphic Artist - Web Designer - Illustrator</p>
        </Container>
      </main>
    </>
  );
}

export default Home;
