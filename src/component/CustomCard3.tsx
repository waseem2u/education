import React from "react";
import { CircleIcon, CircleIcon1 } from "@/svg";

const CustomCard3 = () => {
  return (
    <div className="w-full max-w-[352px] lg:!max-w-[544px] bg-card3 bg-center bg-cover bg-no-repeat rounded-2xl bg-Rose-White border-2 ">
      <div className="pt-8 pl-8 w-[72px] h-[72px] lg:w-[120px] lg:h-[120px]">
        <img
          src="/engaje/Avater2.svg"
          alt="avater"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-8 py-8 flex justify-start items-start flex-col gap-6">
        <h5 className="font-space-gori font-medium text-black text-xl lg:text-3.3xl text-start">
          For Parents
        </h5>
        <p className="font-space-gori font-normal text-base lg:text-2xl text-natural-grey text-start">
          Be Involved in your child’s progress.Get reports and accurate insights
          of your child's academic development.Be a partner in your child’s
          education.
        </p>
      </div>
      <div className="px-8 pb-8 flex justify-start items-center gap-3">
        <p className="text-xl lg:text-2.8xl font-space-gori font-normal text-black">
          Explore
        </p>
        <div>
          <CircleIcon1 />
        </div>
      </div>
    </div>
  );
};

export default CustomCard3;
