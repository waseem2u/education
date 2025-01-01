import React from "react";
import { CircleIcon } from "../svg";

const CustomCard2 = () => {
  return (
    <div className="w-full max-w-[352px] lg:!max-w-[544px] bg-card2 bg-center bg-cover bg-no-repeat rounded-2xl border-2 bg-sky">
      <div className="pt-8 pl-8 w-[72px] h-[72px] lg:w-[120px] lg:h-[120px]">
        <img
          src="/engaje/Avater1.svg"
          alt="avater"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-8 py-8 flex justify-start items-start flex-col gap-6">
        <h5 className="font-space-gori font-medium text-black text-xl lg:text-3.3xl text-start">
          For Students
        </h5>
        <p className="font-space-gori font-normal text-base lg:text-2xl text-natural-grey text-start">
          Just 15 Mins a days to master concepts. Learn with Interactive Games
          and Personalised Learning Paths Tailored to fit your unique learning
          style and pace
        </p>
      </div>
      <div className="px-8 pb-8 flex justify-start items-center gap-3">
        <p className="text-xl lg:text-2.8xl font-space-gori font-normal text-black">
          Explore
        </p>
        <CircleIcon />
      </div>
    </div>
  );
};

export default CustomCard2;
