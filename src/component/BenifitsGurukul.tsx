import React from "react";
import CustomCard4 from "./CustomCard4";

const BenifitsGurukul = () => {
  return (
    <div className="mt-12 lg:mt-24 px-[50px] lg:px-[200px]">
      <div className="flex justify-center items-center flex-col lg:flex-row gap-[20px] lg:gap-[196px]">
        <h5 className="hidden lg:block w-full max-w-[540px] text-[56px] font-space-gori font-normal text-indigo ">
          How is MojiGurukul Different?
        </h5>
        <h5 className="block lg:hidden w-full text-3xl font-space-gori font-normal text-indigo text-start">
          How is MojiGurukul Different?
        </h5>
        <p className="text-2xl font-space-gori font-normal text-natural-grey text-start ">
          Interactive tools for students to enable them to learn, grow and
          master subject’s core concepts with just 15 mins a day.
        </p>
      </div>
      <div>
        <CustomCard4 />
      </div>
    </div>
  );
};

export default BenifitsGurukul;
