import React from "react";
import { Icon } from "@/svg";

const CustomCard4 = () => {
  return (
    <div className="card4 w-full max-w-[544px] h-[142px] px-6 ">
      <div className="flex justify-center items-center gap-4">
        <Icon />
        <div className="flex justify-start items-start flex-col ">
          <h3 className="font-space-gori font-medium text-black text-xl lg:text-3.3xl text-start">
            Innovative Revision Tools 
          </h3>
          <p className="text-xl font-space-gori font-normal">
            Helps you revise before exam in a modern way. CBSE or ICSE.  Maths,
            Science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard4;
