"use client";

import React from "react";
import Image from "next/image";
type ButtonProps = {
  type?: "submit" | "reset" | "button";
  name: string;
  onClick?: any;
  className?: any;
  disabled?: boolean;
  img?: any;
};
const Button = ({
  name,
  onClick,
  className,
  type,
  disabled,
  img,
}: ButtonProps) => {
  // py-1 bg-blue-500 px-4 rounded-md text-white hover:ring-4 hover:ring-blue-500/50
  const selectClasses: any = {
    default:
      "py-1 bg-blue-500 px-4 rounded-md text-white hover:ring-4 hover:ring-blue-500/50",
    Delete:
      "py-1 bg-red-500 px-4 rounded-md text-white hover:ring-4 hover:ring-red-500/50",
  };

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${
          className
            ? className
            : `${
                selectClasses[name]
                  ? selectClasses[name]
                  : selectClasses?.default
              } ${img && "flex gap-x-2 items-center"}`
        } ${disabled && "opacity-50 cursor-not-allowed"}`}
      >
        {name}
        {/* <img src={img} alt="" /> */}
        {img && (
          <Image
            src={img} // Replace with the actual path to your image
            alt="button-img"
            width={15} // Width of the image container
            height={15} // Height of the image container
          />
        )}
      </button>
    </>
  );
};

export default Button;
