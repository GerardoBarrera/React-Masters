import { text } from "dom-helpers";
import React from "react";
import { Text } from "react-konva";
import { PdfContext, usePdfContext } from "../pdf/PdfContextProvider";
import { selectElement, updateElement } from "../pdf/PdfReducer";
import { useRef } from "react";
import TextElement from "./TextElement";

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
        <TextElement
          {...element}
          key={element.id}
          draggable={true}
          onClick={(e) => {
            handleOnClick(e.target);
            dispatch(selectElement(element.id));
            console.log(e.target.getStage());
          }}
          onTransform={(e) => {
            const scaleX = e.target.scaleX();
            const scaleY = e.target.scaleY();
            // we will reset it back
            e.target.scaleX(1);
            e.target.scaleY(1);

            e.target.width(Math.max(5, e.target.width() * scaleX));
            e.target.height(Math.max(e.target.height() * scaleY));
            const width = Math.max(5, e.target.width() * scaleX);
            const height = Math.max(e.target.height() * scaleY);
            var newElement = element;
            newElement.height = height;
            newElement.width = width;
            dispatch(updateElement(newElement, newElement.id));
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
