"use client";
import React, { use, useEffect, useState } from "react";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/button";
import {
  INPUT_ERROR_MESSAGES,
  INPUT_VALIDATION_REGEX,
} from "@/constants/constants";
import axios from "axios";
import { LOGIN } from "@/constants/url";
import { useRouter } from "next/navigation";

const LoginForm = () => {
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

    if (name === "email" && !isValidEmail(value)) {
      errorMessage = INPUT_ERROR_MESSAGES.email;
    } else if (name === "password" && value?.length < 6) {
      errorMessage = INPUT_ERROR_MESSAGES.password;
    } else if (!value) {
      errorMessage = INPUT_ERROR_MESSAGES[name];
    }
    setFormErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const login = async (event: any) => {
    event.preventDefault();
    try {
      const { email, password } = formData;
      const response: any = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (Number(response?.data?.statusCode) === 200) {
        router.push("/blogs");
      }

      localStorage.setItem("email", response?.data?.user?.email);
      localStorage.setItem("token", response?.data?.user?.token);
    } catch (error: any) {
      alert("somethin went wrong");
    }
  };

  return (
    <>
      <div className="font-semibold text-center">
        <span className="text-center border-black border-b-2 pb-2">
          Welcome to Home Page
        </span>

        <form action="" className="pt-10 flex justify-center">
          <div className="bg-gray-100 p-10 border-gray-900 rounded-md border-[3px]">
            <div className="text-blue-500 text-2xl">Log In</div>
            <div className="flex flex-col gap-y-4 pt-10">
              <Input
                onChange={formDataHandler}
                placeholder="Email"
                onBlur={formDataHandler}
                name="email"
                minLength={14}
                errorMessage={formErrors?.email}
              />
              <Input
                onChange={formDataHandler}
                placeholder="Password"
                onBlur={formDataHandler}
                name="password"
                type="password"
                minLength={8}
                errorMessage={formErrors?.password}
              />
              <span>
                <Button
                  type="submit"
                  onClick={login}
                  disabled={
                    !formErrors?.password && isValidEmail(formData?.email)
                      ? false
                      : true
                  }
                  name="Log in"
                />
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
