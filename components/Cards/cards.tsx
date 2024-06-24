import React from "react";
import { useRouter } from "next/navigation";
import Button from "../Button/button";
import axios from "axios";
import { DELETE_BLOGS } from "@/constants/url";

type CardProps = {
  blogData: { [key: string]: any };
  isBlogDetails?: boolean;
  deleteBlog?: any;
};

const Card = ({ blogData, isBlogDetails, deleteBlog }: CardProps) => {
  const router = useRouter();

  const toggleContent = (id: any) => {
    router.push(`blog-details/${id}`);
  };

  const formatDate = (date: any) => {
    const inputDate = new Date(date);

    const day = String(inputDate.getDate()).padStart(2, "0");
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const year = inputDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  return (
    <>
      {blogData?.length ? (
        <div className="flex gap-x-10 flex-wrap justify-around p-10">
          {blogData?.map((data: any, index: number) => (
            <>
              <div className="bg-gray-200 shadow-md shadow-gray-500 border-black border-[2px] rounded-lg mb-4 p-5">
                {" "}
                <div className="flex flex-col h-full w-full">
                  <span className="italic">{`Title : ${data?.title}`}</span>
                  <span className="italic">{`Author : ${data?.author} `}</span>
                  <span className="italic">{`Date : ${formatDate(
                    data?.date
                  )}`}</span>
                  <span className="font-semibold">
                    {" "}
                    {data?.content && !isBlogDetails
                      ? `${data?.content.split(" ").slice(0, 20).join(" ")}...`
                      : data?.content}
                  </span>
                  <div className="flex flex-col gap-y-2 md:flex md:flex-row gap-x-4 mt-auto pt-4 md:justify-end">
                    {!isBlogDetails && (
                      <>
                        <Button
                          onClick={() => toggleContent(data?.id)}
                          img={"/read.svg"}
                          name="Read More"
                        />
                        <Button
                          onClick={() => deleteBlog(data?._id)}
                          img={"/delete.svg"}
                          name="Delete"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <div className="text-red-500 font-semibold text-center text-2xl">{`Blog not found`}</div>
      )}
      <style jsx>{``}</style>
    </>
  );
};

export default Card;
