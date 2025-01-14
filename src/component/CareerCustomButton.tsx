import classNames from "classnames";
import React from "react";
interface CustomButtonIProps {
  name: string;
  className?: string;
}
const CareerCustomButton = ({ name, className }: CustomButtonIProps) => {
  return (
    <button
      className={classNames(
        "font-space-gori text-sm text-purple-heart border-2 border-purple-heart rounded-lg py-2 px-[14px] bg-purple-heart",
        className
      )}
    >
      {name}
    </button>
  );
};

export default CareerCustomButton;
