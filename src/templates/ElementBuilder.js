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

  const all = elements.map((element, key) => {
    if (element.elementType === "TEXT") {
      return (
        <Text
          {...element}
          key={key}
          draggable={true}
          onClick={(e) => {
            handleOnClick(e.target);
            console.log(key);
            dispatch(selectElement(key));
          }}
          onDragEnd={(e) => {
            var newElement = element;
            newElement.x = e.target.x();
            newElement.y = e.target.y();
            dispatch(updateElement(newElement, key));
          }}
        />
      );
    }
  });

  return all;
};
export default ElementBuilder;
