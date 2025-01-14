import React from "react";
import CustomCard4 from "./CustomCard4";
import CustomCard5 from "./CustomCard5";
import { HOW_MOJIGURUKAL_DIFFERENT } from "@/utils/static";
import classNames from "classnames";
import { HowMojiDifferentTypes } from "@/types";

const BenifitsGurukul = () => {
  return (
    <div className="mt-12 lg:mt-24 px-2 lg:px-[200px]">
      <div className="flex justify-center items-center flex-col md:px-[140px] lg:px-0 lg:flex-row gap-8">
        <h5 className="hidden md:block w-full max-w-[540px] text-3xl lg:text-5.6xl leading-[56px] font-space-gori font-normal text-indigo ">
          How is MojiGurukul Different?
        </h5>
        <h5 className="block md:hidden w-full text-3xl font-space-gori font-normal text-indigo text-start">
          How is MojiGurukul Different?
        </h5>
        <p className="text-lg md:text-2xl font-space-gori font-normal text-natural-grey text-start ">
          Interactive tools for students to enable them to learn, grow and
          master subject’s core concepts with just 15 mins a day.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-8 pt-16">
        <div className="flex justify-center items-center flex-col gap-4">
          {HOW_MOJIGURUKAL_DIFFERENT.map((item) => (
            <CustomCard4
              key={item.id}
              id={item.id}
              title={item.title}
              paragraph={item.paragraph}
              icon={item.icon}
            />
          ))}
        </div>
        <div className=" w-full max-w-[544px] h-[448px] border-2 rounded-2xl">
          <img
            src="/video/Enabal.svg"
            alt="enabal"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BenifitsGurukul;
