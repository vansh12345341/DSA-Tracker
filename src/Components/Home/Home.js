import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { Link } from "react-router-dom";
import beg from "../Images/beg.jpg";

const arr = ["beginner", "complete"];
const Home = () => {
  return (
    <Container fluid className="mt-5 Home">
      <Row className="bg-black mb-5 back">
        <Col>
          <p
            variant="outline-secondary"
            className="mt-4 mb-4 fs-1 fw-bold text-center"
          >
            Consistency is more Important than Perfection
          </p>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4 mt-5 mb-5 justify-content-md-center">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Link to={`/${arr[idx]}`}>
                <Card.Img variant="top" src={beg} />
              </Link>
              <Card.Body>
                <Card.Title>{arr[idx]}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Link to={`/${arr[idx]}`}>
                  <Button variant="primary">{arr[idx]}</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
