import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import LandingPage from "../Pages/LandingPage";
import Payment from "../Pages/Payment";
import SignIn from "../Pages/SignIn";
import { VitaminsPage } from "../Pages/Vitamines";
import  {SingleProductPage}  from "../Pages/singleProductPage";
import PaymentConfirmation from "../Pages/PaymentConfirmation";
import UserDetails from "../Pages/UserDetails";
import {  SkinCarePage } from "../Pages/SkinCarePage";
import { SupplementsPage } from "../Pages/SupplimentsPage";
import { AyurvedaPage } from "../Pages/Ayurvedapage";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage />} />
      <Route path={"/signin"} element={<SignIn />} />
      <Route path={"/paymentpage"} element={<Payment />} />
      <Route path={"/userDetails"} element={<UserDetails/>} />
      <Route path={"/confirmation"} element={<PaymentConfirmation/>} />
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/vitamins" element={<VitaminsPage />}></Route>
      <Route path="/skin_care" element={<SkinCarePage />}></Route>
      <Route path="/supplements" element={<SupplementsPage />}></Route>
      <Route path="/ayurveda_medicine" element={<AyurvedaPage />}></Route>
      <Route path="/vitamins/:id" element={<SingleProductPage />}></Route>
      <Route path="/skin_care/:id" element={<SingleProductPage />}></Route>
      <Route path="/supplements/:id" element={<SingleProductPage />}></Route>
      <Route path="/ayurveda_medicine/:id" element={<SingleProductPage />}></Route>
    </Routes>
  );
}
