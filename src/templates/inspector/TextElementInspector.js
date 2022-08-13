import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const TextElementInspector = ({ element, textElement, rectElement }) => {
  const [fontFamily, setFontFamily] = useState(textElement.attrs.fontFamily);
  const [fontSize, setFontSize] = useState(textElement.attrs.fontSize);
  const [xPos, setXPos] = useState(textElement.attrs.x);
  const [yPos, setYPos] = useState(textElement.attrs.x);

  useEffect(() => {
    console.log(textElement.attrs.x);
    setXPos(textElement.attrs.x);
  }, [textElement]);

  const handleChangeFont = (e) => {
    textElement.attrs.fontFamily = e.target.value;
    element.current.getStage().draw();
  };

  const handleChangeFontSize = (e) => {
    textElement.attrs.fontSize = e.target.value;
    element.current.getStage().draw();
  };

  return (
    <Row style={{ marginTop: "25px" }}>
      <Col>
        <Form.Label>Font-Family</Form.Label>
        <Form.Select
          aria-label="Default select example"
          defaultValue={fontFamily}
          onChange={handleChangeFont}
          label="text"
          size="sm"
        >
          <option>Open this select menu</option>
          <option value={fontFamily}>{fontFamily}</option>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
        </Form.Select>
      </Col>
      <Col>
        <Form.Label>Font-Size</Form.Label>
        <Form.Select
          aria-label="Default select example"
          defaultValue={fontSize}
          onChange={handleChangeFontSize}
          label="text"
          size="sm"
        >
          <option>Open this select menu</option>
          <option value={fontSize}>{fontSize}</option>
          <option value="25">25</option>
          <option value="56">56</option>
        </Form.Select>
      </Col>
      <div>{xPos}</div>
    </Row>
  );
};

export default TextElementInspector;
