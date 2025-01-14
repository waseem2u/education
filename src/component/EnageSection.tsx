import React from "react";
import CustomCard2 from "./CustomCard2";
import CustomCard3 from "./CustomCard3";

const EnageSection = () => {
  return (
    <div className="mt-12 lg:mt-24 px-2 lg:px-[200px]">
      <div className="flex justify-center items-start flex-col md:px-[140px] lg:px-0 lg:flex-row gap-[20px] lg:gap-[196px]">
        <h5 className="hidden md:block w-full max-w-[352px] text-3xl lg:text-5.6xl leading-[56px] font-space-gori font-normal text-indigo ">
          Engage With MojiGurukul
        </h5>
        <h5 className="block md:hidden w-full text-3xl font-space-gori font-normal text-indigo text-start">
          Engage With MojiGurukul
        </h5>
        <p className="text-lg md:text-2xl font-space-gori font-normal text-natural-grey text-start ">
          Discover modern learning that connects students, parents and tutors in
          interactive learning sessions,simplified with Interactive Games,
          Customized Lessons and Detailed insights the MojiGurukul way.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-4 md:gap-8 pt-[56px]">
        <CustomCard2 />
        <CustomCard3 />
      </div>
    </div>
  );
};

export default EnageSection;
