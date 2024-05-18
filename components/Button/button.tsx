"use client";

import React from "react";

const Button = ({ name, onClick }: any) => {
  return (
    <>
      <button
        // onClick={redirect}
        onClick={onClick}
        className="bg-blue-500 py-1 px-4 rounded-md text-white  hover:ring-4 hover:ring-blue-500/50"
      >
        {name}
      </button>
    </>
  );
};

export default Button;
