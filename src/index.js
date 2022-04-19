import React from "react";
import ReactDOM from "react-dom";
import Weather from "./weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
