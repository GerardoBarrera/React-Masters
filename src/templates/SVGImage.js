import { useEffect, useRef } from "react";
import { useState, useEffect } from "react";
import { Image } from "react-konva";
import useImage from "use-image";
import CurrentElementContext from "./CurrentElementContext";
import { useContext } from "react";

const SVGImage = () => {
  const [image] = useImage("http://localhost:3001/test.svg");
  const imageRef = useRef();
  const [val, setVal] = useContext(CurrentElementContext);

  return <Image ref={imageRef} image={image}></Image>;
};
export default SVGImage;
