"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
// import CareerCard from "./CareerCard";
import CareerInnovate from "./CareerInnovate";
import {
  CareerPlay,
  CareerStroke,
  TotalPoint,
  TotalDuration,
  CareerBulb,
} from "@/svg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="">
      <div className="">
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              border: 1,
              borderColor: "divider",
              backgroundColor: "#F1ECF8",
              borderRadius: "14px",
              padding: "15px",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: { display: "none" },
              }}
              sx={{
                "& .MuiTabs-flexContainer": {
                  gap: "1rem", // Add gap between tabs
                },
                // Responsive styles
                "@media (max-width: 600px)": {
                  fontSize: "12px", // Font size for mobile
                  "& .MuiTabs-flexContainer": {
                    gap: "8px", // Add gap between tabs
                  },
                },
              }}
            >
              <Tab
                label="Content"
                {...a11yProps(0)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  fontSize: "20px",
                  textDecoration: "none",

                  // border: "1px solid #753CBD !important",
                  color: "#2A254D",
                  "&.Mui-selected": {
                    color: "white",
                    backgroundColor: "#753CBD",
                    fontFamily: "inherit",
                  },
                  // Responsive styles
                  "@media (max-width: 600px)": {
                    fontSize: "14px", // Font size for mobile
                  },
                }}
              />

              <Tab
                label="Instructor"
                {...a11yProps(1)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  fontSize: "20px",
                  border: "1px solid #fff !important",
                  color: "#2A254D",
                  "&.Mui-selected": {
                    color: "white",
                    backgroundColor: "#753CBD",
                    fontFamily: "inherit",
                  },
                  // Responsive styles
                  "@media (max-width: 600px)": {
                    fontSize: "14px", // Font size for mobile
                  },
                }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {/* Dextop  */}
            <div className="vertical-bar pl-4 lg:pl-16 top-4">
              {CAREER_D0CTOR.map((x, index) => (
                <div key={index} className="relative hidden md:block">
                  <div
                    className={`absolute -left-6 lg:-left-20 top-8 lg:top-1 w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full ${
                      index === 0 ? "mt-0 mb-6" : "my-6"
                    }`}
                  ></div>
                  <div className="">
                    <div
                      className={` w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey relative ${
                        index === 0 ? "pt-0 pb-6" : "py-6"
                      }`}
                    >
                      <div className=" flex justify-center items-center gap-2 lg:gap-14">
                        <div className="flex justify-center items-center gap-2 ">
                          {index === 5 ? (
                            <div className="flex justify-center items-center w-6 h-6 lg:w-[30px] lg:h-[30px]">
                              <Image
                                src={x.image}
                                alt="Image description"
                                width={30}
                                height={30}
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-6 h-6 lg:w-[30px] lg:h-[30px] border border-purple-heart rounded-full flex justify-center items-center">
                              {x.image}
                            </div>
                          )}

                          <span className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                            {x.count}
                          </span>
                          <p className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                            {x.name}
                          </p>
                        </div>
                        <div className="flex justify-center items-center rounded-lg bg-off-green">
                          {index === 5 ? (
                            <p className="hidden text-xs lg:text-base font-semibold text-caribbean-green px-1 py-2 lg:px-4 lg:py-[10px] text-center">
                              {x.percent}
                            </p>
                          ) : (
                            <p className="text-xs lg:text-base font-semibold text-caribbean-green px-1 py-2 lg:px-4 lg:py-[10px] text-center">
                              {x.percent}
                            </p>
                          )}
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

              {/* mobile screen  */}

              {CAREER_D0CTOR.map((x, index) => (
                <div key={index} className="relative block md:hidden">
                  <div className="absolute -left-6 top-[4px] lg:-left-20  lg:top-[1px] w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full"></div>
                  <div className="">
                    <div
                      className={`w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey  ${
                        index === 0 ? "pt-0 pb-[6px]" : "py-[6px]"
                      }`}
                    >
                      <div className=" flex justify-center items-end flex-col gap-2">
                        <div className="flex justify-center items-center gap-[2px] ">
                          <div className="flex justify-center items-center gap-1">
                            {index === 5 ? (
                              <div className="flex justify-center items-center w-6 h-6 lg:w-[30px] lg:h-[30px]">
                                <Image
                                  src={x.image}
                                  alt="Image description"
                                  width={16}
                                  height={16}
                                  className="object-contain"
                                />
                              </div>
                            ) : (
                              <div className="w-6 h-6 lg:w-[30px] lg:h-[30px] border border-purple-heart rounded-full flex justify-center items-center">
                                {x.image}
                              </div>
                            )}

                            <span className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                              {x.id}
                            </span>
                          </div>
                          <p className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                            {x.name}
                          </p>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <div className="flex justify-center items-center rounded-lg bg-off-green">
                            {index === 5 ? (
                              <p className="hidden text-base lg:text-base font-semibold text-caribbean-green px-2 py-1 text-center lg:px-4 lg:py-[10px]">
                                {x.percent}
                              </p>
                            ) : (
                              <p className=" text-base lg:text-base font-semibold text-caribbean-green px-2 py-2 text-center lg:px-4 lg:py-[10px]">
                                {x.percent}
                              </p>
                            )}
                          </div>
                          <div>
                            <span className="text-base lg:text-base font-space-gori font-semibold text-blue-grey">
                              {x.minute}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}></CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}

export const CAREER_D0CTOR = [
  {
    id: 1,
    image: <CareerPlay />,
    count: "1.",
    name: "Introduction of Doctor Career",
    percent: " 10% completed",
    minute: "10 minutes",
  },
  {
    id: 2,
    image: <CareerPlay />,
    count: "2.",
    name: "Introduction of Doctor Career",
    percent: " 20% completed",
    minute: "10 minutes",
  },
  {
    id: 3,
    image: <CareerPlay />,
    count: "3.",
    name: "Introduction of Doctor Career",
    percent: " 30% completed ",
    minute: "10 minutes",
  },
  {
    id: 4,
    image: <CareerPlay />,
    count: "4.",
    name: "Introduction of Doctor Career",
    percent: " 40% completed",
    minute: "10 minutes",
  },
  {
    id: 5,
    image: <CareerPlay />,
    count: "5.",
    name: "Introduction of Doctor Career",
    percent: " 50% completed",
    minute: "10 minutes",
  },
  {
    id: 6,
    image: "/career/careerLamp.svg",

    name: "Quiz",
    minute: "10 minutes",
  },
];
