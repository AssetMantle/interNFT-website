import * as React from "react";
import HeroSection from "../views/HeroSection";
import HowItWorks from "../views/HowItWorks";
import ProductValues from "../views/ProductValues";
import WhyTrustUs from "../views/WhyTrustUs";

export default function Index() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhyTrustUs />
      <ProductValues />
    </>
  );
}
