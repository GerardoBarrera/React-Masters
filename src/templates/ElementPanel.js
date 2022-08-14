import { Row, ToggleButton, Col, FloatingLabel, Badge } from "react-bootstrap";
import { usePdfContext } from "../pdf/PdfContextProvider";
import { Button } from "react-bootstrap";
import {
  addElement,
  deleteElement,
  NO_ELEMENT_SELECTED,
  updateElement,
} from "../pdf/PdfReducer";
import { Form } from "react-bootstrap";
import { BsTextarea, BsTextareaT, BsTextCenter } from "react-icons/bs";
import uuid from "react-uuid";

const ElementPanel = () => {
  const [state, dispatch] = usePdfContext();
  const { elements, selectedElement } = state;
  const textFactory = ({
    elementType,
    text,
    fontSize,
    fontFamily,
    x,
    y,
    width,
    height,
  }) => ({
    id: uuid(),
    elementType,
    text,
    fontSize,
    fontFamily,
    x,
    y,
    width,
    height,
  });

  const handleDeleteText = () => {
    dispatch(deleteElement(selectedElement));
  };

  const handleUpdateText = (attribute, value) => {
    var newElement = elements[selectedElement];
    newElement[attribute] = value;
    console.log(newElement);
    dispatch(updateElement(newElement, selectedElement));
    console.log(elements);
  };

  const handleAddText = () => {
    dispatch(
      addElement(
        textFactory({
          elementType: "TEXT",
          text: "Text Factory Created",
          fontSize: 22,
          fontFamily: "freesans",
          x: 40,
          y: 50,
        })
      )
    );
  };
  return (
    <>
      <Col style={{ marginLeft: "25px", marginRight: "25px" }}>
        <Row
          style={{
            marginTop: "25px",
            marginBottom: "15px",
            BsTextCenter: true,
          }}
        >
          <Row style={{ marginBottom: "20px" }}>
            <a>
              <Button>
                <BsTextareaT size={40} onClick={handleAddText}></BsTextareaT>
              </Button>
            </a>
          </Row>
          <hr></hr>
        </Row>
        {selectedElement === NO_ELEMENT_SELECTED ? (
          ""
        ) : (
          <>
            <Row>
              <ToggleButton variant="danger" onClick={handleDeleteText}>
                Remove
              </ToggleButton>
            </Row>
            <Row>
              <Form.Label>Font-Family</Form.Label>
              <Form.Select
                aria-label="Default select example"
                defaultValue="freesans"
                onChange={(e) => {
                  handleUpdateText("fontFamily", e.target.value);
                }}
                label="text"
                size="sm"
                value={elements[selectedElement].fontFamily}
              >
                <option>Open this select menu</option>
                <option value="freesans">freesans</option>
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
              </Form.Select>
            </Row>
            <Row>
              <Form.Label>Font-Size</Form.Label>
              <Form.Control
                type="number"
                value={elements[selectedElement].fontSize}
                onChange={(e) => {
                  handleUpdateText("fontSize", e.target.value);
                }}
              />
              <Row>
                <Form.Label>Text</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "250px" }}
                  value={elements[selectedElement].text}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    handleUpdateText("text", e.target.value);
                  }}
                />
              </Row>
            </Row>
          </>
        )}
        <Row>Text Elements: {Object.keys(elements).length}</Row>
      </Col>
    </>
  );
};

export default ElementPanel;
