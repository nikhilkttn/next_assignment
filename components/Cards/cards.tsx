import React from "react";
import { useRouter } from "next/navigation";
import Button from "../Button/button";

type cardProps = {
  blogData: { [key: string]: any };
  isBlogDetails?: boolean;
};

const Card = ({ blogData, isBlogDetails }: cardProps) => {
  const router = useRouter();

  const toggleContent = (id: any) => {
    router.push(`blog-details/${id}`);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center p-8">
      {!blogData[0]?.message ? (
        blogData?.map((data: any, index: number) => (
          <div
            key={data.id}
            className={`border-black bt-[2px] border-[2px] ${
              !isBlogDetails && "md:basis-1/3 "
            }basis-full  p-4 rounded-2xl bg-gray-200 flex flex-col shadow-gray-300 shadow-md`}
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
                {data?.date_published}
              </div>
            </div>
            <div className="card-content">
              {data?.content && !isBlogDetails
                ? `${data?.content.split(" ").slice(0, 20).join(" ")}...`
                : data?.content}
            </div>
            <div className="read-more mt-auto pt-4">
              {!isBlogDetails && (
                <Button
                  name="Read More"
                  onClick={() => toggleContent(data?.id)}
                />
              )}
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="text-red-500 font-semibold text-center text-2xl">
            {blogData[0]?.message}
          </div>
        </>
      )}
      <style jsx>{``}</style>
    </div>
  );
};

export default Card;
