import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Catalogo from "./pages/Catalogo";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
