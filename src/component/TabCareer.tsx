"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { CAREER_D0CTOR, CAREER_EXPLORE } from "@/utils/static";
import { CareerPlay, CareerBulb } from "@/svg";
import CareerCustomButton from "./CareerCustomButton";
import classNames from "classnames";
import Image from "next/image";
// import CareerCustomTab from "./CareerCustomTab";

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
  const [activeQuestionIndex, setActiveQuestionIndex] = React.useState(0);
  const [activeQnaIndex, setActiveQnaIndex] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className=" flex justify-center items-center">

    <div className="px-6 md:px-12  pt-12 lg:pt-[138px]">
      <div className="flex justify-start items-center pb-16">
        <div className="w-full max-w-[1192px] h-full  sm:h-[474px] flex justify-center items-center flex-col sm:flex-row ">
          <div className="max-w-[546px] sm:max-w-[443px] w-full h-full bg-purple-heart rounded-t-lg sm:rounded-l-lg sm:rounded-bl-lg sm:rounded-tr-none  relative">
            <Image
              src="/careerImage/wave.png"
              alt="wave"
              width={443}
              height={309}
              className="absolute right-0 top-0"
            />
            <div className="px-4 py-8 lg:px-[74px] lg:py-[76px] flex justify-center items-start flex-col gap-9">
              <div>
                <h5 className="text-white font-space-gori font-normal text-2xl lg:text-[32px] ">
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
          <div className="bg-natural-grey rounded-bl-lg rounded-br-lg sm:rounded-br-lg sm:rounded-tr-lg sm:rounded-bl-none h-[30vh] object-cover sm:h-full overflow-hidden">
            <video className=" h-full object-cover" controls>
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1192px] flex justify-center items-center">
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
                "& .MuiTab-root": {
                  fontFamily: "inherit", // Inherit font family from parent
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
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  },
                }}
              />
              <Tab
                label="Description"
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
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  },
                }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="vertical-bar pl-4 lg:pl-16 mt-16">
              {CAREER_D0CTOR.map((career, index) => (
                <div key={index} className="relative">
                  <div
                    className={classNames`absolute -left-6 lg:-left-20 top-7 lg:top-1 w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full ${
                      index === 0
                        ? "md:top-0 mt-[-29px] md:mt-[3px] lg:mt-0  mb-6"
                        : "md:mt-2 md:mb-0 lg:my-6"
                    }`}
                  />
                  <div className="">
                    <div
                      className={classNames` w-full max-w-[1132px] flex justify-start items-start flex-col sm:justify-between sm:items-center sm:flex-row border-b border-natural-grey relative ${
                        index === 0 ? "pt-0 pb-6" : "py-6"
                      }`}
                    >
                      <div className=" flex justify-center items-center gap-2 lg:gap-14">
                        <div className="flex justify-center items-center gap-2 ">
                          <div className="pl-2 md:pl-0 flex justify-center items-start md:items-center gap-4">
                            <div className="flex justify-start items-center gap-6">
                              <div
                                className={classNames`w-6 h-6 lg:w-[30px] lg:h-[30px] border border-purple-heart rounded-full flex justify-center items-center ${
                                  career.title === "Quiz"
                                    ? "border-none"
                                    : "block"
                                }`}
                              >
                                {career.title === "Quiz" ? (
                                  <CareerBulb />
                                ) : (
                                  <CareerPlay />
                                )}
                              </div>
                            </div>
                            <div className="w-full max-w-[300px] sm:max-w-max flex justify-center items-center flex-col sm:flex-row">
                              <span className="sm:min-w-[300px] text-base lg:text-xl font-space-gori font-normal text-nile-blue">
                                {career.title}
                              </span>
                              <div className="flex justify-center items-center gap-9">
                                {career.percent && (
                                  <p className="text-sm sm:text-base lg:text-xl font-space-gori font-normal border rounded sm:rounded-lg px-2 py-0 sm:py-1 md:px-4 md:py-2 text-[#22CC9B] bg-[#E9FAF5]">
                                    {career.percent} Completed
                                  </p>
                                )}
                                <div className=" sm:hidden">
                                  <span className="text-xs lg:text-base font-space-gori font-semibold text-blue-grey">
                                    {career.minute} Minutes
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <span className="text-xs lg:text-base font-space-gori font-semibold text-blue-grey">
                          {career.minute} Minutes
                        </span>
                      </div>
                    </div>
                    {career.questions?.length && (
                      <div>
                        {career.questions.find(
                          (question) => question.option?.length
                        ) ? (
                          <div className="mt-4 w-full max-w-[1132px] border border-white rounded-2xl card-shadow">
                            <div className="px-4 py-4">
                              <div className="flex justify-start items-start flex-col gap-5">
                                <div className="w-full max-w-[1032px] flex justify-start items-start">
                                  <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
                                    Question:
                                  </p>
                                  <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
                                    {activeQuestionIndex + 1}/
                                    {career.questions.length}
                                  </p>
                                </div>
                                <div className="w-full">
                                  {career.questions.map((quiz, index) => {
                                    if (index !== activeQuestionIndex) return;
                                    return (
                                      <div key={index} className="mb-4 w-full">
                                        <p className="text-xl font-space-gori font-normal text-ship-grey">
                                          {quiz.question}
                                        </p>
                                        {quiz.option?.map((option) => (
                                          <div className="">
                                            <p className="p-[10px] drop-shadow rounded border font-space-gori text-lg text-[#3D3842] border-[#E7E6E7] my-[14px]">
                                              {option}
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              <div className="flex justify-start items-start gap-4 pt-6">
                                <div
                                  onClick={() => {
                                    if (activeQuestionIndex < 1) return;
                                    setActiveQuestionIndex(
                                      activeQuestionIndex - 1
                                    );
                                  }}
                                >
                                  <CareerCustomButton
                                    name="Previous"
                                    className="bg-voilet text-purple-heart"
                                  />
                                </div>
                                <div
                                  onClick={() => {
                                    if (
                                      career.questions &&
                                      activeQuestionIndex >=
                                        career.questions?.length - 1
                                    )
                                      return;
                                    setActiveQuestionIndex(
                                      activeQuestionIndex + 1
                                    );
                                  }}
                                >
                                  <CareerCustomButton
                                    name="Next"
                                    className="text-white"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="pt-4">
                            <div className="w-full max-w-[1132px] border border-white rounded-2xl card-shadow">
                              <div className="px-4 py-4">
                                <div className="flex justify-start items-start flex-col gap-5">
                                  <div className="flex justify-start items-start">
                                    <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
                                      Question:
                                    </p>
                                    <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
                                      {activeQnaIndex + 1}/
                                      {career.questions.length}
                                    </p>
                                  </div>

                                  {/* <p className="text-xl font-space-gori font-normal text-ship-grey">
                                  question ?
                                </p> */}
                                </div>

                                {career.questions.map((quiz, index) => {
                                  if (index !== activeQnaIndex) return;

                                  return (
                                    <div
                                      key={quiz.id}
                                      className="pt-4 flex justify-start items-start flex-col gap-5"
                                    >
                                      <p className="text-xl font-space-gori font-normal text-ship-grey">
                                        {quiz.question}
                                      </p>

                                      <div className="w-full drop-shadow ">
                                        <textarea
                                          rows={4}
                                          placeholder="Type Your Answer"
                                          className=" w-full placeholder:text-base lg:placeholder:text-lg placeholder:font-space-gori placeholder:text-silver-chalice !outline-none rounded p-[10px] text-lg text-[#B1AFB3]"
                                        >
                                          {quiz.awnser}
                                        </textarea>
                                      </div>
                                    </div>
                                  );
                                })}
                                <div className="flex justify-start items-start gap-4 pt-6">
                                  <div
                                    onClick={() => {
                                      if (activeQnaIndex < 1) return;
                                      setActiveQnaIndex(activeQnaIndex - 1);
                                    }}
                                  >
                                    <CareerCustomButton
                                      name="Previous"
                                      className="bg-voilet text-purple-heart"
                                    />
                                  </div>
                                  <div
                                    onClick={() => {
                                      if (
                                        career.questions &&
                                        activeQnaIndex >=
                                          career.questions?.length - 1
                                      )
                                        return;
                                      setActiveQnaIndex(activeQnaIndex + 1);
                                    }}
                                  >
                                    <CareerCustomButton
                                      name="Next"
                                      className="text-white"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* <div className=" flex justify-start items-center flex-col">
              <p className="text-lg lg:text-[28px] font-space-gori font-normal text-purple-heart pt-8">
                Congratulation! You Have Completed Path
              </p>
              <div className="w-full max-w-[802px] flex justify-start items-start ">
                <p className="text-base lg:text-xl font-space-gori text-silver-chalice pt-4 pl-4 lg:pl-16">
                  From interactive lessons to thought-provoking quizzes,
                  everything at MojiGurukul is designed with your curiosity,
                  excitement, and growth in mind.
                  </p>
                  </div>
                  </div> */}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </Box>
      </div>
    </div>
    </div>
  );
}
