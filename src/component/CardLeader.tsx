import React from "react";

const CardLeader = () => {
  return (
    <div className="card-filter flex justify-center items-center w-[74px] h-[100px] md:w-[133px] md:h-[184px] bg-white rounded-2xl">
      <div className="flex justify-center items-center flex-col ">
        <p className="text-[8px] md:text-sm font-normal font-space-gori text-[#3d3842] text-center pb-0 md:pb-2">
          Leaderboard
        </p>
        <div className="hidden md:block w-[54px] h-[54px]">
          <img
            src="/icon/Avater.svg"
            alt="avator"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="block md:hidden w-[34px] h-[34px]">
          <img
            src="/icon/Avater.svg"
            alt="avator"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[10px] md:text-sm font-space-gori font-normal text-[#5749F6] md:pt-2 md:pb-1">
          Danish Se
        </p>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[10px] h-[10px] md:w-4 md:h-4 rounded-full bg-[#ffdb00]"></div>
          <p className="text-[10px] md:text-xs font-space-gori font-normal text-[#898989]">
            1000
          </p>
        </div>
        <p className="text-[10px] md:text-sm font-space-gori font-normal text-[#3d3842] md:pt-1">
          Level 10
        </p>
      </div>
    </div>
  );
};

export default CardLeader;
