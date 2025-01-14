import React from "react";
import { Star, StarSmall } from "@/svg";

const TutorStarCard = () => {
  return (
    <div className="card-filter w-full max-w-[80px] h-[120px] lg:max-w-[160px] lg:h-[173px] bg-white border rounded-2xl py-7 px-12">
      <div className="flex justify-center items-center flex-col gap-0">
        <div className="hidden lg:block">
          <Star />
        </div>
        <div className="lg:hidden">
          <StarSmall />
        </div>
        <div>
          <span className="text-[8px] lg:text-xl font-space-gori font-normal text-black-cow">
            10K
          </span>
          <p className="text-[8px] lg:text-xl font-space-gori font-normal text-black-cow">
            Reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorStarCard;
