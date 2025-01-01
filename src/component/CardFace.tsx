import React from "react";

const CardFace = () => {
  return (
    <div>
      <div className="flex justify-center items-center relative">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full">
          <img
            src="/elivator1/Avater3.svg"
            alt="avator"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full absolute right-3 md:right-4">
          <img
            src="/elivator1/Avater2.svg"
            alt="avator"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full relative left-2 md:left-4">
          <img
            src="/elivator1/Avater1.svg"
            alt="avator"
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CardFace;
