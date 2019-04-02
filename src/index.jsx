import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./components/App";
ReactDOM.render(
  //what to render
  <div>
    <Router>
      <App />
    </Router>
  </div>,

  //where to render

  document.getElementById("app")
);
