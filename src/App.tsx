import React from "react";
import "./App.css";
import "./css/responsive.css";

import { BrowserRouter as Router } from "react-router-dom";
import WrapperComponent from "./components/Wrapper/WrapperComponent";
function App() {
  return (
    <div className="App">
      <Router>
        <WrapperComponent />
      </Router>
    </div>
  );
}

export default App;
