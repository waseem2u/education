"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FooterTypes } from "@/types";
import { FacebookIcon, InstragramIcon } from "@/svg";

const CareerFooter: React.FC<FooterTypes> = ({
  id,
  title,
  detail,
  icon,
  image,
}) => {
  const [input, setInput] = useState("");
  return (
    <div className="mt-[100px]">
      <div className="w-full bg-voilet lg:px-[160px] ">
        <div className="px-2">
          <div className="flex justify-center items-center flex-col lg:flex-row gap-12 lg:gap-[103px] lg:pt-[80px]">
            <div className=" flex justify-center items-start flex-col gap-1 lg:gap-[9px]">
              <Image
                src="/footer/logo.png"
                alt="logo"
                width={183}
                height={44}
              />
              <p className="w-full lg:max-w-[259px] text-lg lg:text-xl font-space-gori font-normal text-natural-grey text-start">
                Learning is a life-long journey that in fact we never terminate
                stop
              </p>
            </div>
            <div className="flex justify-center items-start gap-7 lg:gap-14">
              <div className="flex justify-center items-start flex-col gap-[9px]">
                <h6 className="text-xl lg:text-2xl font-space-gori font-normal text-Gravel">
                  Company
                </h6>
                {COMPANY.map((item, index) => (
                  <span
                    key={index}
                    className="text-lg font-space-gori font-normal text-natural-grey"
                  >
                    {item.discription}
                  </span>
                ))}
              </div>
              <div className="flex justify-center items-start flex-col gap-[9px]">
                <h6 className="text-2xl font-space-gori font-normal text-Gravel">
                  Visit
                </h6>
                {VISIT.map((item, index) => (
                  <span
                    key={index}
                    className="text-lg font-space-gori font-normal text-natural-grey"
                  >
                    {item.discription}
                  </span>
                ))}
              </div>
              <div className="flex justify-center items-start flex-col gap-[9px]">
                <h6 className="text-2xl font-space-gori font-normal text-Gravel">
                  Help
                </h6>
                {HELP.map((item, index) => (
                  <span
                    key={index}
                    className="text-lg font-space-gori font-normal text-natural-grey"
                  >
                    {item.discription}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-start flex-col gap-[9px]">
              <h6 className="text-2xl font-space-gori font-normal text-Gravel">
                Subscribe
              </h6>
              <div className="bg-white flex justify-center items-center border rounded bg-star-shadow">
                <input
                  type="email"
                  name="price"
                  id="price"
                  className="py-[10px] pl-3 pr-[41px] text-rose-white placeholder:text-Nobel placeholder:text-sm text-sm"
                  placeholder="Enter your email"
                />
                <button className=" font-space-gori font-normal text-xl text-vista-white bg-purple-heart px-3 py-[10px]">
                  Subscribe
                </button>
              </div>
              <span className="text-lg font-space-gori font-normal text-natural-grey">
                {" "}
                For Newsletter
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-20 pb-6">
          <div className="w-full max-w-[1120px] h-[0.75px] bg-languid-lavender "></div>
        </div>
        <div className="flex justify-center items-center flex-col gap-6">
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-12 flex justify-center items-center border rounded bg-purple-heart">
              <FacebookIcon />
            </div>
            <div className="w-12 h-12 flex justify-center items-center border rounded bg-white">
              <InstragramIcon />
            </div>
          </div>
          <p className="text-base font-space-gori font-normal text-bright-grey">
            MOJIGURUKUL 2024 - ALL rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerFooter;

const COMPANY = [
  {
    id: 1,
    discription: "About Us",
  },
  {
    id: 2,
    discription: "Privacy Policy",
  },
  {
    id: 3,
    discription: "Terms  & Condition",
  },
];

const VISIT = [
  {
    id: 1,
    discription: "Student",
  },
  {
    id: 2,
    discription: "Parent",
  },
  {
    id: 3,
    discription: "Tutors",
  },
];
const HELP = [
  {
    id: 1,
    discription: "Contact us",
  },
  {
    id: 2,
    discription: "Resources",
  },
  {
    id: 3,
    discription: "FAQs",
  },
];
