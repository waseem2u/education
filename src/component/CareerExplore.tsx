import React from "react";
import Image from "next/image";
import { CareerStroke, TotalPoint, TotalDuration } from "@/svg";

const CareerExplore = () => {
  return (
    <div className="lg:px-40 pt-[138px]">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[1192px] h-[474px] flex justify-center items-center">
          <div className="max-w-[443px] h-full bg-purple-heart rounded-l-lg relative">
            <Image
              src="/careerImage/wave.png"
              alt="wave"
              width={443}
              height={309}
              className="absolute right-0 top-0"
            />
            <div className="px-2 py-2 lg:px-[74px] lg:py-[76px] flex justify-center items-start flex-col gap-9">
              <div>
                <h5 className="text-white font-space-gori font-normal text-[32px]">
                  Explore Your Career Path
                </h5>
                <p className="text-base text-light-grey">
                  Nunc sed id semper risus in hendrerit gravida rutrum. Auctor
                  augue mauris augue neque gravida in fermentum et. Et ligula
                  ullamcorper{" "}
                </p>
              </div>
              <div className="flex justify-start items-start flex-col gap-[14px]">
                {CAREER_EXPLORE.map((x, index) => (
                  <div className="flex justify-start items-start gap-4">
                    {x.icon}
                    <p className="text-white font-space-gori font-normal">
                      {x.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-natural-grey rounded-r-lg h-full">
            <video className=" h-full" controls>
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerExplore;

const CAREER_EXPLORE = [
  {
    id: 1,
    icon: <CareerStroke />,
    detail: " Career Level",
  },
  {
    id: 2,
    icon: <TotalPoint />,
    detail: "Total Point : 80",
  },
  {
    id: 3,
    icon: <TotalDuration />,
    detail: "Duration : 8 segment Total 80 Minutes",
  },
];
