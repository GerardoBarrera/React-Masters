import { createContext } from "react";

const CurrentElementContext = createContext(["Test", () => {}]);
export default CurrentElementContext;
