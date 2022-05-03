import React from "react";
import ReactDOM from "react-dom";
import Weather from "./weather";
import Footer from "./Footer";
import bgImage from "./video/background-image.mp4";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>
        <Weather city="Mexico City" />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
