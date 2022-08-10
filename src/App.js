import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Navigation from "./Navigation";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import CreateTemplate from "./templates/CreateTemplate";
import Templates from "./templates/Templates";
import ReactDOMClient from "react-dom/client";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/edit" element={<Templates />} />
          <Route path="/templates/create" element={<CreateTemplate />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};
// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havenese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Havenese",
//     }),
//     React.createElement(Pet, {
//       name: "Pet3",
//       animal: "Animal3",
//       breed: "Breed3",
//     })
//   );
// };
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
