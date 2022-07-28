import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import beg from "../../Images/beg.jpg";
import Records from "./DSA.js";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Container className="mt-5 mb-5">
      <Row xs={1} md={4} className="g-4 mt-5 mb-5">
        {Records.map((record) => (
          <Link to="/beginner/Array">
            <Col>
              <Card>
                <Card.Img variant="top" src={beg} />
                <Card.Body>
                  <Card.Title>{record.Topic}</Card.Title>
                  <Card.Text>
                    {record.Problem}
                    {record.URL}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
    </Container>
  );
}
