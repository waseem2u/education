import React from "react";
import CustomButton from "./CustomButton";
import CardWrap from "./CardWrap";
import CustomCard from "./CustomCard";
import CardLeader from "./CardLeader";
import CardService from "./CardService";
import CardFace from "./CardFace";

const CopyHeader = () => {
  return (
    <div className="md:mx-12 pt-8">
      <div className="w-full bg-header-bg bg-no-repeat bg-cover pt-4">
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row gap-8 md:gap-[112px] mt-7">
          <div className="pt-7 pb-4 md:pb-0 md:pt-0 px-2 md:px-0">
            <div className=" w-full max-w-[331px] md:max-w-[392px] bg-[#E9FAF5] py-1 md:px-3 md:py-[10px] flex justify-center items-center rounded-[20px] gap-1 md:gap-3">
              <div>
                <img
                  src="/icon/Vector.svg"
                  alt="moji"
                  className="w-2 h-2 md:w-3 md:h-3"
                />
              </div>

              <p className="border-2 rounded-[20px] bg-[#1fba8d] text-white py-[2px] px-3 md:px-6 font-space-gori font-normal text-lg md:text-sm">
                Hot!
              </p>
              <p className="font-normal font-space-gori text-xl md:text-lg text-[#3d3842]">
                Stay connected and get 40% off
              </p>
            </div>
            <div className="">
              <div className="relative flex justify-start md:justify-center items-center">
                <div className="w-full max-w-[288px] md:max-w-[457px] text-[40px] md:text-[64px] font-space-gori font-semibold text-[#3d3842]">
                  Discover{" "}
                  <div className="text-[#753cbd] inline-block">
                    The Joy{" "}
                    <div className="w-5 h-10 md:w-11 md:h-20 absolute right-[31%] top-[-5%] min-[480px]:right-[39%] md:top-[-9%] md:right-[2%]">
                      <img
                        src="/icon/Group.svg"
                        alt="group"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>{" "}
                  of Learning
                </div>
               
              </div>

              <p className="w-full max-w-[457px] font-space-gori font-normal text-lg md:text-2xl leading-9 text-[#928f95] py-6">
                15 mins a day to academic excellence for grades 6th to 10th.
                Learning made fun, engaging & interactive.
              </p>
              <div className="w-full flex justify-start items-center flex-col md:flex-row gap-8">
                <div className="w-full md:w-auto">
                  <CustomButton
                    name="Try It Now!"
                    className="w-full md:w-auto"
                  />
                </div>
                <div className="flex justify-center items-center gap-3">
                  {/* <div className="relative w-14 h-14 rounded-full  flex justify-center items-end"> */}
                  <div className="relative flex justify-center items-center play-icon">
                    <img
                      src="/header/Polygon.svg"
                      alt="play"
                      className="transfor-play-icon"
                    />
                  </div>
                  {/* </div> */}
                  <p className="font-normal text-lg md:text-xl font-space-gori text-[#3d3842]">
                    How It Works
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center min-[360px]:gap-0 gap-4 md:gap-8">
            <div className="flex justify-center items-center flex-col gap-4 md:gap-8">
              <div className="flex justify-between items-center gap-3 md:gap-6">
                <CardFace />
                <div className="flex justify-center items-center flex-col md:gap-2">
                  <p className="text-sm md:text-xs font-semibold font-space-gori text-[#323232]">
                    Our Happy Parents
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/elivator1/star.svg"
                      alt="star"
                      className="w-[14px] h-[14px] md:w-[14px] md:h-[14px]"
                    />
                    <p className="text-sm md:text-xs font-space-gori font-semibold text-[#969696]">
                      4.8 (1.380 Review)
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center items-center flex-row">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-[#1fba8d] rounded-full absolute top-[8%] md:left-[12%] left-[9%]"></div>
                <CardWrap />
                <div className="absolute bottom-[-10%] left-[-46%] md:left-[-30%] md:bottom-[-6%]">
                  <CardLeader />
                </div>
              </div>
            </div>
            <div className="relative ">
              <CustomCard />
              <div className="absolute right-[-30%] bottom-[-9%] md:bottom-[-2%] md:right-[-15%]">
                <CardService />
              </div>

              <div className="w-[142px] h-[76px] md:w-[222px] md:h-[106px] lg:w-[193px] lg:h-[93px] absolute right-[56%] bottom-[-45%] md:bottom-[-26%] ">
                <img
                  src="/icon/Arrow vector.svg"
                  alt="arrow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyHeader;
