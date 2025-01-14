"use client";

import React, { useState } from "react";
import CareerCustomButton from "./CareerCustomButton";

const CareerInnovate = () => {
  const [inputChange, setInputChange] = useState("");

  return (
    <div className="w-full max-w-[1132px] card-shadow">
      <div className="px-4 py-4">
        <div className="flex justify-start items-start flex-col gap-5">
          <div className="flex justify-start items-start">
            <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
              Question:
            </p>
            <span className="text-base font-space-gori font-normal text-dark-pastel-purple">
              3/30
            </span>
          </div>
          <p className="text-xl font-space-gori font-normal text-ship-grey">
            Who is the innovate bulb?
          </p>
        </div>
        <div className="pt-4 ">
          <div className=" border rounded px-[10px] pt-[10px] pb-[108px]">
            <input
              type="text"
              placeholder="Type Your Answer"
              onChange={() => setInputChange("")}
              className="placeholder:text-lg placeholder:font-space-gori placeholder:text-natural-grey"
            />
          </div>
        </div>
        <div className="flex justify-start items-start gap-4 pt-6">
          <CareerCustomButton
            name="Previous"
            className="bg-voilet text-purple-heart"
          />
          <CareerCustomButton name="Next" className="text-white"/>
        </div>
      </div>
    </div>
  );
};

export default CareerInnovate;
