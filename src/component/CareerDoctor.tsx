import React from "react";
import Image from "next/image";
import CareerCard from "./CareerCard";
import CareerInnovate from "./CareerInnovate";

const CareerDoctor = () => {
  return (
    <div className="px-40 mt-4">
      <div className="vertical-bar pl-16 top-4">
        {CAREER_D0CTOR.map((x, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-20 top-7 w-[32px] h-[32px] stars-shadow border border-light-violet rounded-full"></div>
            <div className="">
              <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey py-6">
                <div className=" flex justify-center items-center gap-14">
                  <div className="flex justify-center items-center gap-2 ">
                    <div className="">
                      <Image
                        src={x.image}
                        alt="career"
                        width={30}
                        height={30}
                      />
                    </div>

                    <span className="text-xl font-space-gori font-normal text-nile-blue">
                      {x.count}
                    </span>
                    <p className="text-xl font-space-gori font-normal text-nile-blue">
                      {x.name}
                    </p>
                  </div>
                  <div className="flex justify-center items-center rounded-lg bg-off-green">
                    <p className="text-base font-semibold text-caribbean-green px-4 py-[10px]">
                      {x.percent}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-base font-space-gori font-semibold text-blue-grey">
                    {x.minute}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="relative">
          <div className="absolute -left-20 top-7 w-[32px] h-[32px] stars-shadow border border-light-violet rounded-full"></div>
          <div className="">
            <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey py-6">
              <div className=" flex justify-center items-center gap-14">
                <div className="flex justify-center items-center gap-2 ">
                  <div className="">
                    <Image
                      src="/career/careerLamp.svg"
                      alt="career"
                      width={30}
                      height={30}
                    />
                  </div>

                  <p className="text-xl font-space-gori font-normal text-nile-blue">
                    Quiz
                  </p>
                </div>
                <div className="flex justify-center items-center rounded-lg bg-off-green"></div>
              </div>
              <div>
                <span className="text-base font-space-gori font-semibold text-blue-grey">
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
            <div className="absolute -left-20 top-0 w-[32px] h-[32px] stars-shadow border border-light-violet rounded-full"></div>
            <div className="">
              <div className="flex justify-center items-center gap-2">
                <div className="">
                  <Image
                    src="/career/careerLamp.svg"
                    alt="career"
                    width={30}
                    height={30}
                  />
                </div>

                <p className="text-xl font-space-gori font-normal text-nile-blue">
                  Quiz
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-base font-space-gori font-semibold text-[#697585]">
              10 Questions
            </span>
          </div>
        </div>
        <div className="pt-4">
          <CareerInnovate />
        </div>
        {CAREER_PART.map((x, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-20 top-7 w-[32px] h-[32px] stars-shadow border border-light-violet rounded-full"></div>
            <div className="">
              <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey py-6">
                <div className=" flex justify-center items-center gap-14">
                  <div className="flex justify-center items-center gap-2 ">
                    <div className="">
                      <Image
                        src={x.image}
                        alt="career"
                        width={30}
                        height={30}
                      />
                    </div>

                    <span className="text-xl font-space-gori font-normal text-nile-blue">
                      {x.count}
                    </span>
                    <p className="text-xl font-space-gori font-normal text-nile-blue">
                      {x.name}
                    </p>
                  </div>
                  <div className="flex justify-center items-center rounded-lg bg-off-green">
                    <p className="text-base font-semibold text-caribbean-green px-4 py-[10px]">
                      {x.percent}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-base font-space-gori font-semibold text-blue-grey">
                    {x.minute}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="relative">
          <div className="absolute -left-20 top-[30px] w-[32px] h-[32px] stars-shadow border border-light-violet rounded-full flex justify-center items-center">
            <div className="w-3 h-3 rounded-full bg-purple-heart"></div>
          </div>
          <div className="">
            <p className="text-[28px] font-space-gori font-normal text-purple-heart pt-8">
              Congratulation! You Have Completed Path
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start ">
        <p className="text-xl font-space-gori text-silver-chalice pt-4 pl-16">
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
    image: "/career/play.svg",
    count: "1.",
    name: "Introduction of Doctor Career",
    percent: " 10% Completed",
    minute: "10 minutes",
  },
  {
    id: 2,
    image: "/career/play.svg",
    count: "2.",
    name: "Introduction of Doctor Career",
    percent: " 20% Completed",
    minute: "10 minutes",
  },
  {
    id: 3,
    image: "/career/play.svg",
    count: "3.",
    name: "Introduction of Doctor Career",
    percent: " 30% Completed",
    minute: "10 minutes",
  },
  {
    id: 4,
    image: "/career/play.svg",
    count: "4.",
    name: "Introduction of Doctor Career",
    percent: " 40% Completed",
    minute: "10 minutes",
  },

  {
    id: 5,
    image: "/career/play.svg",
    count: "5.",
    name: "Introduction of Doctor Career",
    percent: " 50% Completed",
    minute: "10 minutes",
  },
];

const CAREER_PART = [
  {
    id: 1,
    image: "/career/play.svg",
    count: "6.",
    name: "Introduction of Doctor Career",
    percent: " 10% Completed",
    minute: "10 minutes",
  },
  {
    id: 2,
    image: "/career/play.svg",
    count: "6.",
    name: "Introduction of Doctor Career",
    percent: " 10% Completed",
    minute: "10 minutes",
  },
  {
    id: 3,
    image: "/career/play.svg",
    count: "6.",
    name: "Introduction of Doctor Career",
    percent: " 10% Completed",
    minute: "10 minutes",
  },
];
