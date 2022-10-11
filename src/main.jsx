import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Catalogo from "./Pages/Catalogo";
import "./index.css";
import Atracao from "./Pages/Atracao";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import { UserStorage } from "./UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route element={<App />}>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/" element={<Catalogo />} />
            <Route path="/movie/:id" element={<Atracao />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
          </Route>
        </Routes>
      </UserStorage>
    </BrowserRouter>
  </React.StrictMode>,
);
