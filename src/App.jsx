import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
