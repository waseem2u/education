import Image from "next/image";
import React from "react";
import { Arrow } from "@/svg";

const ExperienceCard = () => {
  return (
    <div className="mt-12 lg:mt-24 px-2 lg:px-[200px]">
      <div className="relative w-full h-[452px] bg-indigo border border-indigo rounded-2xl">
        <Image
          src="/experience/experience1.svg"
          alt="exp"
          className="absolute top-0 right-0 hidden lg:block"
          width={384}
          height={384}
        />
        <Image
          src="/experience/experience1.svg"
          alt="exp"
          className="absolute top-0 right-0 lg:hidden"
          width={168}
          height={168}
        />
        <Image
          src="/experience/experience2.svg"
          alt="exp"
          className="absolute bottom-0 left-0 hidden lg:block"
          width={168}
          height={168}
        />
        <Image
          src="/experience/experience2.svg"
          alt="exp"
          className="absolute bottom-0 left-0 lg:hidden"
          width={84}
          height={84}
        />
        <div className="relative flex justify-center items-center gap-4 flex-col py-14 z-10 lg:py-[69px] lg:px-[170px]">
          <h3 className="w-full max-w-[744px] text-white-contrast font-space-gori font-normal lg:leading-[67px] text-center text-3xl lg:text-5.6xl">
            Experience The Revolution in Education
          </h3>
          <p className="w-full max-w-[628px] text-lg lg:text-2xl font-space-gori font-normal text-white-contrast text-center">
            Begin Your Free Trial Today & Feel the MojiGurukul Difference in
            Your Child's Learning Journey - No Commitment Required!
          </p>
        </div>
        <div className=" flex justify-center items-center gap-3 lg:gap-6">
          <button className="w-full max-w-[193px] flex justify-center items-center gap-1 text-xl font-normal font-space-gori text-center py-[13px] lg:px-7 border-2 hover:border-indigo bg-white rounded-2xl cursor-pointer text-indigo">
            <p className="text-xl font-space-gori font-normal text-indigo">Join for Free</p> <Arrow />
          </button>
          <button className="w-full max-w-[146px] flex justify-center items-center text-xl font-normal font-space-gori text-center py-[13px] px-7 border-[1.5px] border-white bg-indigo rounded-2xl cursor-pointer text-white">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
