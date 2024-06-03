import React from "react";
import { useRouter } from "next/navigation";
import Button from "../Button/button";
import axios from "axios";
import { DELETE_BLOGS } from "@/constants/url";

type cardProps = {
  blogData: { [key: string]: any };
  isBlogDetails?: boolean;
  deleteBlog?: any;
};

const Card = ({ blogData, isBlogDetails, deleteBlog }: cardProps) => {
  const router = useRouter();

  // const toggleContent = (id: any) => {
  //   router.push(`blog-details/${id}`);
  // };

  const formatDate = (date: any) => {
    const inputDate = new Date(date);

    const day = String(inputDate.getDate()).padStart(2, "0");
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const year = inputDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };
  return (
    <div className="flex flex-col gap-y-4 p-8">
      {blogData?.length ? (
        blogData?.map((data: any, index: number) => (
          <div
            key={data.id}
            className={`border-black bt-[2px] basis-full border-[2px] p-4 rounded-2xl bg-gray-200 shadow-gray-300 shadow-md`}
          >
            <div className="flex flex-col card-details">
              <div>
                <span className="font-semibold">Title: </span>
                {data?.title}
              </div>
              <div>
                <span className="font-semibold">Author: </span>
                {data?.author}
              </div>
              <div>
                <span className="font-semibold">Publish Date: </span>
                {formatDate(data?.date)}
              </div>
            </div>
            <div className="card-content">
              {data?.content && !isBlogDetails
                ? `${data?.content.split(" ").slice(0, 20).join(" ")}...`
                : data?.content}
            </div>
            <div className="read-more mt-auto pt-4">
              {!isBlogDetails && (
                <div className="flex gap-x-4">
                  {/* <Button
                    name="Read More"
                    // onClick={() => toggleContent(data?._id)}
                  /> */}
                  <Button
                    name="Delete"
                    className={"bg-red-500 text-white p-2 rounded-md px-8"}
                    onClick={() => deleteBlog(data?._id)}
                  />
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="text-red-500 font-semibold text-center text-2xl">
            {`No data available`}
          </div>
        </>
      )}
      <style jsx>{``}</style>
    </div>
  );
};

export default Card;
