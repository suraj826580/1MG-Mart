import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import LandingPage from "../Pages/LandingPage";
import Payment from "../Pages/Payment";
import SignIn from "../Pages/SignIn";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage />} />
      <Route path={"/signin"} element={<SignIn />} />
      <Route path={"/paymentpage"} element={<Payment />} />
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}
