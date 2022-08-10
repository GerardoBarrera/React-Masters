import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";

const TemplateRow = () => {
  return (
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="text-center">
        <Dropdown variant="secondary">
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
          ></Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item as={Link} to="/templates/edit">
              <Row>
                <Col className="text-center">Edit</Col>
                <Col className="text-center">
                  <BsPencilSquare />
                </Col>
              </Row>
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/templates/copy">
              Copy
            </Dropdown.Item>
            <Dropdown.Item>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

export default TemplateRow;
