"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/constants/constants";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push("/");
  };
  return (
    <div className="flex flex-wrap justify-center mt-4 pt-2 sticky top-0 bg-white">
      <div className="flex rounded-lg flex-wrap border-gray-300 border-[1px] shadow-md">
        {NAVIGATION_LINKS.map((data: any, index: number) => (
          <>
            <div className="flex flex-wrap gap-x-10 p-4 text-blue-500 font-semibold">
              <Link key={index + data.link} href={data.link}>
                {data?.name}
              </Link>
            </div>
          </>
        ))}
        <div
          onClick={logout}
          className="pt-4 pr-4 text-blue-500 hover:cursor-pointer font-semibold"
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Navigation;
