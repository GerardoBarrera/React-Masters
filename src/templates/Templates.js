import TemplateList from "./TemplateList";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Templates = () => {
  return (
    <Container>
      <Card style={{ marginTop: "20px" }}>
        <Card.Body>
          <Row>
            <Col className="text-end">
              <Button as={Link} to="/templates/create" variant="success">
                Create
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <TemplateList />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Templates;
