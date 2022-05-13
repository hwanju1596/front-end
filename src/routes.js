import Temp from "./pages/Temp";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Temp />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  );
}
