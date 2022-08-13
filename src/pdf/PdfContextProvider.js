import React from "react";

export const PdfContext = React.createContext();
PdfContext.displayName = "PdfContext";

export const usePdfContext = () => React.useContext(PdfContext);

const PdfContextProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <PdfContext.Provider value={[globalState, dispatch]}>
      {children}
    </PdfContext.Provider>
  );
};

export default PdfContextProvider;
