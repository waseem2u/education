import React from "react";
import { CircleGraph } from "../svg";

const CardService = () => {
  return (
    <div className="card-filter flex justify-center items-center flex-col w-[74px] h-[100px] md:w-[133px] md:h-[184px] bg-white rounded-2xl">
      <div className="flex justify-center items-center gap-8 md:gap-16">
        <p className="text-[8px] md:text-xs font-space-gori font-normal text-black">
          Progress
        </p>
        <div className="w-[2px] h-[10px]">
          <img
            src="/icon/3dot.svg"
            alt="3dot"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <CircleGraph />
      </div>
      <div className="md:hidden">
        <CircleGraph width="34" height="34" />
      </div>

      <p className="text-lite-black text-[8px] md:text-xs text-center absolute top-[38%] right-[39%] md:top-[39%] md:right-[40%]">
        82%
      </p>
      <div className="flex justify-center items-center gap-2 md:gap-6 ">
        <div className="flex justify-start items-start flex-col gap-[2px] md:gap-1">
          <p className="text-[8px] md:text-sm font-space-gori font-normal text-[#4b4949]">
            10
          </p>
          <p className="text-[8px] md:text-xs font-normal font-space-gori text-[#1c1c1c]">
            Completed
          </p>
        </div>
        <div className="flex justify-start items-start flex-col gap-[2px] md:gap-1">
          <p className="text-[8px] md:text-sm font-space-gori font-normal text-[#4b4949]">
            05
          </p>
          <p className="text-[8px] md:text-xs font-normal font-space-gori text-[#1c1c1c]">
            Review
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardService;
