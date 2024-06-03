"use client";
import React, { useEffect, useState } from "react";
import BlogsCards from "@/components/Cards/cards";
import axios from "axios";
import { DELETE_BLOGS, READ_BLOGS } from "@/constants/url";
import { useRouter } from "next/navigation";

const BlogsPages = () => {
  const [apiData, setApiData] = useState(null);
  const [email, setEmail] = useState<any>(null);
  const [token, setToken] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (!email && !token) {
      alert("Please login to read the blogs.");
      router.push("/login");
    }
    setEmail(email);
    setToken(token);
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const payload: any = {
        email: localStorage.getItem("email") || "",
      };
      const response: any = await axios.post(READ_BLOGS, payload);

      setApiData(response?.data?.data);
    } catch {
      console.log("api failed");
    }
  };

  const deleteBlog = async (blogId: any) => {
    const deleteTheBlog = window.confirm(
      "Are you sure you want to delete the blog"
    );

    if (deleteTheBlog) {
      try {
        const payload = {
          email: localStorage.getItem("email"),
          id: blogId,
        };
        const response = await axios.post(DELETE_BLOGS, payload);
        if (response?.data?.statusCode === 200) {
          fetchDataFromApi();
        }
      } catch (err: any) {
        console.log("err==>", err);
      }
    }
  };

  return (
    <>
      {email && token && (
        <div>
          <div className="font-semibold text-center pb-8">
            <span className="text-center border-black border-b-2 pb-2">
              Blogs{" "}
            </span>
          </div>
          {apiData ? (
            <div className="mb-[5rem]">
              <BlogsCards deleteBlog={deleteBlog} blogData={apiData} />
            </div>
          ) : (
            <div className="text-center pt-5">Loading...</div>
          )}
        </div>
      )}
    </>
  );
};

export default BlogsPages;
