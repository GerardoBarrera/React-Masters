import { useState } from "react";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const TextElementInspector = ({ element }) => {
  const [fontFamily, setFontFamily] = useState(
    element.current.attrs.fontFamily
  );
  const [fontSize, setFontSize] = useState(element.current.attrs.fontSize);

  const handleChangeFont = (e) => {
    element.current.attrs.fontFamily = e.target.value;
    element.current.getStage().draw();
  };

  const handleChangeFontSize = (e) => {
    element.current.attrs.fontSize = e.target.value;
    element.current.getStage().draw();
  };

  return (
    <Row>
      <Row style={{ marginTop: "25px" }}>
        <Form.Label>Font-Family</Form.Label>
        <Form.Select
          aria-label="Default select example"
          defaultValue={fontFamily}
          onChange={handleChangeFont}
          label="text"
        >
          <option>Open this select menu</option>
          <option value={fontFamily}>{fontFamily}</option>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
        </Form.Select>
      </Row>
      <Row style={{ marginTop: "25px" }}>
        <Form.Label>Font-Size</Form.Label>
        <Form.Select
          aria-label="Default select example"
          defaultValue={fontSize}
          onChange={handleChangeFontSize}
          label="text"
        >
          <option>Open this select menu</option>
          <option value={fontSize}>{fontSize}</option>
          <option value="25">25</option>
          <option value="56">56</option>
        </Form.Select>
      </Row>
    </Row>
  );
};

export default TextElementInspector;
