import React from "react";
import CareerCustomButton from "./CareerCustomButton";

const CareerCard = () => {
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
          <div className="bg-purple-heart border rounded px-[10px] py-[10px]">
            <span className="text-lg font-space-gori font-normal text-start text-white">
              No one
            </span>
          </div>
          {CAREER_OPTION.map((x, index) => (
            <div className="pt-[14px]">
              <div
                key={index}
                className="drop-shadow border border-white-rock rounded px-[10px] py-[10px]"
              >
                <span className="text-lg font-space-gori font-normal text-ship-grey">
                  {x.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-start items-start gap-4 pt-6">
          <CareerCustomButton
            name="Previous"
            className="bg-voilet text-purple-heart"
          />
          <CareerCustomButton name="Next" />
        </div>
      </div>
    </div>
  );
};

export default CareerCard;

const CAREER_OPTION = [
  {
    id: 1,
    title: "  Option 2",
  },
  {
    id: 2,
    title: "  Option 3",
  },
  {
    id: 3,
    title: "  Option",
  },
];
