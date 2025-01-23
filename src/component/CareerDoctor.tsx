// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// // import CareerCard from "./CareerCard";
// import CareerInnovate from "./CareerInnovate";
// import {
//   CareerPlay,
//   CareerStroke,
//   TotalPoint,
//   TotalDuration,
//   CareerBulb,
// } from "@/svg";
// import CareerCustomButton from "./CareerCustomButton";
// // import CareerCustomTab from "./CareerCustomTab";

// const CareerDoctor = () => {
//   const [activeIndex, setActiveIndex] = useState();
//   const [currentIndex, setCurrentIndex] = useState(3);
//   const filterPlay = CAREER_OPTION.filter((x) => x.id === activeIndex);

//   const filterQuestion = CAREER_QUESTION.filter(
//     (x) => x.id === currentIndex + 1
//   );

//   const increment = () => {
//     if (currentIndex < CAREER_QUESTION.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const decrement = () => {
//     // if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="px-4 md:px-16 lg:px-40 mt-12 lg:mt-[138px]">
//       <div className="flex justify-start items-center">
//         <div className="w-full max-w-[1192px] h-[474px] flex justify-center items-center">
//           <div className="max-w-[443px] h-full bg-purple-heart rounded-l-lg relative">
//             <Image
//               src="/careerImage/wave.png"
//               alt="wave"
//               width={443}
//               height={309}
//               className="absolute right-0 top-0"
//             />
//             <div className=" px-2 py-8 lg:px-[74px] lg:py-[76px] flex justify-center items-start flex-col gap-9">
//               <div>
//                 <h5 className="text-white font-space-gori font-normal text-2xl lg:text-[32px] ">
//                   Explore Your Career Path
//                 </h5>
//                 <p className="text-base text-light-grey">
//                   Nunc sed id semper risus in hendrerit gravida rutrum. Auctor
//                   augue mauris augue neque gravida in fermentum et. Et ligula
//                   ullamcorper{" "}
//                 </p>
//               </div>
//               <div className="flex justify-start items-start flex-col gap-[14px]">
//                 {CAREER_EXPLORE.map((x, index) => (
//                   <div className="flex justify-start items-start gap-4">
//                     {x.icon}
//                     <p className="text-white font-space-gori font-normal text-xs lg:text-base">
//                       {x.detail}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="bg-natural-grey rounded-r-lg h-full overflow-hidden">
//             <video className=" h-full" controls>
//               <source
//                 src={activeCareer.videopath||"https://docs.material-tailwind.com/demo.mp4"}
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </div>
//       <div className="pt-16">
//         <CareerCustomTab />
//       </div>
//       <div className="vertical-bar pl-4 lg:pl-16 top-4">
//         <div className="pt-4">
//           {/* <CareerCard /> dextop */}

//           <div className="w-full max-w-[1132px] card-shadow">
//             <div className="px-4 py-4">
//               {filterQuestion.length > 0 && (
//                 <div className="flex justify-start items-start flex-col gap-5">
//                   <div className="flex justify-start items-start">
//                     <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
//                       Question:
//                     </p>
//                     <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
//                       {currentIndex + 1}/{CAREER_QUESTION.length}
//                     </p>
//                   </div>
//                   <p className="text-xl font-space-gori font-normal text-ship-grey">
//                     {filterQuestion[0]?.question}
//                   </p>
//                 </div>
//               )}

//               <div className="pt-4 ">
//                 {CAREER_OPTION.map((x, index) => (
//                   <div key={index} className="pt-[14px]">
//                     {index === 0 ? (
//                       <select
//                         key={index}
//                         className="w-full drop-shadow border-none text-white border-purple-heart rounded px-[10px] py-[10px] appearance-none bg-purple-heart"
//                       >
//                         <option className="text-base lg:text-lg font-space-gori font-normal text-ship-grey">
//                           {x.title}
//                         </option>
//                       </select>
//                     ) : (
//                       <select
//                         key={index}
//                         className="w-full drop-shadow border border-white-rock rounded px-[10px] py-[10px] appearance-none bg-transparent"
//                       >
//                         <option className="text-base lg:text-lg font-space-gori font-normal text-ship-grey">
//                           {x.title}
//                         </option>
//                       </select>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-start items-start gap-4 pt-6">
//                 <div onClick={decrement}>
//                   <CareerCustomButton
//                     name="Previous"
//                     className="bg-voilet text-purple-heart"
//                   />
//                 </div>
//                 <div onClick={increment}>
//                   <CareerCustomButton name="Next" className="text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey py-6">
//           <div className="relative">
//             <div className="absolute -left-6 lg:-left-20 top-[3px] lg:top-0 w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full"></div>
//             <div className="">
//               <div className="flex justify-center items-center gap-2">
//                 <div className="hidden lg:block">
//                   <Image
//                     src="/career/careerLamp.svg"
//                     alt="career"
//                     width={30}
//                     height={30}
//                   />
//                 </div>
//                 <div className="lg:hidden">
//                   <Image
//                     src="/career/careerLamp.svg"
//                     alt="career"
//                     width={24}
//                     height={24}
//                   />
//                 </div>
//                 <p className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
//                   Quiz
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <span className="text-xs lg:text-base font-space-gori font-semibold text-[#697585]">
//               10 Questions
//             </span>
//           </div>
//         </div>
//         <div className="pt-4">
//           <div className="w-full max-w-[1132px] card-shadow">
//             <div className="px-4 py-4">
//               {filterQuestion.length > 0 && (
//                 <div className="flex justify-start items-start flex-col gap-5">
//                   <div className="flex justify-start items-start">
//                     <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
//                       Question:
//                     </p>
//                     <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
//                       {currentIndex + 1}/{CAREER_QUESTION.length}
//                     </p>
//                   </div>
//                   <p className="text-xl font-space-gori font-normal text-ship-grey">
//                     {filterQuestion[0]?.question}
//                   </p>
//                 </div>
//               )}
//               <div className="pt-4 ">
//                 <div className=" border rounded px-[10px] pt-[10px] pb-[108px]">
//                   <input
//                     type="text"
//                     placeholder="Type Your Answer"
//                     className="placeholder:text-base lg:placeholder:text-lg placeholder:font-space-gori placeholder:text-silver-chalice"
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-start items-start gap-4 pt-6">
//                 <div onClick={decrement}>
//                   <CareerCustomButton
//                     name="Previous"
//                     className="bg-voilet text-purple-heart"
//                   />
//                 </div>
//                 <div onClick={increment}>
//                   <CareerCustomButton name="Next" className="text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* dextop screen */}

//         {CAREER_D0CTOR.map((x, index) => (
//           <div key={index} className="relative block md:hidden">
//             <div className="absolute -left-6 top-[24px] lg:-left-20  lg:top-[1px] w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full"></div>
//             <div className="">
//               <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey py-6">
//                 <div className=" flex justify-center items-center flex-col gap-2">
//                   <div className="flex justify-center items-center gap-2 ">
//                     <div className="flex justify-center items-center gap-1">
//                       <div
//                         onClick={() => {
//                           setActiveCareer(x);
//                         }}
//                         className="w-6 h-6 lg:w-[30px] lg:h-[30px] border border-purple-heart rounded-full flex justify-center items-center"
//                       >
//                         {x.image}
//                       </div>

//                       <span className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
//                         {x.id}
//                       </span>
//                     </div>
//                     <p className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
//                       {x.name}
//                     </p>
//                   </div>
//                   <div className="flex justify-center items-center gap-1">
//                     <div className="flex justify-center items-center rounded-lg bg-off-green">
//                       <p className=" text-base lg:text-base font-semibold text-caribbean-green px-2 py-2 text-center lg:px-4 lg:py-[10px]">
//                         {x.percent}
//                       </p>
//                     </div>
//                     <div>
//                       <span className="text-base lg:text-base font-space-gori font-semibold text-blue-grey">
//                         {x.minute}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {CAREER_PART.map((x, index) => (
//           <div key={index} className="relative hidden md:block">
//             <div className="absolute -left-6 lg:-left-20 top-8 lg:top-7 w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full"></div>
//             <div className="">
//               <div className=" w-full max-w-[1132px] flex justify-between items-center border-b border-natural-grey py-6">
//                 <div className=" flex justify-center items-center gap-2 lg:gap-14">
//                   <div className="flex justify-center items-center gap-2 ">
//                     <div className="w-6 h-6 lg:w-[30px] lg:h-[30px] border border-purple-heart rounded-full flex justify-center items-center">
//                       {x.image}
//                     </div>

//                     <span className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
//                       {x.count}
//                     </span>
//                     <p className="text-base lg:text-xl font-space-gori font-normal text-nile-blue">
//                       {x.name}
//                     </p>
//                   </div>
//                   <div className="flex justify-center items-center rounded-lg bg-off-green">
//                     <p className="text-xs lg:text-base font-semibold text-caribbean-green px-1 py-2 lg:px-4 lg:py-[10px] text-center">
//                       {x.percent}
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <span className="text-xs lg:text-base font-space-gori font-semibold text-blue-grey">
//                     {x.minute}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className="relative">
//           <div className="absolute -left-6 lg:-left-20 top-[39px] lg:top-7 w-4 h-4 lg:w-[32px] lg:h-[32px] stars-shadow border border-light-violet rounded-full flex justify-center items-center">
//             <div className="w-3 h-3 rounded-full bg-purple-heart"></div>
//           </div>
//           <div className="">
//             <p className="text-lg lg:text-[28px] font-space-gori font-normal text-purple-heart pt-8">
//               Congratulation! You Have Completed Path
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full max-w-[802px] flex justify-start items-start ">
//         <p className="text-base lg:text-xl font-space-gori text-silver-chalice pt-4 pl-4 lg:pl-16">
//           From interactive lessons to thought-provoking quizzes, everything at
//           MojiGurukul is designed with your curiosity, excitement, and growth in
//           mind.
//         </p>
//       </div>
//     </div>
//   );
// };
// export default CareerDoctor;
// export const CAREER_D0CTOR = [
//   {
//     id: 1,
//     image: <CareerPlay />,
//     count: "1.",
//     name: "Introduction of Doctor Career",
//     percent: " 10% completed",
//     minute: "10 minutes",
//   },
//   {
//     id: 2,
//     image: <CareerPlay />,
//     count: "2.",
//     name: "Introduction of Doctor Career",
//     percent: " 20% completed",
//     minute: "10 minutes",
//   },
//   {
//     id: 3,
//     image: <CareerPlay />,
//     count: "3.",
//     name: "Introduction of Doctor Career",
//     percent: " 30% completed ",
//     minute: "10 minutes",
//   },
//   {
//     id: 4,
//     image: <CareerPlay />,
//     count: "4.",
//     name: "Introduction of Doctor Career",
//     percent: " 40% completed",
//     minute: "10 minutes",
//   },
//   {
//     id: 5,
//     image: <CareerPlay />,
//     count: "5.",
//     name: "Introduction of Doctor Career",
//     percent: " 50% completed",
//     minute: "10 minutes",
//   },
//   {
//     id: 6,
//     image: "/career/careerLamp.svg",

//     name: "Quiz",
//     minute: "10 minutes",
//   },
// ];
// const CAREER_PART = [
//   {
//     id: 1,
//     image: <CareerPlay />,
//     count: "6.",
//     name: "Introduction of Doctor Career",
//     percent: " 10% Completed",
//     minute: "10 minutes",
//   },
//   {
//     id: 2,
//     image: <CareerPlay />,
//     count: "7.",
//     name: "Introduction of Doctor Career",
//     percent: " 10% Completed",
//     minute: "10 minutes",
//   },
//   {
//     id: 3,
//     image: <CareerPlay />,
//     video:"",
//     count: "8.",
//     name: "Introduction of Doctor Career",
//     percent: " 10% Completed",
//     minute: "10 minutes",
//   },
// ];
// const CAREER_EXPLORE = [
//   {
//     id: 1,
//     icon: <CareerStroke />,
//     detail: " Career Level",
//   },
//   {
//     id: 2,
//     icon: <TotalPoint />,
//     detail: "Total Point : 80",
//   },
//   {
//     id: 3,
//     icon: <TotalDuration />,
//     detail: "Duration : 8 segment Total 80 Minutes",
//   },
// ];

// const CAREER_OPTION = [
//   {
//     id: 1,
//     title: "  No one",
//   },
//   {
//     id: 2,
//     title: "  Option 2",
//   },
//   {
//     id: 3,
//     title: "  Option 3",
//   },
//   {
//     id: 4,
//     title: "  Option",
//   },
// ];

// const CAREER_QUESTION = [
//   {
//     id: 1,
//     question: "Who is the innovate bulb? 1",
//   },
//   {
//     id: 2,
//     question: "Who is the innovate bulb? 2",
//   },
//   {
//     id: 3,
//     question: "Who is the innovate bulb? 3",
//   },
//   {
//     id: 4,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 5,
//     question: "Who is the innovate bulb? 5",
//   },
//   {
//     id: 6,
//     question: "Who is the innovate bulb? 6",
//   },
//   {
//     id: 7,
//     question: "Who is the innovate bulb? 7",
//   },
//   {
//     id: 8,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 9,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 10,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 11,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 12,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 13,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 14,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 15,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 16,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 17,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 18,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 19,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 20,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 21,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 22,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 23,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 24,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 25,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 26,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 27,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 28,
//     question: "Who is the innovate bulb? 4",
//   },
//   {
//     id: 29,
//     question: "Who is the innovate bulb? 4",
//   },
// ];
