import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="AppBody">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
