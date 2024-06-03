"use client";

import { NAVIGATION_LINKS } from "@/constants/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-gray-800 footer">
        <div className="max-w-2xl mx-auto text-white p-2">
          <div className="flex flex-col items-center text-sm text-gray-200">
            <p className=""> &copy; Footer, 2024. </p>
            <div className="pt-4">
              {NAVIGATION_LINKS.map((data: any, index: number) => (
                <>
                  <Link
                    key={index}
                    className={`px-2 ${
                      index !== NAVIGATION_LINKS.length - 1 && "border-r"
                    }`}
                    href={data?.link}
                  >
                    {data?.name}
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
        }
      `}</style>
    </>
  );
};

export default Footer;
