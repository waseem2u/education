import React from "react";
import { TutorCustomCardTypes } from "@/types";
import { StarIcon } from "@/svg";

const TutorCustomCard: React.FC<TutorCustomCardTypes> = ({
  id,
  image,
  name,
  feild,
  review,
  totalStudent,
}) => {
  return (
    <div className="w-full max-w-[640px] p-1 lg:p-6 flex justify-center items-center hover:border-2 rounded-2xl border-indigo gap-24 lg:gap-[249px]">
      <div className="flex justify-center items-center gap-[14px]">
        <div className="w-8 h-8 lg:w-14 lg:h-14 ">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div>
          <h6 className="text-base lg:text-2xl font-normal font-space-gori text-Dark-Grey">
            {name}
          </h6>
          <p className=" text-sm lg:text-xl font-space-gori font-normal text-natural-grey">
            {feild}
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start flex-col gap-2">
        <div className="flex justify-center items-center gap-1">
          <StarIcon />
          <p className="text-sm lg:text-base text-natural-grey font-space-gori font-normal">
            {review}
          </p>
        </div>
        <span className="text-sm lg:text-base font-space-gori font-normal text-Charcoal">
          {totalStudent}
        </span>
      </div>
    </div>
  );
};

export default TutorCustomCard;
