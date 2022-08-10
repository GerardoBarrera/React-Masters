import { Text } from "react-konva";
import { useContext, useState, useRef } from "react";
import CurrentElementContext from "./CurrentElementContext";

const TextElement = () => {
  const [fontFamily, setFontFamily] = useState("Georgia, serif");
  const [fontSize, setFontSize] = useState(18);
  const textRef = useRef();
  const [val, setVal] = useContext(CurrentElementContext);

  const handleOnClick = () => {
    textRef.current.elementType = "text";
    setVal(textRef);
  };

  return (
    <Text
      ref={textRef}
      fontFamily={fontFamily}
      fontSize={fontSize}
      text="ok"
      draggable={true}
      onClick={handleOnClick}
    ></Text>
  );
};

export default TextElement;
