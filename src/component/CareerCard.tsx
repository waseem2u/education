// import React from "react";
// import CareerCustomButton from "./CareerCustomButton";

// const CareerCard = () => {

  
//   const filterQuestion = CAREER_QUESTION.filter((x, id) =>
//     x.question.includes("2")
//   );

//   const increment = () => {
//     const filterQuestion = CAREER_QUESTION.filter((x, id) =>
//       x.question.includes("2")
//     );
    
//   };
//   const decrement = () => {};
//   return (
//     <div className="w-full max-w-[1132px] card-shadow">
//       {filterQuestion.map((x, index) => (
//                 <div className="flex justify-start items-start flex-col gap-5">
//                   <div className="flex justify-start items-start">
//                     <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
//                       Question:
//                     </p>
//                     <p className="text-base font-space-gori font-normal text-dark-pastel-purple">
//                       {increment}/{decrement}
//                     </p>
//                   </div>
//                   <p className="text-xl font-space-gori font-normal text-ship-grey">
//                     {x.question}
//                   </p>
//                 </div>
//               ))}

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
//                 <div onClick={increment}>
//                   <CareerCustomButton
//                     name="Previous"
//                     className="bg-voilet text-purple-heart"
//                   />
//                 </div>
//                 <div onClick={decrement}>
//                   <CareerCustomButton name="Next" className="text-white" />
//                 </div>
//               </div>
//     </div>
//   );
// };

// export default CareerCard;

// const CAREER_OPTION = [
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
// ];
