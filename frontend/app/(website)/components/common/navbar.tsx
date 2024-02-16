"use client";
import Link from "next/link";
import React, { useContext } from "react";
import Button from "./Button";
import Image from "next/image";
import Context from "../../../../context/Context";
import Login from "../common/Login";

export default function Navbar() {
  const { setShowLogin } = useContext(Context);
  const navLinks = [
    { id: 1, title: "Home", url: "" },
    { id: 2, title: "Service", url: "" },
    { id: 3, title: "Contact", url: "" },
    { id: 4, title: "About Us", url: "" },
  ];

  return (
    <nav className="flex justify-between bg-background py-3 fixed w-full top-0 left-0">
      <Login />
      <div className="logo my-auto max-w-fit">
        <Image
          src="/logos/logo.svg"
          alt="card"
          height={100}
          width={100}
          className="h-auto sm:w-auto"
        />
      </div>
      <div className="hidden sm:flex gap-5 items-center text-grey ">
        {navLinks?.map((item) => {
          return (
            <div key={item?.id} className="p">
              <Link href={item?.url}>{item?.title}</Link>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4">
        <button
          className={
            "bg-gradient-to-r text-white from-[#4ED6DA] to-[#04789D] text-center h-fit py-1 my-1 px-5 rounded-3xl"
          }
          onClick={(e) => {
            setShowLogin(true);
          }}
        >
          Explore
        </button>
      </div>
    </nav>
  );
}
