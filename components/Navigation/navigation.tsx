import React from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/constants/constants";
const Navigation = () => {
  return (
    <div className="flex justify-center pt-4">
      <div className="flex rounded-lg border-gray-300 border-[1px]">
        {NAVIGATION_LINKS.map((data: any, index: number) => (
          <>
            <div className="flex gap-x-10 p-4 text-blue-500 font-semibold">
              <Link key={index + data.link} href={data.link}>
                {data.name}
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
