"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  HamburgerIcon,
  CrossIcon,
  CareerStar,
  CareerBox,
  CareerMassage,
  CareerAlaram,
} from "../svg";

const CareerNavbar = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isBarOpen ? "hide" : "auto";
  }, [isBarOpen]);

  return (
    <div>
      <div className="hidden lg:block">
        <div className="w-full bg-purple-heart flex justify-between items-center px-40 py-6">
          <div className=" ">
            <Image
              src="/logo/moji/logo-white.svg"
              alt="logo"
              width={169}
              height={44}
            />
          </div>
          <div className=" flex justify-center items-center gap-12">
            {NAV_CONTENT.map((x, index) => (
              <p
                key={index}
                className="relative text-white text-xl font-normal leading-[120%] after:absolute after:w-3/5 after:left-3 after:block after:h-1 hover:after:bg-white after:-bottom-4 after:rounded-full after:text-center"
              >
                {x.heading}
              </p>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-2">
              <div className=" flex justify-center items-center gap-2">
                <CareerStar />

                <span className="text-white text-lg font-space-gori font-normal">
                  English
                </span>
              </div>
              <div>
                <select className="text-lg font-space-gori font-normal text-white border-none bg-purple-heart">
                  <option className="text-lg font-space-gori font-normal text-white ">
                    En
                  </option>
                  <option className="text-lg font-space-gori font-normal text-white">
                    Te
                  </option>
                </select>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-[18px]">
                <div className="relative">
                  <CareerBox />
                  <div className="w-3 h-3 rounded-full bg-orange-700 flex justify-center items-center absolute bottom-[67%] right-[-10%]">
                    <span className="text-[10px] text-white font-space-gori font-normal">
                      2
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <CareerMassage />
                  <div className="w-3 h-3 rounded-full bg-orange-700 flex justify-center items-center absolute bottom-[67%] right-[-10%]">
                    <span className="text-[10px] text-white font-space-gori font-normal">
                      2
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <CareerAlaram />
                  <div className="w-3 h-3 rounded-full bg-orange-700 flex justify-center items-center absolute bottom-[67%] right-[-10%]">
                    <span className="text-[10px] text-white font-space-gori font-normal">
                      2
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/careerIcon/careerIcon.svg"
                  alt="career"
                  width={56}
                  height={56}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="w-full bg-purple-heart flex justify-between items-center px-2 py-3">
          <div className="w-[96px] h-[44px] ">
            <img
              src="/logo/moji/logo-white.svg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-2">
              <div className=" flex justify-center items-center gap-2">
                <CareerStar />

                <span className="text-white text-sm font-space-gori font-normal">
                  English
                </span>
              </div>
              <div>
                <select className=" font-space-gori font-normal text-white border-none bg-purple-heart">
                  <option className="text-sm font-space-gori font-normal text-white ">
                    En
                  </option>
                  <option className="text-sm font-space-gori font-normal text-white">
                    Te
                  </option>
                </select>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-[18px]">
                <div className="relative">
                  <CareerBox />
                  <div className="w-3 h-3 rounded-full bg-orange-700 flex justify-center items-center absolute bottom-[67%] right-[-10%]">
                    <span className="text-[10px] text-white font-space-gori font-normal">
                      2
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <CareerMassage />
                  <div className="w-3 h-3 rounded-full bg-orange-700 flex justify-center items-center absolute bottom-[67%] right-[-10%]">
                    <span className="text-[10px] text-white font-space-gori font-normal">
                      2
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <CareerAlaram />
                  <div className="w-3 h-3 rounded-full bg-orange-700 flex justify-center items-center absolute bottom-[67%] right-[-10%]">
                    <span className="text-[10px] text-white font-space-gori font-normal">
                      2
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/careerIcon/careerIcon.svg"
                  alt="career"
                  width={56}
                  height={56}
                />
              </div>
            </div>
          </div>
          <div>
            {isBarOpen ? (
              <CrossIcon onClick={() => setIsBarOpen(false)} />
            ) : (
              <HamburgerIcon onClick={() => setIsBarOpen(true)} />
            )}
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 h-full z-[99] w-full bg-[#e7e7e7] shadow-lg transform transition-transform duration-500 ease-in-out ${
            isBarOpen ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div>
            <div className="w-full bg-purple-heart flex justify-between items-center py-3 px-2">
              <div className="w-[96px] h-[44px] ">
                <img
                  src="/logo/moji/logo-white.svg"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>

              <div className="flex justify-end hover:cursor-pointer">
                {isBarOpen ? (
                  <CrossIcon onClick={() => setIsBarOpen(false)} />
                ) : (
                  <HamburgerIcon onClick={() => setIsBarOpen(true)} />
                )}
              </div>
            </div>
          </div>
          <div className="pt-20 px-6">
            <div className="flex flex-col gap-8">
              {NAV_CONTENT.map((item, index) => (
                <p
                  key={index}
                  className="text-black text-sm uppercase font-medium hover:text-gray-600 transition"
                  onClick={() => setIsBarOpen(false)}
                >
                  {item.heading}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerNavbar;

const NAV_CONTENT = [
  {
    id: 1,
    heading: "Deshboard",
  },
  {
    id: 2,
    heading: "Lerning Hub",
  },
  {
    id: 3,
    heading: "Community",
  },
  {
    id: 4,
    heading: "Online Store",
  },
];
