import React from "react";
import CareerNavbar from "@/component/CareerNavbar";
import CareerExplore from "@/component/CareerExplore";
import CareerFooter from "@/component/CareerFooter";
// import CareerDoctor from "@/component/CareerDoctor";
// import CareerCustomTab from "@/component/CareerCustomTab";
import CareerTab from "@/component/TabCareer";

function CareerPage() {
  return (
    <div>
      <CareerNavbar />
      <CareerTab />
      {/* <CareerExplore /> */}
      {/* <CareerCustomTab /> */}
      {/* <CareerDoctor /> */}
      {/* <CareerFooter /> */}
    </div>
  );
}

export default CareerPage;
