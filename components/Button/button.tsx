"use client";

import React from "react";

type ButtonProps = {
  type?: "submit" | "reset" | "button";
  name?: string;
  onClick?: any;
  className?: any;
  disabled?: boolean;
};
const Button = ({ name, onClick, className, type, disabled }: ButtonProps) => {
  // py-1 bg-blue-500 px-4 rounded-md text-white hover:ring-4 hover:ring-blue-500/50
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${
          className
            ? className
            : "py-1 bg-blue-500 px-4 rounded-md text-white hover:ring-4 hover:ring-blue-500/50"
        } ${disabled && "opacity-50 cursor-not-allowed"}`}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
