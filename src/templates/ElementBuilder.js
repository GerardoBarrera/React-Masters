import { text } from "dom-helpers";
import React from "react";
import { Text } from "react-konva";
import { PdfContext, usePdfContext } from "../pdf/PdfContextProvider";
import { selectElement, updateElement } from "../pdf/PdfReducer";
import { useRef } from "react";

const ElementBuilder = ({ transformer }) => {
  const [state, dispatch] = usePdfContext();
  const { elements } = state;
  console.log(elements);

  const handleOnClick = (text) => {
    transformer.current.nodes([text]);
  };

  const all = Object.values(elements).map((element) => {
    if (element.elementType === "TEXT") {
      return (
        <Text
          {...element}
          key={element.id}
          draggable={true}
          onClick={(e) => {
            handleOnClick(e.target);
            dispatch(selectElement(element.id));
            console.log(e.target.getStage());
          }}
          onDragEnd={(e) => {
            var newElement = element;
            newElement.x = e.target.x();
            newElement.y = e.target.y();
            dispatch(updateElement(newElement, element.id));
          }}
        />
      );
    }
  });

  return all;
};
export default ElementBuilder;
