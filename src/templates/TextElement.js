import { Rect, Text, Group } from "react-konva";
import React, { useContext, useState, useRef } from "react";
import CurrentElementContext from "./CurrentElementContext";

const TextElement = (props) => {
  // const [fontFamily, setFontFamily] = useState("Georgia, serif");
  // const [fontSize, setFontSize] = useState(18);
  // const textRef = useRef();
  // const rectRef = useRef();
  // const [groupRef, setGroupRef] = useState();

  // const [val, setVal] = useContext(CurrentElementContext);

  // const handleOnClick = () => {
  //   groupRef.elementType = "text";
  //   transformer.current.nodes([textRef.current]);
  //   setVal(groupRef);
  // };
  // console.log("re rendred tex element");

  // const handleTransform = () => {
  //   const node = textRef.current;
  //   const scaleX = node.scaleX();
  //   const scaleY = node.scaleY();
  //   // we will reset it back
  //   node.scaleX(1);
  //   node.scaleY(1);

  //   rectRef.current.x(node.x());
  //   rectRef.current.y(node.y());

  //   rectRef.current.x(node.x());
  //   rectRef.current.y(node.y());

  //   node.width(Math.max(5, node.width() * scaleX));
  //   node.height(Math.max(node.height() * scaleY));
  //   rectRef.current.width(Math.max(5, node.width() * scaleX));
  //   rectRef.current.height(Math.max(node.height() * scaleY));
  // };

  return (
    <Group>
      {/* // <Group ref={(newRef) => setGroupRef(newRef)}>
    //   <Rect
    //     width={50}
    //     height={50}
    //     ref={rectRef}
    //     dashEnabled={true}
    //     dash={[5, 4]}
    //     stroke="#555"
    //     strokeWidth={1}
    //     fill={false}
    //     shadowColor="black"
    //     opacity={1}
    //   ></Rect>
    // <Text
    //   width={50}
    //   height={50}
    //   dash={[1, 2, 3, 4]}
    //   dashEnabled={true}
    //   ref={textRef}
    //   text={text}
    //   fontFamily={fontFamily}
    //   fontSize={fontSize}
    //   draggable={true}
    //   onClick={handleOnClick}
    //   onTransform={handleTransform}
    //   onTransformEnd={(e) => {
    //     // transformer is changing scale of the node
    //     // and NOT its width or height
    //     // but in the store we have only width and height
    //     // to match the data better we will reset scale on transform end
    //     const node = textRef.current;
    //     const scaleX = node.scaleX();
    //     const scaleY = node.scaleY();
    //     // we will reset it back
    //     node.scaleX(1);
    //     node.scaleY(1);
    //     rectRef.current.x(node.x());
    //     rectRef.current.y(node.y());

    //     node.width(Math.max(5, node.width() * scaleX));
    //     node.height(Math.max(node.height() * scaleY));
    //     rectRef.current.width(Math.max(5, node.width() * scaleX));
    //     rectRef.current.height(Math.max(node.height() * scaleY));
    //     setVal(groupRef);
    //   }}
    //   onDragMove={(e) => {
    //     const node = textRef.current;
    //     rectRef.current.x(node.x());
    //     rectRef.current.y(node.y());
    //   }}
    //   onDragEnd={(e) => {
    //     setVal(groupRef);
    //   }}
    // />
    // </Group> */}
      <Rect
        width={props.width}
        height={props.height}
        x={props.x}
        y={props.y}
        dashEnabled={true}
        dash={[5, 4]}
        stroke="#555"
        strokeWidth={1}
        shadowColor="black"
        opacity={1}
      ></Rect>
      <Text {...props} />
    </Group>
  );
};

export default TextElement;
