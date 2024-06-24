"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Cards/cards";
import axios from "axios";
import { READ_BLOGS } from "@/constants/url";
const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const [apiData, setApiData] = useState<{ [key: string]: any }>([]);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      let payload: any = {
        email: localStorage.getItem("email"),
      };
      if (params?.slug) {
        payload.id = params?.slug;
      }
      const response = await axios.post(READ_BLOGS, payload);
      if (response?.data?.data?.length) {
        setApiData([response?.data?.data[0]]);
      } else {
        setApiData([]);
      }
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
