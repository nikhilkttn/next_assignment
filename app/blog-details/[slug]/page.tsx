"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Cards/cards";
const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const [apiData, setApiData] = useState<{ [key: string]: any }>([]);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        `https://dummyapi.online/api/blogposts/${params.slug}`
      );
      const apiData = await response.json();
      setApiData([apiData]);
    } catch {
      console.log("api failed");
    }
  };

  return (
    <>
      <div className="m-4">
        <div className="font-semibold text-center mb-4">
          <span className="text-center border-black border-b-2 pb-2">
            Blogs Details
          </span>
        </div>
        {apiData?.length ? (
          <Card blogData={apiData} isBlogDetails={true} />
        ) : (
          <div className="text-center">Loading...</div>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
