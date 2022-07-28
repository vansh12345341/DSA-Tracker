import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import beg from "../../Images/beg.jpg";
import Records from "./DSA.js";
import { Link } from "react-router-dom";
import Array from "./Array.js";
 

function Complete() {
  return (
    <Container className="mt-5 mb-5">
    
      <Row xs={1} md={4} className="g-4 mt-5 mb-5">
        {Records.map((record,idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={beg} />
              <Card.Body>

                <Card.Title>{record.topicName}</Card.Title>
                {/* <Card.Title>{record.position}</Card.Title> */}
                <Card.Text>
                 <Link to ="/complete/Array" > 
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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