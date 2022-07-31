import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";
import beg from "../../Images/beg.jpg";
import Records from "./DSA.js";
import { Link } from "react-router-dom";
import "./Complete.css";

function Complete() {
  return (
    <Container fluid className="mt-5 Home">
      <Row className="complete-back">
        <Col>
          <p
            variant="outline-secondary"
            className="mt-4 mb-4 fs-1 fw-bold text-center"
          >
            COMPLETE DSA SHEET
          </p>
        </Col>
      </Row>

      <Row xs={1} md={3} lg={4} className="g-4 mt-5 mb-5">
        {Records.map((record, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={beg} />
              <Card.Body>
                <Card.Title className="text-center">
                  {record.topicName}
                </Card.Title>
                {/* <Card.Title>{record.position}</Card.Title> */}
                <Card.Text>
                  <Link
                    to={`/complete/AllTopic/${record.questions[0].Topic}`}
                    className="d-grid text-decoration-none"
                  >
                    <Button variant="dark" size="sm">
                      Solve
                    </Button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Complete;
