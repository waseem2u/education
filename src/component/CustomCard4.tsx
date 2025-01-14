import React from "react";
import { HowMojiDifferentTypes } from "@/types";
import Image from "next/image";

const CustomCard4: React.FC<HowMojiDifferentTypes> = ({
  id,
  title,
  paragraph,
  icon,
}) => {
  const getColorScheme = (id: number) => {
    switch (id) {
      case 1:
        return {
          iconBoxBgColor: "#22CC9B",
          iconBoxBorderColor: "#C6F6E8",
          cardBorderColor: "#22CC9B",
          cardBgColor: "#E9FAF5",
        };
      case 2:
        return {
          iconBoxBgColor: "#EB4E59",
          iconBoxBorderColor: "#FAD1D4",
          cardBorderColor: "#EB4E59",
          cardBgColor: "#FEF5FD",
        };
      case 3:
        return {
          iconBoxBgColor: "#4D9EFA",
          iconBoxBorderColor: "#CDE4FE",
          cardBorderColor: "#22CC9B",
          cardBgColor: "#EDF5FF",
        };
    }
  };

  return (
    <div
      className="w-full max-w-[544px] hover:border-2 rounded-2xl card4 p-2 md:p-6"
      style={{
        backgroundColor: getColorScheme(id)?.cardBgColor,
        borderColor: getColorScheme(id)?.cardBorderColor,
      }}
    >
      <div className="flex gap-8 items-center">
        <div
          className="w-16 h-16 border-4 rounded-lg flex flex-shrink-0 justify-center items-center"
          style={{
            backgroundColor: getColorScheme(id)?.iconBoxBgColor,
            borderColor: getColorScheme(id)?.iconBoxBorderColor,
          }}
        >
          {id === 3 ? (
            <Image src="/video/icon-1.png" alt="" width={22} height={22} />
          ) : (
            <span className="w-[22px] h-[22px] border-none">{icon}</span>
          )}
        </div>
        <div className="flex justify-start items-start flex-col ">
          <h3 className="font-space-gori font-medium text-black text-xl lg:text-3.3xl text-start">
            {title}
          </h3>
          <p className="text-base md:text-xl font-space-gori font-normal text-natural-grey">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard4;
