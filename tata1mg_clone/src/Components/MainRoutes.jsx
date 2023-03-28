import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage />} />
    </Routes>
  );
}
