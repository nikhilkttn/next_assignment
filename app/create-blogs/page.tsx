"use client";
import React, { useState, useEffect } from "react";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/textArea";
import Button from "@/components/Button/button";
import { INPUT_ERROR_MESSAGES } from "@/constants/constants";
import { useRouter } from "next/navigation";

import axios from "axios";
const CreateBlogs = () => {
  const [formData, setFormData] = useState<any>([]);
  const [formErrors, setFormErrors] = useState<any>({});

  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (!email && !token) {
      alert("Please login to create blogs");
      router.push("/login");
    }
  }, []);

  const createBlog = async () => {
    event?.preventDefault();
    const { title, date, content, author } = formData;

    const payload = {
      title: title,
      date: date,
      content: content,
      author: author,
      email: "admin@admin.com",
    };
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("/api/create-blog", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.data?.statusCode === 200) {
        alert("Blog created successfully.");
      }

      // if(response?)
    } catch (err: any) {
      console.log("err===>", err);
      alert("Something went wrong");
    }
  };

  const formDataHandler = (event: any) => {
    const { name, value } = event.target;
    const trimmedValue = value.trim();

    // Validate the input based on the field name
    const errorMessage =
      trimmedValue.length === 0 ? INPUT_ERROR_MESSAGES[name] : "";

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: trimmedValue,
    }));
    setFormErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const validateForm = () => {
    const { title, content, date, author } = formData;
    const data = title && content && date && author;
    if (data) return false;
    else {
      return true;
    }
  };

  return (
    <>
      <div className="font-semibold text-center">
        <span className="text-center border-black border-b-2 pb-2">
          Create your Blog
        </span>

        <form action="" className="pt-10" onSubmit={createBlog}>
          <div className="text-blue-500 text-2xl"></div>
          <div className="flex flex-col gap-y-4 pt-10">
            <Input
              name="title"
              errorMessage={formErrors.title}
              onChange={formDataHandler}
              onBlur={formDataHandler}
              placeholder="Title"
            />
            <Input
              onChange={formDataHandler}
              onBlur={formDataHandler}
              name="author"
              placeholder="Author"
              errorMessage={formErrors.author}
            />
            <Input
              className={
                "py-2 border-[2px] border-blue-500 rounded-md px-[3.5rem]"
              }
              onChange={formDataHandler}
              onBlur={formDataHandler}
              type="date"
              placeholder="Date"
              name="date"
              errorMessage={formErrors.date}
            />
            <TextArea
              onChange={formDataHandler}
              onBlur={formDataHandler}
              name="content"
              errorMessage={formErrors.content}
              placeholder="Please type your content"
            />
            <span>
              <Button
                type="submit"
                disabled={validateForm()}
                className={
                  "px-5 bg-blue-500 text-white py-2 rounded-md hover:ring-4 hover:ring-blue-500/50"
                }
                name="Submit"
                onClick={createBlog}
              />
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlogs;
