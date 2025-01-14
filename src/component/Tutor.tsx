import React from "react";
import TutorCustomCard from "./TutorCustomCard";
import { TUTOR_EXPERT } from "@/utils/static";
import TutorStarCard from "./TutorStarCard";

const Tutor = () => {
  return (
    <div className="mt-12 lg:mt-24 px-2 lg:px-[200px]">
      <div className="flex justify-center items-center flex-col lg:flex-row gap-[20px] lg:gap-[194px]">
        <h5 className="hidden md:block w-full max-w-[247px] text-5.6xl leading-[56px] font-space-gori font-normal text-indigo ">
          Our Expert Tutor
        </h5>
        <h5 className="block md:hidden w-full text-3xl font-space-gori font-normal text-indigo text-start">
          Our Expert Tutor
        </h5>
        <div className="flex justify-center items-center flex-col md:flex-row gap-8">
          <p className="text-lg md:text-2xl font-space-gori font-normal text-natural-grey text-start ">
            We match expert tutors in the subject with the students to ensure
            that every student gets the best possible tutoring with Mojigurukul.
          </p>
          <button className="w-full max-w-[185px] text-lg md:text-2xl font-normal font-space-gori text-center py-[14px] px-7 border bg-indigo rounded-2xl cursor-pointer text-white">
            Explore Tutor
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row gap-6 md:gap-[145px] pt-[60px]">
        <div className="w-full max-w-[318px] flex justify-center items-center flex-col gap-[14px]">
          <div className="w-full h-[387px] shrink-0 rounded-2xl bg-pattens-blue rotate-[-1.909deg] relative">
            <div className="w-full max-w-[392px] h-[392px] border rounded-2xl rotate-[1.909deg] bottom-[1.5%] left-[7%] absolute">
              <img
                src="/Tutor/mathTeacher.png"
                alt="math"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-[37%] right-[-2%] lg:top-[24%] lg:right-[-33%]">
                <TutorStarCard />
              </div>
            </div>
            {/* <div className="absolute flex justify-center items-center flex-col gap-1">
            <h6 className="text-2xl font-space-gori font-normal text-black">
            Rohit Sharma
            </h6>
            <span className="text-xl font-space-gori font-medium text-natural-grey">
            Math Teacher
            </span>
            </div> */}
          </div>
          <div className="flex justify-center items-center flex-col gap-1">
            <h6 className="text-2xl font-space-gori font-normal text-black">
              Rohit Sharma
            </h6>
            <span className="text-xl font-space-gori font-medium text-natural-grey">
              Math Teacher
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
          {TUTOR_EXPERT.map((item, index) => (
            <TutorCustomCard
              key={item.id}
              id={item.id}
              name={item.name}
              feild={item.feild}
              review={item.review}
              image={item.image}
              totalStudent={item.totalStudent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutor;
