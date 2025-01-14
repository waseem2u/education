import React from "react";
import SuccessCard from "./SuccessCard";
import { SUCCESS_STUDENT } from "@/utils/static";

const StudentSuccess = () => {
  return (
    <div className="mt-12 lg:mt-24 px-2 lg:px-[200px]">
      <div className="flex justify-center items-center flex-col lg:flex-row gap-[20px] lg:gap-[247px]">
        <h5 className="w-full max-w-[378px] font-space-gori font-normal text-3xl lg:text-5.6xl leading-[67px] text-indigo">
          Student Success Stories 
        </h5>
        <p className="text-lg lg:text-2xl font-space-gori font-normal text-natural-grey">
          Learn how MojiGurukul has helped students across India to overcome
          academic challenges and thrive with the support of our platform.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-8 pt-[60px]">
        {SUCCESS_STUDENT.map((item, index) => (
          <SuccessCard
            image={item.image}
            key={item.id}
            id={item.id}
            name={item.name}
            role={item.role}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentSuccess;
