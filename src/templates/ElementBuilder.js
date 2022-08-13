import { Text } from "react-konva";

const ElementBuilder = (state) => {
  console.log(state.shapeType);

  console.log("generating..");
  if (state.shapeType === "TEXT") {
    element = <Text {...state} draggable={true} />;
  } else {
    element = <Text text="wtf just happened" />;
  }

  return element;
};
export default ElementBuilder;
