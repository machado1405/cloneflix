import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Catalogo from "./Pages/Catalogo";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="AppBody">
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/catalogo/:id" element={<Catalogo />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
);
