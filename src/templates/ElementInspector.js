import { useContext, useEffect, useRef, useState } from "react";
import CurrentElementContext from "./CurrentElementContext";
import TextElementInspector from "./inspector/TextElementInspector";

const ElementInspector = () => {
  const element = useContext(CurrentElementContext);
  const [fontFamily, setFontFamily] = useState();
  const selectedElement = useRef();
  const [inspector, setInspector] = useState();

  useEffect(() => {
    console.log("asdasd");
    console.log(element);
    // el = element[0];
    // if (el.current) {
    //   if (el.current.elementType === "text") {
    //     console.log(el.current.children[1]);
    //     setInspector(
    //       <TextElementInspector
    //         key={el.current._id}
    //         element={el}
    //         textElement={el.current.children[1]}
    //         rectElement={el.current.children[0]}
    //       ></TextElementInspector>
    //     );
    //     console.log("reset");
    //   }
    // }
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
