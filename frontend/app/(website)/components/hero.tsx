"use client";
import React, { useContext } from "react";
import Button from "./common/Button";
import Image from "next/image";
import Context from "../../../context/Context";

export default function Hero() {
  const { setShowLogin } = useContext(Context);

  return (
    <div className="bg-background">
      <div className="sm:flex gap-5 py-8 mx-4 sm:mx-6 md:mx-auto md:w-4/5 max-w-[100rem]">
        <div className="sm:w-2/3 h-auto my-auto">
          <h1
            className="sm:text-start text-2xl sm:text-3xl lg:text-5xl font-bold"
            style={{ lineHeight: "3.8vw" }}
          >
            <span>
              Healthy Minds, Happy
              <br /> Lives
            </span>
            <span className="text-gradient-01"> Mental Health </span>
            <br />
            <span>Consultancy</span>
          </h1>
          <p className="text-[#999AA1] text-start text-lg py-5">
            Welcome to MindMates, your haven for mental
            <br /> wellness!
            <br /> Explore resources, find support, and connect with a<br />{" "}
            community dedicated to nurturing mental health and
            <br /> well-being.
          </p>
          <button
            className={
              "bg-gradient-to-r text-white from-[#4ED6DA] font-semibold to-[#04789D] text-lg text-center h-fit py-2 my-1 px-8 rounded-3xl"
            }
            onClick={(e) => {
              setShowLogin(true);
            }}
          >
            Get Started
          </button>
        </div>
        <div className="bg-[#D5E9F5] h-auto w-7/12 rounded-tl-[4rem] mx-auto">
          <div className="w-auto hidden sm:block">
            <Image
              src="/images/hero.gif"
              alt="card"
              height={100}
              width={100}
              className="h-full object-cover object-center w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
