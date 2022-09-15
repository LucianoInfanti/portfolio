import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./fonts/AdobeGaramond.ttf";
import "./fonts/AdobeGaramondItalic.ttf";
import "./fonts/FiraCode-Regular.ttf";

import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PrismicProvider client={client}>
    <App />
  </PrismicProvider>
);
