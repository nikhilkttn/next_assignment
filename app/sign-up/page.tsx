"use client";

import React, { useState, useEffect } from "react";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/textArea";
import Button from "@/components/Button/button";
import {
  INPUT_ERROR_MESSAGES,
  INPUT_VALIDATION_REGEX,
} from "@/constants/constants";
import axios from "axios";
import connectDB from "../lib/dbConnect";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [formData, setFormData] = useState<any>([]);
  const [formErrors, setFormErrors] = useState<any>({});

  const router = useRouter();

  useEffect(() => {
    const getEmail = localStorage.getItem("email");
    const getToken = localStorage.getItem("token");

    if (getEmail && getToken) {
      router.push("/blogs");
    }
  }, []);

  const isValidEmail = (username: any) => {
    return INPUT_VALIDATION_REGEX.email.test(username);
  };

  const formDataHandler = (event: any) => {
    let errorMessage = "";
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value.trim(),
    }));

    if (name === "email") {
      if (!isValidEmail(value)) {
        errorMessage = INPUT_ERROR_MESSAGES.email;
      }
    } else if (name === "password") {
      if (value?.length < 6) {
        errorMessage = INPUT_ERROR_MESSAGES[name];
      }
    } else if (!value) {
      errorMessage = INPUT_ERROR_MESSAGES[name];
    }
    setFormErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };
  const signUp = async (event: any) => {
    event?.preventDefault();
    const { email, password, name } = formData;
    if (email && password) {
      try {
        const response: any = await axios.post("/api/auth/register", {
          name,
          email,
          password,
        });

        if (response?.statusCode === "200") {
          alert("sign up successfull");
        }
      } catch (error: any) {
        alert(error.response.data.message);
        // throw new Error(error.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="font-semibold text-center">
        <span className="text-center border-black border-b-2 pb-2">
          Welcome to Home Page
        </span>

        <form action="" className="pt-10 flex justify-center ">
          <div className="bg-gray-100 p-10 border-gray-900 rounded-md border-[3px]">
            <div className="text-blue-500 text-2xl">Sign Up</div>
            <div className="flex flex-col gap-y-4 pt-10">
              <Input
                onChange={formDataHandler}
                placeholder="Name"
                name="name"
                type="name"
                // minLength={12}
                onBlur={formDataHandler}
                errorMessage={formErrors?.name}
              />
              <Input
                onChange={formDataHandler}
                placeholder="Email"
                name="email"
                // minLength={20}
                onBlur={formDataHandler}
                errorMessage={formErrors?.email}
              />
              <Input
                onChange={formDataHandler}
                placeholder="Password"
                name="password"
                type="password"
                // minLength={12}
                onBlur={formDataHandler}
                errorMessage={formErrors?.password}
              />
              <span>
                <Button
                  type="submit"
                  disabled={
                    formData?.password && isValidEmail(formData?.email)
                      ? false
                      : true
                  }
                  name="Sign Up"
                  onClick={signUp}
                />
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
