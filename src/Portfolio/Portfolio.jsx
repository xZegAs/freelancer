import { Container, Row, Col } from "react-bootstrap";
import StarDivider from "../StarDivider/StarDivider";
import cabin from "../assets/poert1.png";
import cake from "../assets/port2.png";
import circus from "../assets/port3.png";
import { useState } from "react";
import ImagePreviewModal from "../ImagePreviewModal/ImagePreviewModal";
import PageTitleChange from "../PageTitle/PageTitleChange";

function Portfolio() {
  const [previewImage, setPreviewImage] = useState(null);
  const portfolioItems = [
    { image: cabin, title: "Log Cabin" },
    { image: cake, title: "Tasty Cake" },
    { image: circus, title: "Circus Tent" },
    { image: cabin, title: "Log Cabin" },
    { image: cake, title: "Tasty Cake" },
    { image: circus, title: "Circus Tent" },
  ];

  const handleImageClick = (image, e) => {
    e.preventDefault();
    setPreviewImage(image);
  };

  return (
    <>
      <PageTitleChange title="Portfolio" />
      <section className="section mb-4 pt-4">
        <Container className="pt-4">
          <h2 className="text-center text-uppercase fs-1 display-4 fw-bolder pt-5">
            Portfolio Component
          </h2>
          <StarDivider color="var(--main-color)" />
          <Row className="g-4">
            {portfolioItems.map((item, index) => (
              <Col key={index} md={6} lg={4}>
                <div className="portfolio-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid rounded"
                  />
                  <div
                    className="overlay"
                    onClick={(e) => handleImageClick(item.image, e)}
                  >
                    <a>
                      <i className="fas fa-plus text-white fa-5x"></i>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {previewImage && (
          <ImagePreviewModal
            image={previewImage}
            onClose={() => setPreviewImage(null)}
          />
        )}
      </section>
    </>
  );
}

export default Portfolio;
