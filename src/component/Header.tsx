import React from "react";
import CustomButton from "./CustomButton";
import CardWrap from "./CardWrap";
import CustomCard from "./CustomCard";
import CardLeader from "./CardLeader";
import CardService from "./CardService";

const Header = () => {
  return (
    <div className=" md:mx-12 pt-8">
      <div className="w-full bg-header-bg bg-no-repeat bg-cover pt-4">
        <div className="flex justify-center items-center flex-col-reverse md:flex-row gap-28 md:pt-14 px-[22px] md:px-[88px]">
          <div className="">
            <div className=" w-full max-w-[392px] bg-[#E9FAF5] px-1 py-1 md:px-3 md:py-[10px] flex justify-center items-center rounded-[20px] gap-1 md:gap-3">
              <div>
                <img src="/icon/Vector.svg" alt="moji" className="w-3 h-3" />
              </div>

              <p className="border-2 rounded-[20px] bg-[#1fba8d] text-white py-[2px] px-3 md:px-6 font-space-gori font-normal text-xs md:text-sm">
                Hot!
              </p>
              <p className="font-normal font-space-gori text-xs md:text-lg text-[#3d3842]">
                Stay connected and get 40% off
              </p>
            </div>

            <p className="w-full max-w-[457px] text-[49px] lg:text-[64px] font-space-gori font-semibold text-[#3d3842]">
              Discover The <span className="text-[#753cbd]">Joy of </span>{" "}
              Learning
            </p>
            <p className="w-full max-w-[457px] font-space-gori font-normal text-sm md:text-2xl leading-9 text-[#928f95] py-6">
              15 mins a day to academic excellence for grades 6th to 10th.
              Learning made fun, engaging & interactive.
            </p>
            <div className="flex justify-start items-center gap-8">
              <div>
                <CustomButton name="Try It Now!" />
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#eb4e59] flex justify-center items-end">
                  <img src="/header/Polygon.svg" alt="play" className="" />
                </div>
                <p className="font-normal text-xl font-space-gori text-[#3d3842]">
                  How It Works
                </p>
              </div>
            </div>
            <div className="w-7 h-14 md:w-11 md:h-20 absolute top-[52%] right-[12%] md:top-[36%] md:left-[597px]">
              <img
                src="/icon/Group.svg"
                alt="group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center items-center  gap-12">
            <div className="flex justify-center items-center gap-6 flex-col">
              <div className="flex justify-center items-center gap-4 md:gap-6">
                <div className="flex justify-center items-center flex-col gap-8">
                  <div className="flex justify-center items-center relative">
                    <div className="w-6 h-6 md:w-12 md:h-12 rounded-full">
                      <img
                        src="/elivator1/Avater3.svg"
                        alt="avator"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-6 h-6 md:w-12 md:h-12 rounded-full absolute right-2 md:right-4">
                      <img
                        src="/elivator1/Avater2.svg"
                        alt="avator"
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-6 h-6 md:w-12 md:h-12 rounded-full relative left-2 md:left-4">
                      <img
                        src="/elivator1/Avater1.svg"
                        alt="avator"
                        className=" w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col gap-[2px] md:gap-2">
                  <p className="text-[10px] md:text-xs font-semibold font-space-gori text-[#323232]">
                    Our Happy Parents
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/elivator1/star.svg"
                      alt="star"
                      className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]"
                    />
                    <p className="text-[10px] md:text-xs font-space-gori font-semibold text-[#969696]">
                      4.8 (1.380 Review)
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#1FBA8D] absolute top-[19%] right-[75%] md:top-[46%] md:right-[48%]"></div>
              <div className="">
                <CardWrap />
                <CardLeader />
              </div>
            </div>
            <div>
              <CustomCard />
              <CardService />
            </div>
          </div>
        </div>
        <div className="hidden md:block flex justify-end items-end absolute right-[20%] ">
          <div className="w-[256px] md:w-[320px] h-[150px]">
            <img
              src="/icon/Arrow vector.svg"
              alt="arrow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="block md:hidden flex justify-end items-end absolute top-[35%] right-[20%] ">
          <div className="w-[256px] md:w-[320px] h-[150px]">
            <img
              src="/icon/Arrow vector.svg"
              alt="arrow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
