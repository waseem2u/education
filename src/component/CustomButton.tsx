import classNames from "classnames";
import React from "react";
interface CustomButtonIProps {
  name: string;
  className?: string;
}
const CustomButton = ({ name, className }: CustomButtonIProps) => {
  return (
    <button
      className={classNames(
        "font-space-gori text-lg md:text-2xl text-white border-2 border-white rounded-lg py-[14px] px-7 bg-[#260673]",
        className
      )}
    >
      {name}
    </button>
  );
};

export default CustomButton;
