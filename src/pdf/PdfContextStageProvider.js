import React from "react";

export const PdfContextStage = React.createContext();
PdfContextStage.displayName = "PdfContextStage";

export const usePdfContextStage = () => React.useContext(PdfContextStage);
