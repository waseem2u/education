import React from "react";
import CareerNavbar from "@/component/CareerNavbar";
import CareerExplore from "@/component/CareerExplore";
import CareerFooter from "@/component/CareerFooter";
import CareerDoctor from "@/component/CareerDoctor";
import CareerCustomTab from "@/component/CareerCustomTab";

function CareerPage() {
  return (
    <div>
      <CareerNavbar />
      <CareerExplore />
      {/* <CareerCustomTab />
      <CareerDoctor />
      <CareerFooter /> */}
    </div>
  );
}

export default CareerPage;
