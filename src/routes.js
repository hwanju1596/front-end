import Temp from "./pages/Temp";
import { Routes, Route } from "react-router-dom";
import React from "react";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Temp />} />
    </Routes>
  );
}
