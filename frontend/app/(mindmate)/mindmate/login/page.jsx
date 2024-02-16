"use client";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import BASE_URL from "../../../url/index";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Context from "../../../../context/Context";

const Mindmate = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const history = useRouter();
  const { setMindmate } = useContext(Context);

  return (
    <div className="flex items-center justify-center w-full text-gray h-[100vh]">
      <Toaster />
      <div className="w-[16vw] items-center flex flex-col">
        <h1 className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-lightGreen to-darkGreen text-transparent">
          Login as Mindmate
        </h1>
        <input
          type="text"
          value={user?.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="Enter email"
          className="border outline-none px-3 py-1 my-4 rounded-md w-full"
        />
        <div className="w-full flex items-center relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={user?.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            className="border outline-none px-3 py-1 rounded-md w-full"
          />
          <div
            className="text-xl absolute right-3 cursor-pointer"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </div>
        </div>
        <button
          onClick={(e) => {
            if (!user?.email || !user?.password) {
              toast.error("Please fill all the details");
            } else {
              axios
                .post(`${BASE_URL}/mindmate/login`, { ...user })
                .then((response) => {
                  if (response.status == 200) {
                    history.push("/mindmate");
                    setMindmate(response.data.user);
                    setCookie("token", response.data.jwtToken);
                  } else {
                    toast.error(response.data);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          }}
          className="border py-0.5 px-5 mt-4 rounded-md text-lg font-medium bg-gradient-to-r from-lightGreen to-darkGreen text-white"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Mindmate;
