import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./nav";
import CustomVerticalStepper from "./forms/CustomVerticalStepper";

function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <Nav />
        <div className="Formm">
          <Routes>
            <Route path="/register" element={<CustomVerticalStepper />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
