import { useContext, useEffect, useRef, useState } from "react";
import CurrentElementContext from "./CurrentElementContext";
import TextElementInspector from "./inspector/TextElementInspector";

const ElementInspector = () => {
  const element = useContext(CurrentElementContext);
  const [fontFamily, setFontFamily] = useState();
  const selectedElement = useRef();
  const [inspector, setInspector] = useState();

  useEffect(() => {
    el = element[0];
    if (el.current) {
      if (el.current.elementType === "text") {
        console.log(el.current);
        setInspector(
          <TextElementInspector
            key={el.current._id}
            element={el}
          ></TextElementInspector>
        );
        console.log("reset");
      }
    }
    // if (el.attrs) {
    //   selectedElement.current = el;
    //   selectedElement.current.attrs.fontSize = 25;
    //   var stage = selectedElement.current.getStage();
    //   stage.draw();
    //   console.log(el.attrs.fontSize);
    //   setFontFamily(el.attrs.fontFamily);
    // }
  }, [element]);

  return inspector;
};

export default ElementInspector;
