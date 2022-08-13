const Pdf = () => {
  return (
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
        <PdfContext.Consumer>
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
              <PdfContext.Provider value={value}>
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
              </PdfContext.Provider>
            </Stage>
          )}
        </PdfContext.Consumer>
      </Col>
      <Col style={{ marginLeft: "10px" }}>
        <ElementInspector></ElementInspector>
      </Col>
    </Row>
  );
};
