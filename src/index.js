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
        <h1 id="app-title">Elementz</h1>
        <Weather city="Mexico City" />
        <div>
          <p id="rights">
            @ 2022 Paulette Zaldivar Flores. All Rights Reserved.
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
