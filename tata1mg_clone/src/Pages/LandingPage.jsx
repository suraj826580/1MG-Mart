import React from "react";
import HeaderCarousel from "./HeaderCarousel";
import HealthConcernCarouselCard from "./HealthConcernCarouselCard";
import Navbar from "./NavBar";
import SHBC from "./SHBC";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeaderCarousel />
      <SHBC />
      <HealthConcernCarouselCard />
    </>
  );
}
