import React from "react";
import { SuccessCardsTypes } from "@/types";

const SuccessCard: React.FC<SuccessCardsTypes> = ({
  id,
  name,
  role,
  icon,
  image,
}) => {
  return (
    <div
      className="flex justify-center items-end w-full lg:max-w-[352px] h-[633px] border hover:border-indigo rounded-2xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center gap-[68px] pb-8">
        <div
          key={id}
          className="flex justify-center items-center flex-col gap-1"
        >
          <p className="text-xl font-space-gori font-normal text-white-contrast">
            {name}
          </p>
          <span className="text-xl font-space-gori font-normal text-white-contrast">
            {role}
          </span>
        </div>
        <div className="w-14 h-14 bg-white border-[1.5px] rounded-lg flex justify-center items-center ">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
