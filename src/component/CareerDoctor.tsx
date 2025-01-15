import React from "react";
import Image from "next/image";
import CareerCard from "./CareerCard";
import CareerInnovate from "./CareerInnovate";
import { CareerPlay } from "@/svg";
const CareerDoctor = () => {
  return (
    <div className="px-2 lg:px-40 mt-4">
      <div className="vertical-bar pl-4 lg:pl-16 top-4">
        <div className="relative">
          <div className="absolute -left-6 top-[4px] lg:-left-20  lg:top-[1px] w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full"></div>
          <div className="">
            <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey pb-6">
              <div className=" flex justify-center items-center gap-2 lg:gap-14">
                <div className="flex justify-center items-center gap-2 ">
                  <div className="w-6 h-6 lg:w-[30px] lg:h-[30px] border border-purple-heart rounded-full flex justify-center items-center">
                    <CareerPlay />
                  </div>

                  <span className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                    1.
                  </span>
                  <p className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                    Introduction of Doctor Career
                  </p>
                </div>
                <div className="flex justify-center items-center rounded-lg bg-off-green">
                  <p className="text-xs lg:text-base font-semibold text-caribbean-green px-1 py-2 lg:px-4 lg:py-[10px]">
                    10% Completed
                  </p>
                </div>
              </div>
              <div>
                <span className="text-xs lg:text-base font-space-gori font-semibold text-blue-grey">
                  10 minutes
                </span>
              </div>
            </div>
          </div>
        </div>

        {CAREER_D0CTOR.map((x, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-6 lg:-left-20 top-8 lg:top-7 w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full"></div>
            <div className="">
              <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey py-6">
                <div className=" flex justify-center items-center gap-2 lg:gap-14">
                  <div className="flex justify-center items-center gap-2 ">
                    <div className="w-6 h-6 lg:w-[30px] lg:h-[30px] border border-purple-heart rounded-full flex justify-center items-center">
                      {x.image}
                    </div>

                    <span className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                      {x.count}
                    </span>
                    <p className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                      {x.name}
                    </p>
                  </div>
                  <div className="flex justify-center items-center rounded-lg bg-off-green">
                    <p className="text-xs lg:text-base font-semibold text-caribbean-green px-1 py-2 lg:px-4 lg:py-[10px]">
                      {x.percent}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-xs lg:text-base font-space-gori font-semibold text-blue-grey">
                    {x.minute}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="relative">
          <div className="absolute -left-6 lg:-left-20 top-8 lg:top-7 w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full"></div>
          <div className="">
            <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey py-6">
              <div className=" flex justify-center items-center gap-14">
                <div className="flex justify-center items-center gap-2 ">
                  <div className="hidden lg:block">
                    <Image
                      src="/career/careerLamp.svg"
                      alt="career"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="lg:hidden">
                    <Image
                      src="/career/careerLamp.svg"
                      alt="career"
                      width={24}
                      height={24}
                    />
                  </div>

                  <p className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                    Quiz
                  </p>
                </div>
                <div className="flex justify-center items-center rounded-lg bg-off-green"></div>
              </div>
              <div>
                <span className="text-xs lg:text-base font-space-gori font-semibold text-blue-grey">
                  10 Questions
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <CareerCard />
        </div>
        <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey py-6">
          <div className="relative">
            <div className="absolute -left-6 lg:-left-20 top-[3px] lg:top-0 w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full"></div>
            <div className="">
              <div className="flex justify-center items-center gap-2">
                <div className="hidden lg:block">
                  <Image
                    src="/career/careerLamp.svg"
                    alt="career"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="lg:hidden">
                  <Image
                    src="/career/careerLamp.svg"
                    alt="career"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                  Quiz
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs lg:text-base font-space-gori font-semibold text-[#697585]">
              10 Questions
            </span>
          </div>
        </div>
        <div className="pt-4">
          <CareerInnovate />
        </div>
        {CAREER_PART.map((x, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-6 lg:-left-20 top-8 lg:top-7 w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full"></div>
            <div className="">
              <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey py-6">
                <div className=" flex justify-center items-center gap-2 lg:gap-14">
                  <div className="flex justify-center items-center gap-2 ">
                    <div className="w-6 h-6 lg:w-[30px] lg:h-[30px] border border-purple-heart rounded-full flex justify-center items-center">
                      {x.image}
                    </div>

                    <span className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                      {x.count}
                    </span>
                    <p className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                      {x.name}
                    </p>
                  </div>
                  <div className="flex justify-center items-center rounded-lg bg-off-green">
                    <p className="text-xs lg:text-base font-semibold text-caribbean-green px-1 py-2 lg:px-4 lg:py-[10px]">
                      {x.percent}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-xs lg:text-base font-space-gori font-semibold text-blue-grey">
                    {x.minute}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="relative">
          <div className="absolute -left-6 lg:-left-20 top-[39px] lg:top-7 w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full flex justify-center items-center">
            <div className="w-3 h-3 rounded-full bg-purple-heart"></div>
          </div>
          <div className="">
            <p className="text-lg lg:text-[28px] font-space-gori font-normal text-purple-heart pt-8">
              Congratulation! You Have Completed Path
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[802px] flex justify-start items-start ">
        <p className="text-base lg:text-xl font-space-gori text-silver-chalice pt-4 pl-4 lg:pl-16">
          From interactive lessons to thought-provoking quizzes, everything at
          MojiGurukul is designed with your curiosity, excitement, and growth in
          mind.
        </p>
      </div>
    </div>
  );
};
export default CareerDoctor;
export const CAREER_D0CTOR = [
  {
    id: 1,
    image: <CareerPlay />,
    count: "2.",
    name: "Introduction of Doctor Career",
    percent: " 20% Completed",
    minute: "10 minutes",
  },
  {
    id: 2,
    image: <CareerPlay />,
    count: "3.",
    name: "Introduction of Doctor Career",
    percent: " 30% Completed",
    minute: "10 minutes",
  },
  {
    id: 3,
    image: <CareerPlay />,
    count: "4.",
    name: "Introduction of Doctor Career",
    percent: " 40% Completed",
    minute: "10 minutes",
  },
  {
    id: 4,
    image: <CareerPlay />,
    count: "5.",
    name: "Introduction of Doctor Career",
    percent: " 50% Completed",
    minute: "10 minutes",
  },
];
const CAREER_PART = [
  {
    id: 1,
    image: <CareerPlay />,
    count: "6.",
    name: "Introduction of Doctor Career",
    percent: " 10% Completed",
    minute: "10 minutes",
  },
  {
    id: 2,
    image: <CareerPlay />,
    count: "7.",
    name: "Introduction of Doctor Career",
    percent: " 10% Completed",
    minute: "10 minutes",
  },
  {
    id: 3,
    image: <CareerPlay />,
    count: "8.",
    name: "Introduction of Doctor Career",
    percent: " 10% Completed",
    minute: "10 minutes",
  },
];
