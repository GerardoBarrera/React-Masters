import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Layer, Rect, Stage, Transformer } from "react-konva";
import ElementInspector from "./ElementInspector";
import SVGImage from "./SVGImage";
import TextElement from "./TextElement";
import { Context } from "react";
import CurrentElementContext from "./CurrentElementContext";
import ElementBuilder from "./ElementBuilder";

const CreateTemplate = () => {
  const mainStageRef = useRef();
  const selectedElement = useRef();
  const pdfAreaRef = useRef();
  const [offSetX, setOffSetX] = useState(0);
  const value = useState("Hi first state");
  const trRef = useRef();
  const [elements, setElements] = useState({
    elements: [
      {
        id: 1,
        shapeType: "TEXT",
        text: "{HeaderTitle}",
        x: 10,
        y: 10,
      },
    ],
  });

  const handleWheel = (e) => {
    setElements((elements) => ({
      elements: elements.elements.map((el) =>
        el.id === 1 ? { ...el, x: 22, y: 23 } : el
      ),
    }));
    e.evt.preventDefault();
    var scaleBy = 1.11;
    var oldScale = mainStageRef.current.scaleX();
    var pointer = mainStageRef.current.getPointerPosition();

    var mousePointTo = {
      x: (pointer.x - mainStageRef.current.x()) / oldScale,
      y: (pointer.y - mainStageRef.current.y()) / oldScale,
    };

    // how to scale? Zoom in? Or zoom out?
    let direction = e.evt.deltaY > 0 ? 1 : -1;

    // when we zoom on trackpad, e.evt.ctrlKey is true
    // in that case lets revert direction
    if (e.evt.ctrlKey) {
      direction = -direction;
    }

    var newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    mainStageRef.current.scale({ x: newScale, y: newScale });

    var newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    mainStageRef.current.position(newPos);
  };

  useEffect(() => {
    var container = document.querySelector(".canvas-holder");
    mainStageRef.current.width(container.offsetWidth);
    mainStageRef.current.height(container.offsetHeight);

    var offsetXBy =
      (mainStageRef.current.width() - pdfAreaRef.current.width()) / 2;
    setOffSetX(-offsetXBy);
  }, []);
  return (
    <CurrentElementContext.Provider value={value}>
      <Row>
        <Col
          className="canvas-holder"
          lg={8}
          style={{
            backgroundColor: "grey",
            height: "1000px",

            overflow: "hidden",
          }}
        >
          <CurrentElementContext.Consumer>
            {(value) => (
              <Stage
                ref={mainStageRef}
                width={900}
                height={900}
                draggable={true}
                onWheel={handleWheel}
                offsetX={offSetX}
                offsetY={-10}
              >
                <CurrentElementContext.Provider value={value}>
                  <Layer></Layer>
                  <Layer>
                    <Rect
                      ref={pdfAreaRef}
                      fill="white"
                      width={612}
                      height={792}
                      transformer={trRef}
                    ></Rect>
                    <SVGImage transformer={trRef}></SVGImage>
                    <TextElement transformer={trRef}></TextElement>
                    <TextElement transformer={trRef}></TextElement>
                    {elements.elements.map((element) => (
                      <ElementBuilder {...element} key={element.id} />
                    ))}
                    <Transformer
                      ref={trRef}
                      borderStroke="black"
                      boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                          return oldBox;
                        }
                        return newBox;
                      }}
                    />
                  </Layer>
                </CurrentElementContext.Provider>
              </Stage>
            )}
          </CurrentElementContext.Consumer>
        </Col>
        <Col style={{ marginLeft: "10px" }}>
          <ElementInspector></ElementInspector>
        </Col>
      </Row>
    </CurrentElementContext.Provider>
  );
};

export default CreateTemplate;
