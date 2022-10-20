import React from "react";
import ReactDOM from "react-dom";

import GameManager from "./GameManager";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GameManager />
  </React.StrictMode>,
  rootElement
);
