import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {Context} from "./context/Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
    <App />
    </Context>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
