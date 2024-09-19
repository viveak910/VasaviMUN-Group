import React from "react";
import "./App.css";
import CustomVerticalStepper from "./forms/CustomVerticalStepper";

function App() {
  return (
    <div className="App">
      <br />
      <h1 id="head">Registration</h1>
      <div className="Formm">
        <CustomVerticalStepper></CustomVerticalStepper>
      </div>
    </div>
  );
}

export default App;
