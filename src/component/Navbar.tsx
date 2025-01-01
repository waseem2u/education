"use client";

import { useEffect, useState } from "react";
import CustomButton from "../component/CustomButton";
import { HamburgerIcon, CrossIcon } from "../svg";
import Link from "next/link";

const NextNavbar = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isBarOpen ? "hide" : "auto";
  }, [isBarOpen]);

  return (
    <div>
      <div className="hidden lg:block">
        <div className="w-full bg-[#260673] flex justify-between items-center px-40 py-6">
          <div className="w-[169px] h-[44px] ">
            <img
              src="/logo/moji/logo-white.svg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className=" flex justify-center items-center gap-12">
            {NAV_CONTENT.map((x, index) => (
              <p
                key={index}
                className="relative text-white text-xl font-normal leading-[120%] after:absolute after:w-3/5 after:left-3 after:block after:h-1 hover:after:bg-white after:-bottom-1 after:rounded-full after:text-center"
              >
                {x.heading}
              </p>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-1">
              {/* <p className="text-lg font-space-gori font-normal text-white">En</p> */}
              <div>
                <select className="text-lg font-space-gori font-normal text-white border-none bg-[#260673]">
                  <option className="text-lg font-space-gori font-normal text-white ">
                    En
                  </option>
                  <option className="text-lg font-space-gori font-normal text-white">
                    Te
                  </option>
                </select>
              </div>
            </div>
            <CustomButton name="Signin" />
            <CustomButton name="Signup" className="!text-[#260673] bg-white " />
            <div></div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="w-full bg-[#260673] flex justify-between items-center px-2 py-3">
          <div className="w-[169px] h-[44px] ">
            <img
              src="/logo/moji/logo-white.svg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div>
            {isBarOpen ? (
              <HamburgerIcon onClick={() => setIsBarOpen(false)} />
            ) : (
              <CrossIcon onClick={() => setIsBarOpen(true)} />
            )}
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 h-full z-[99] w-full bg-[#e7e7e7] shadow-lg transform transition-transform duration-500 ease-in-out ${
            isBarOpen ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div>
            <div className="w-full bg-[#260673] flex justify-between items-center px-2 py-3">
              <div className="w-[169px] h-[44px] ">
                <img
                  src="/logo/moji/logo-white.svg"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
              <div className="w-14 flex justify-end hover:cursor-pointer">
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

export default NextNavbar;

const NAV_CONTENT = [
  {
    id: 1,
    heading: "About Us",
  },
  {
    id: 2,
    heading: "Resources",
  },
  {
    id: 3,
    heading: "Contact",
  },
];
