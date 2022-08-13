import { createContext } from "react";

const CurrentElementContext = createContext([[], () => {}]);
export default CurrentElementContext;
